import { NextRouter } from 'next/router';
import { flushSync } from 'react-dom';

import { scrollToTop } from 'utils/window';

type ViewTransitionMode = 'section' | 'detail' | 'list' | 'theme';

type NavigateOptions = {
  shallow?: boolean;
  replace?: boolean;
  source?: Element | null;
};

type StateOptions = {
  mode?: Extract<ViewTransitionMode, 'list' | 'theme'>;
  within?: Element | null;
};

const VT = 'data-vt-name';
const VT_CLASS = 'data-vt-class';
const NAMED = `[${VT}]`;
const PAINT_TIMEOUT = 120;
const SHARED_NAV_KEY = 'vt-shared-nav';

const KIND_BY_PREFIX: Record<string, string> = {
  'vt-page-title': 'title',
  'vt-talk-title': 'title',
  'vt-post-title': 'title',
  'vt-about-title': 'title',
  'vt-talk-card': 'card',
  'vt-about-card': 'hero',
  'vt-post-hero': 'hero',
  'vt-post-date': 'date',
  'vt-post-row': 'row',
  'vt-radar-row': 'row',
};

let currentTransition: ViewTransition | null = null;
let active: HTMLElement[] = [];

export function normalizePath(path: string) {
  const bare = path.split('?')[0]?.split('#')[0] ?? path;

  if (bare.length > 1 && bare.endsWith('/')) {
    return bare.slice(0, -1);
  }

  return bare;
}

export function isSamePath(path: string, other: string) {
  return normalizePath(path) === normalizePath(other);
}

function segments(path: string) {
  return normalizePath(path).split('/').filter(Boolean);
}

function sanitizeSlug(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function slugFromHref(href: string) {
  if (!href.startsWith('http')) {
    return sanitizeSlug(segments(href).pop() ?? href);
  }

  try {
    return sanitizeSlug(new URL(href).pathname.split('/').filter(Boolean).pop() ?? href);
  } catch {
    return sanitizeSlug(href);
  }
}

function vtPageTitle(slugOrHref: string) {
  return `vt-page-title-${slugFromHref(slugOrHref)}`;
}

function vtTalkTitle(slugOrHref: string) {
  return `vt-talk-title-${slugFromHref(slugOrHref)}`;
}

function vtTalkCard(slugOrHref: string) {
  return `vt-talk-card-${slugFromHref(slugOrHref)}`;
}

function vtPostTitle(slug: string) {
  return `vt-post-title-${sanitizeSlug(slug)}`;
}

function vtPostHero(slug: string) {
  return `vt-post-hero-${sanitizeSlug(slug)}`;
}

function vtPostDate(slug: string) {
  return `vt-post-date-${sanitizeSlug(slug)}`;
}

function vtPostRow(slug: string) {
  return `vt-post-row-${sanitizeSlug(slug)}`;
}

function vtAboutCard(slugOrHref: string) {
  return `vt-about-card-${slugFromHref(slugOrHref)}`;
}

function vtAboutTitle(slugOrHref: string) {
  return `vt-about-title-${slugFromHref(slugOrHref)}`;
}

function vtRadarRow(id: string) {
  return `vt-radar-row-${sanitizeSlug(id)}`;
}

export const vtKeys = {
  pageTitle: vtPageTitle,
  talkTitle: vtTalkTitle,
  talkCard: vtTalkCard,
  postTitle: vtPostTitle,
  postHero: vtPostHero,
  postDate: vtPostDate,
  postRow: vtPostRow,
  aboutCard: vtAboutCard,
  aboutTitle: vtAboutTitle,
  radarRow: vtRadarRow,
};

export function shouldUseViewTransition() {
  if (typeof document === 'undefined' || !('startViewTransition' in document)) {
    return false;
  }

  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function setRevealOrigin(x: number, y: number) {
  const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
  const { style } = document.documentElement;

  style.setProperty('--vt-origin-x', `${x}px`);
  style.setProperty('--vt-origin-y', `${y}px`);
  style.setProperty('--vt-origin-radius', `${radius}px`);
}

function clearRevealOrigin() {
  const { style } = document.documentElement;

  style.removeProperty('--vt-origin-x');
  style.removeProperty('--vt-origin-y');
  style.removeProperty('--vt-origin-radius');
}

function inferKind(name: string) {
  for (const [prefix, kind] of Object.entries(KIND_BY_PREFIX)) {
    if (name.startsWith(`${prefix}-`)) {
      return kind;
    }
  }
}

export function viewTransitionProps(name?: string) {
  if (!name) {
    return {};
  }

  const props: Record<string, string> = { [VT]: name };
  const kind = inferKind(name);

  if (kind) {
    props[VT_CLASS] = kind;
  }

  return props;
}

function modeForRoute(from: string, to: string) {
  const a = segments(from);
  const b = segments(to);
  const isDetailStep = (parent: string[], child: string[]) =>
    child.length === parent.length + 1 && parent.every((part, index) => part === child[index]);

  if (isDetailStep(a, b) || isDetailStep(b, a)) {
    return 'detail';
  }

  return 'section';
}

function setMode(mode: ViewTransitionMode | null) {
  if (!mode) {
    delete document.documentElement.dataset.vtMode;
    return;
  }

  document.documentElement.dataset.vtMode = mode;
}

function startViewTransition(mode: ViewTransitionMode, runUpdate: () => Promise<void>) {
  const run = async () => {
    await runUpdate();
    await waitForPaint();
  };

  try {
    return document.startViewTransition({ update: run, types: [mode] });
  } catch {
    // Older engines: callback form + data-vt-mode for CSS that lacks :active-view-transition-type
    setMode(mode);

    return document.startViewTransition(run);
  }
}

function rememberSharedNav(from: string, to: string, names: string[]) {
  if (!names.length || typeof sessionStorage === 'undefined') {
    return;
  }

  try {
    sessionStorage.setItem(
      SHARED_NAV_KEY,
      JSON.stringify({ from: normalizePath(from), to: normalizePath(to), names })
    );
  } catch {
    // Quota or private mode — back nav falls back to a section transition
  }
}

function recallSharedNav(current: string, destination: string) {
  if (typeof sessionStorage === 'undefined') {
    return [];
  }

  try {
    const raw = sessionStorage.getItem(SHARED_NAV_KEY);

    if (!raw) {
      return [];
    }

    const record = JSON.parse(raw);

    if (record?.from !== normalizePath(destination) || record?.to !== normalizePath(current)) {
      return [];
    }

    if (!Array.isArray(record.names)) {
      return [];
    }

    return record.names;
  } catch {
    return [];
  }
}

function namedIn(root: ParentNode) {
  return Array.from(root.querySelectorAll<HTMLElement>(NAMED));
}

function uniqueByName(elements: HTMLElement[]) {
  const seen = new Set<string>();

  return elements.filter((element) => {
    const name = element.dataset.vtName;

    if (!name || seen.has(name)) {
      return false;
    }

    seen.add(name);
    return true;
  });
}

function elementsByNames(names: string[], root: ParentNode = document) {
  return names.flatMap((name) => {
    const element = root.querySelector<HTMLElement>(`[${VT}="${CSS.escape(name)}"]`);

    return element ? [element] : [];
  });
}

function sharedFrom(source: Element) {
  const wrapper = source.closest<HTMLElement>(NAMED);

  if (wrapper) {
    return uniqueByName([wrapper, ...namedIn(source)]);
  }

  return uniqueByName(namedIn(source));
}

function activate(elements: HTMLElement[]) {
  for (const element of elements) {
    element.style.viewTransitionName = element.dataset.vtName ?? '';

    if (element.dataset.vtClass) {
      element.style.viewTransitionClass = element.dataset.vtClass;
    }

    active.push(element);
  }
}

function warnMissingMatches(names: string[], root: ParentNode) {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const missing = names.filter((name) => !root.querySelector(`[${VT}="${CSS.escape(name)}"]`));

  if (missing.length) {
    console.warn('[view-transition] no destination match for', missing);
  }
}

function activateNames(names: string[], root: ParentNode) {
  warnMissingMatches(names, root);
  activate(elementsByNames(names, root));
}

function resetNames() {
  for (const element of active) {
    element.style.removeProperty('view-transition-name');
    element.style.removeProperty('view-transition-class');
  }

  active = [];
}

function abortCurrentTransition() {
  if (!currentTransition) {
    return;
  }

  try {
    currentTransition.skipTransition();
  } catch {
    // Already finished
  }

  currentTransition = null;
  resetNames();
}

function waitForPaint() {
  return Promise.race([
    new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve()))),
    new Promise<void>((resolve) => setTimeout(resolve, PAINT_TIMEOUT)),
  ]);
}

