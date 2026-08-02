import { NextRouter } from 'next/router';
import { flushSync } from 'react-dom';

import { scrollToTop } from 'utils/window';

type ViewTransitionMode = 'section' | 'detail' | 'list' | 'theme';

type NavigateOptions = {
  shallow?: boolean;
  replace?: boolean;
  /** Clicked element — only shared names it carries or contains take part in the morph */
  source?: Element | null;
};

type StateOptions = {
  mode?: Extract<ViewTransitionMode, 'list' | 'theme'>;
  /** Scope row/card morphs to this container — omit for a full-page snapshot (theme) */
  within?: Element | null;
};

const VT = 'data-vt-name';
const NAMED = `[${VT}]`;
const PAINT_TIMEOUT = 120;

let running = false;
let active: HTMLElement[] = [];

export const normalizePath = (path: string) => {
  const bare = path.split('?')[0]?.split('#')[0] ?? path;

  if (bare.length > 1 && bare.endsWith('/')) {
    return bare.slice(0, -1);
  }

  return bare;
};

export const isSamePath = (path: string, other: string) => normalizePath(path) === normalizePath(other);

const segments = (path: string) => normalizePath(path).split('/').filter(Boolean);

const sanitizeSlug = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const slugFromHref = (href: string) => {
  let pathname = href;

  if (href.startsWith('http')) {
    try {
      pathname = new URL(href).pathname;
    } catch {
      pathname = href;
    }
  } else {
    pathname = normalizePath(href);
  }

  return sanitizeSlug(pathname.split('/').filter(Boolean).pop() ?? pathname);
};

export const vtKeys = {
  pageTitle: (slugOrHref: string) => `vt-page-title-${slugFromHref(slugOrHref)}`,
  talkTitle: (slugOrHref: string) => `vt-talk-title-${slugFromHref(slugOrHref)}`,
  talkCard: (slugOrHref: string) => `vt-talk-card-${slugFromHref(slugOrHref)}`,
  postTitle: (slug: string) => `vt-post-title-${sanitizeSlug(slug)}`,
  postHero: (slug: string) => `vt-post-hero-${sanitizeSlug(slug)}`,
  postDate: (slug: string) => `vt-post-date-${sanitizeSlug(slug)}`,
  postRow: (slug: string) => `vt-post-row-${sanitizeSlug(slug)}`,
  aboutCard: (slugOrHref: string) => `vt-about-card-${slugFromHref(slugOrHref)}`,
  aboutTitle: (slugOrHref: string) => `vt-about-title-${slugFromHref(slugOrHref)}`,
  radarRow: (id: string) => `vt-radar-row-${sanitizeSlug(id)}`,
} as const;

export const shouldUseViewTransition = () =>
  typeof document !== 'undefined' &&
  'startViewTransition' in document &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Theme reveal origin — passed to CSS as custom properties */
export const setRevealOrigin = (x: number, y: number) => {
  const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
  const root = document.documentElement;

  root.style.setProperty('--vt-origin-x', `${x}px`);
  root.style.setProperty('--vt-origin-y', `${y}px`);
  root.style.setProperty('--vt-origin-radius', `${radius}px`);
};

/** Inert in markup; switched on only for elements participating in the current transition */
export const viewTransitionProps = (name?: string) => (name ? { [VT]: name } : {});

const modeForRoute = (from: string, to: string): ViewTransitionMode => {
  const a = segments(from);
  const b = segments(to);
  const step = (x: string[], y: string[]) =>
    x.length >= 1 && y.length === x.length + 1 && x.every((part, i) => part === y[i]);

  if (step(a, b) || step(b, a)) {
    return 'detail';
  }

  return 'section';
};

const setMode = (mode: ViewTransitionMode | null) => {
  if (mode) {
    document.documentElement.dataset.vtMode = mode;
    return;
  }

  delete document.documentElement.dataset.vtMode;
};

const namedIn = (root: ParentNode) => Array.from(root.querySelectorAll<HTMLElement>(NAMED));

const uniqueByName = (elements: HTMLElement[]) => {
  const seen = new Set<string>();

  return elements.filter((element) => {
    const name = element.dataset.vtName;

    if (!name || seen.has(name)) {
      return false;
    }

    seen.add(name);
    return true;
  });
};

const sharedFrom = (source: Element) => {
  const wrapper = source.closest<HTMLElement>(NAMED);

  return uniqueByName(wrapper ? [wrapper, ...namedIn(source)] : namedIn(source));
};

const activate = (elements: HTMLElement[]) => {
  elements.forEach((element) => {
    element.style.viewTransitionName = element.dataset.vtName ?? '';
    active.push(element);
  });
};

const activateNames = (names: string[], root: ParentNode) => {
  const elements = names
    .map((name) => root.querySelector<HTMLElement>(`[${VT}="${CSS.escape(name)}"]`))
    .filter((element): element is HTMLElement => element !== null);

  activate(elements);
};

const resetNames = () => {
  active.forEach((element) => element.style.removeProperty('view-transition-name'));
  active = [];
};

const waitForPaint = () =>
  Promise.race([
    new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve()))),
    new Promise<void>((resolve) => setTimeout(resolve, PAINT_TIMEOUT)),
  ]);

const runTransition = async (update: () => void | Promise<void>, mode: ViewTransitionMode) => {
  if (running) {
    await update();
    return;
  }

  running = true;
  let committed = false;

  const commit = async () => {
    if (committed) {
      return;
    }

    committed = true;
    await update();
  };

  try {
    setMode(mode);

    await document.startViewTransition(async () => {
      await commit();
      await waitForPaint();
    }).finished;
  } catch {
    await commit();
  } finally {
    setMode(null);
    resetNames();
    running = false;
  }
};

export const transitionNavigate = async (router: NextRouter, href: string, options: NavigateOptions = {}) => {
  const { shallow, replace = false, source } = options;
  const from = router.asPath;
  const destination = normalizePath(href);
  const go = () => {
    const navigate = replace ? router.replace.bind(router) : router.push.bind(router);

    return navigate(destination, undefined, { shallow, scroll: false });
  };

  if (!shouldUseViewTransition() || isSamePath(from, destination)) {
    await go();
    scrollToTop();

    return true;
  }

  const shared = source ? sharedFrom(source) : [];
  const names = shared.map((element) => element.dataset.vtName ?? '');

  activate(shared);

  await runTransition(async () => {
    await go();
    scrollToTop();
    activateNames(names, document);
  }, modeForRoute(from, destination));

  scrollToTop();

  return true;
};

export const transitionState = (update: () => void, options: StateOptions = {}) => {
  const { mode = 'list', within } = options;

  if (!shouldUseViewTransition()) {
    update();
    return;
  }

  const elements = within ? uniqueByName(namedIn(within)) : [];
  const names = elements.map((element) => element.dataset.vtName ?? '');

  activate(elements);

  return runTransition(() => {
    flushSync(update);
    activateNames(names, within?.isConnected ? within : document);
  }, mode);
};
