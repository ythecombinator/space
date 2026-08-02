import { NextRouter } from 'next/router';
import { CSSProperties } from 'react';
import { flushSync } from 'react-dom';

import { scrollToTop } from 'utils/window';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

type ViewTransitionMode = 'section' | 'detail' | 'list' | 'theme';

/**
 * Which shared names take part:
 * - `all` keeps the page shell and the content names (navigation)
 * - `content` drops the shell, so only the elements that moved read as motion
 * - `none` drops everything and animates the page as a single snapshot
 */
type TransitionScope = 'all' | 'content' | 'none';

export type TransitionNavigateOptions = {
  shallow?: boolean;
  replace?: boolean;
  /** Element whose shared names win when the same name is used more than once */
  preferred?: Element | null;
};

export type TransitionStateOptions = {
  mode?: Extract<ViewTransitionMode, 'list' | 'theme'>;
  scope?: TransitionScope;
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
  logo: 'vt-logo',
} as const;

//  ---------------------------------------------------------------------------
//  SUPPORT
//  ---------------------------------------------------------------------------

const supportsViewTransitions = () => typeof document !== 'undefined' && 'startViewTransition' in document;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const shouldUseViewTransition = () => supportsViewTransitions() && !prefersReducedMotion();

export const viewTransitionStyle = (name?: string) => {
  if (!name) {
    return undefined;
  }

  const style: CSSProperties = { viewTransitionName: name };

  return style;
};

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

//  ---------------------------------------------------------------------------
//  NAMES
//  ---------------------------------------------------------------------------

const NAMED_SELECTOR = '[style*="view-transition-name"]';
const SHELL_SELECTOR = '.vt-main, .vt-logo';

const queryAll = (selector: string) => Array.from(document.querySelectorAll<HTMLElement>(selector));

const groupByTransitionName = (elements: HTMLElement[]) =>
  elements.reduce((groups, element) => {
    const name = element.style.viewTransitionName;

    if (!name || name === 'none') {
      return groups;
    }

    return groups.set(name, [...(groups.get(name) ?? []), element]);
  }, new Map<string, HTMLElement[]>());

const hideTransitionName = (element: HTMLElement) => {
  element.dataset.vtOriginal = element.style.viewTransitionName;
  element.style.viewTransitionName = 'none';
};

const restoreTransitionNames = () => {
  queryAll('[data-vt-original]').forEach((element) => {
    element.style.viewTransitionName = element.dataset.vtOriginal ?? '';
    delete element.dataset.vtOriginal;
  });
};

/**
 * A view-transition-name must be unique per document — the same talk is listed
 * in several sections, so the names collide and Chrome discards the whole
 * transition. Keep one element per name (the one being navigated from, when
 * known) and disable the rest for the duration of the transition.
 */
const dedupeTransitionNames = (preferred?: Element | null) => {
  groupByTransitionName(queryAll(NAMED_SELECTOR)).forEach((elements) => {
    if (elements.length < 2) {
      return;
    }

    const kept = elements.find((element) => preferred?.contains(element)) ?? elements[0];

    elements.filter((element) => element !== kept).forEach(hideTransitionName);
  });
};

const prepareTransitionNames = (scope: TransitionScope, preferred?: Element | null) => {
  restoreTransitionNames();

  if (scope === 'none') {
    queryAll(`${NAMED_SELECTOR}, ${SHELL_SELECTOR}`).forEach(hideTransitionName);
    return;
  }

  if (scope === 'content') {
    queryAll(SHELL_SELECTOR).forEach(hideTransitionName);
  }

  dedupeTransitionNames(preferred);
};

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

type RunOptions = {
  mode: ViewTransitionMode;
  scope?: TransitionScope;
  preferred?: Element | null;
};

/**
 * Only one transition can be in flight — a second one would make the browser
 * discard the first, so overlapping updates (a held-down filter key, say) are
 * applied straight away instead.
 */
const runTransition = async (update: () => void | Promise<void>, { mode, scope = 'all', preferred }: RunOptions) => {
  if (running) {
    await update();
    return;
  }

  running = true;

  try {
    prepareTransitionNames(scope, preferred);
    setTransitionMode(mode);

    await document.startViewTransition(async () => {
      await update();
      prepareTransitionNames(scope);
      await waitForPaint();
    }).finished;
  } catch {
    // Skipped or aborted by the browser — the DOM update itself still happened.
  } finally {
    clearTransitionMode();
    restoreTransitionNames();
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
  const { shallow, replace = false, preferred } = options;

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

  await runTransition(
    async () => {
      await navigate();
      scrollToTop();
    },
    { mode: getTransitionMode(from, destination), preferred }
  );

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
  const { mode = 'list', scope = 'content' } = options;

  if (!shouldUseViewTransition()) {
    update();
    return;
  }

  void runTransition(() => flushSync(update), { mode, scope });
};
