import { NextRouter } from 'next/router';
import { flushSync } from 'react-dom';

import { scrollToTop } from 'utils/window';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

type ViewTransitionMode = 'section' | 'detail' | 'list' | 'theme';

export type TransitionNavigateOptions = {
  shallow?: boolean;
  replace?: boolean;
  /** The clicked element — only the shared names it carries or contains take part in the morph */
  source?: Element | null;
};

export type TransitionStateOptions = {
  mode?: Extract<ViewTransitionMode, 'list' | 'theme'>;
  /** Container whose shared names take part — leave it out to animate the page as a single snapshot */
  within?: Element | null;
};

//  ---------------------------------------------------------------------------
//  PATHS
//  ---------------------------------------------------------------------------

export const normalizePath = (path: string) => {
  const withoutQuery = path.split('?')[0]?.split('#')[0] ?? path;

  if (withoutQuery.length > 1 && withoutQuery.endsWith('/')) {
    return withoutQuery.slice(0, -1);
  }

  return withoutQuery;
};

export const isSamePath = (path: string, other: string) => normalizePath(path) === normalizePath(other);

const pathnameOf = (href: string) => {
  if (!href.startsWith('http')) {
    return normalizePath(href);
  }

  try {
    return new URL(href).pathname;
  } catch {
    return href;
  }
};

const segmentsOf = (path: string) => normalizePath(path).split('/').filter(Boolean);

//  ---------------------------------------------------------------------------
//  KEYS
//  ---------------------------------------------------------------------------

/** CSS custom idents must be stable — strip whatever breaks view-transition-name */
const sanitizeSlug = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const slugFromHref = (href: string) => {
  const pathname = pathnameOf(href);

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

//  ---------------------------------------------------------------------------
//  SUPPORT
//  ---------------------------------------------------------------------------

const supportsViewTransitions = () => typeof document !== 'undefined' && 'startViewTransition' in document;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const shouldUseViewTransition = () => supportsViewTransitions() && !prefersReducedMotion();

/** The theme reveal grows out of the switch, so its origin and a radius covering the viewport go in as CSS vars */
export const setRevealOrigin = (x: number, y: number) => {
  const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

  document.documentElement.style.setProperty('--vt-origin-x', `${x}px`);
  document.documentElement.style.setProperty('--vt-origin-y', `${y}px`);
  document.documentElement.style.setProperty('--vt-origin-radius', `${radius}px`);
};

//  ---------------------------------------------------------------------------
//  MODE
//  ---------------------------------------------------------------------------

/** Drilling one level deeper into the same section — /talks → /talks/some-talk */
const isOneLevelDeeper = (from: string[], to: string[]) =>
  from.length >= 1 && to.length === from.length + 1 && from.every((segment, index) => segment === to[index]);

const getTransitionMode = (from: string, to: string) => {
  const fromSegments = segmentsOf(from);
  const toSegments = segmentsOf(to);

  // Going back up plays the same morph in reverse, so arriving and leaving match
  if (isOneLevelDeeper(fromSegments, toSegments) || isOneLevelDeeper(toSegments, fromSegments)) {
    return 'detail';
  }

  return 'section';
};

const setTransitionMode = (mode: ViewTransitionMode) => {
  document.documentElement.dataset.vtMode = mode;
};

const clearTransitionMode = () => {
  delete document.documentElement.dataset.vtMode;
};

/** Root snapshots capture the full document height — tall pages exceed Chrome's texture budget and abort the transition */
const setRootSnapshot = (enabled: boolean) => {
  if (enabled) {
    document.documentElement.style.removeProperty('view-transition-name');
    return;
  }

  document.documentElement.style.viewTransitionName = 'none';
};

const usesRootSnapshot = (mode: ViewTransitionMode) => mode === 'section' || mode === 'theme';

//  ---------------------------------------------------------------------------
//  NAMES
//  ---------------------------------------------------------------------------

const NAME_ATTRIBUTE = 'data-vt-name';
const NAMED_SELECTOR = `[${NAME_ATTRIBUTE}]`;

/**
 * Shared names are declared as data, not as CSS.
 *
 * The browser snapshots every element carrying a view-transition-name, and a
 * listing page carries hundreds of them. Declaring the name here and switching
 * it on for the handful of elements that actually travel keeps a navigation at
 * a couple of snapshots instead of a hundred.
 */
export const viewTransitionProps = (name?: string) => (name ? { [NAME_ATTRIBUTE]: name } : {});

const namedElementsIn = (root: ParentNode) => Array.from(root.querySelectorAll<HTMLElement>(NAMED_SELECTOR));

/** A name may only appear once per document, and the same talk is listed in several sections — first one wins */
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

/** The clicked link either carries the shared name, sits inside it (a card) or wraps it (a title) */
const sharedElementsFor = (source: Element) => {
  const wrapper = source.closest<HTMLElement>(NAMED_SELECTOR);

  return uniqueByName(wrapper ? [wrapper, ...namedElementsIn(source)] : namedElementsIn(source));
};

let activeElements: HTMLElement[] = [];

const activate = (elements: HTMLElement[]) => {
  elements.forEach((element) => {
    element.style.viewTransitionName = element.dataset.vtName ?? '';
    activeElements.push(element);
  });
};

const activateByName = (names: string[], root: ParentNode) => {
  const elements = names
    .map((name) => root.querySelector<HTMLElement>(`[${NAME_ATTRIBUTE}="${CSS.escape(name)}"]`))
    .filter((element): element is HTMLElement => element !== null);

  activate(elements);
};

const deactivate = () => {
  activeElements.forEach((element) => element.style.removeProperty('view-transition-name'));
  activeElements = [];
};

const namesOf = (elements: HTMLElement[]) => elements.map((element) => element.dataset.vtName ?? '');

//  ---------------------------------------------------------------------------
//  RUNNER
//  ---------------------------------------------------------------------------

const PAINT_TIMEOUT = 120;

let running = false;

const nextPaint = () =>
  new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));