async function runTransition(update: () => void | Promise<void>, mode: ViewTransitionMode) {
  abortCurrentTransition();

  let committed = false;
  let transition: ViewTransition | null = null;

  async function commit() {
    if (committed) {
      return;
    }

    committed = true;
    await update();
  }

  try {
    transition = startViewTransition(mode, commit);

    currentTransition = transition;
    transition.ready.catch(() => {});

    await transition.finished;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[view-transition]', error);
    }

    await commit();
  } finally {
    if (currentTransition === transition) {
      currentTransition = null;
    }

    setMode(null);

    if (mode === 'theme') {
      clearRevealOrigin();
    }

    resetNames();
  }
}

function resolveShared(from: string, destination: string, source?: Element | null) {
  if (source) {
    const shared = sharedFrom(source);
    const names = shared.map((element) => element.dataset.vtName ?? '');

    rememberSharedNav(from, destination, names);

    return { shared, names };
  }

  const names = recallSharedNav(from, destination);

  return { shared: uniqueByName(elementsByNames(names)), names };
}

export async function transitionNavigate(router: NextRouter, href: string, options: NavigateOptions = {}) {
  const { shallow, replace = false, source } = options;
  const from = router.asPath;
  const destination = normalizePath(href);

  async function go() {
    const navigate = replace ? router.replace.bind(router) : router.push.bind(router);

    return navigate(destination, undefined, { shallow, scroll: false });
  }

  if (!shouldUseViewTransition() || isSamePath(from, destination)) {
    await go();
    scrollToTop();

    return true;
  }

  const { shared, names } = resolveShared(from, destination, source);

  if (shared.length) {
    activate(shared);
  }

  await runTransition(async () => {
    await go();
    scrollToTop();
    activateNames(names, document);
  }, modeForRoute(from, destination));

  return true;
}

export function transitionState(update: () => void, options: StateOptions = {}) {
  const { mode = 'list', within } = options;

  if (!shouldUseViewTransition()) {
    update();
    return;
  }

  const elements = within ? uniqueByName(namedIn(within)) : [];

  if (mode === 'list' && !elements.length) {
    update();
    return;
  }

  const names = elements.map((element) => element.dataset.vtName ?? '');

  activate(elements);

  return runTransition(() => {
    flushSync(update);
    activateNames(names, within?.isConnected ? within : document);
  }, mode);
}