const afterTimeout = (delay: number) => new Promise<void>((resolve) => setTimeout(resolve, delay));

/** Chrome aborts a transition whose update callback runs longer than ~4s, so every wait needs a ceiling */
const waitForPaint = () => Promise.race([nextPaint(), afterTimeout(PAINT_TIMEOUT)]);

/**
 * Only one transition can be in flight — a second one would make the browser
 * discard the first, so overlapping updates (a held-down filter key, say) are
 * applied straight away instead.
 */
const runTransition = async (update: () => void | Promise<void>, mode: ViewTransitionMode) => {
  if (running) {
    await update();
    return;
  }

  running = true;
  let updated = false;

  const commitUpdate = async () => {
    if (updated) {
      return;
    }

    updated = true;
    await update();
  };

  try {
    setTransitionMode(mode);
    setRootSnapshot(usesRootSnapshot(mode));

    await document.startViewTransition(async () => {
      await commitUpdate();
      await waitForPaint();
    }).finished;
  } catch {
    // Snapshot capture can fail on tall pages — still commit the navigation/update.
    await commitUpdate();
  } finally {
    clearTransitionMode();
    setRootSnapshot(true);
    deactivate();
    running = false;
  }
};

//  ---------------------------------------------------------------------------
//  ENTRY POINTS
//  ---------------------------------------------------------------------------

/**
 * Navigate with a view transition on the Pages Router.
 *
 * router.push is awaited inside the update callback: it resolves once the
 * destination route is loaded and rendered, which is the signal the browser
 * needs before capturing the new snapshot. Deferring it through startTransition
 * and router events instead deadlocks, because rendering stays suspended while
 * the callback is pending and the transition dies on Chrome's timeout.
 */
export const transitionNavigate = async (router: NextRouter, href: string, options: TransitionNavigateOptions = {}) => {
  const { shallow, replace = false, source } = options;

  const from = router.asPath;
  const destination = normalizePath(href);

  const navigate = () => {
    const method = replace ? router.replace.bind(router) : router.push.bind(router);

    return method(destination, undefined, { shallow, scroll: false });
  };

  if (!shouldUseViewTransition() || isSamePath(from, destination)) {
    const navigated = await navigate();
    scrollToTop();

    return navigated;
  }

  const shared = source ? sharedElementsFor(source) : [];
  const names = namesOf(shared);

  activate(shared);

  await runTransition(async () => {
    await navigate();
    scrollToTop();
    activateByName(names, document);
  }, getTransitionMode(from, destination));

  scrollToTop();

  return true;
};

/**
 * Animate an in-page state change — filtering, sorting, toggling.
 *
 * The update is flushed synchronously: React would otherwise re-render after
 * the browser has captured the new snapshot, and nothing would appear to move.
 * Keep suspending updates out of here, since a flush cannot wait on them.
 */
export const transitionState = (update: () => void, options: TransitionStateOptions = {}) => {
  const { mode = 'list', within } = options;

  if (!shouldUseViewTransition()) {
    update();
    return;
  }

  const shared = within ? uniqueByName(namedElementsIn(within)) : [];
  const names = namesOf(shared);

  activate(shared);

  void runTransition(() => {
    flushSync(update);
    activateByName(names, within?.isConnected ? within : document);
  }, mode);
};
