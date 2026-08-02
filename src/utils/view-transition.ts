import { NextRouter } from 'next/router';
import { CSSProperties } from 'react';

import { scrollToTop } from 'utils/window';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

type ViewTransitionMode = 'section' | 'detail';

export type TransitionNavigateOptions = {
  shallow?: boolean;
  replace?: boolean;
  /** Element whose shared names win when the same name is used more than once */
  preferred?: Element | null;
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
  talkTitle: (slugOrHref: string) => `vt-talk-title-${slugFromHref(slugOrHref)}`,
  talkCard: (slugOrHref: string) => `vt-talk-card-${slugFromHref(slugOrHref)}`,
  talkMedia: (slugOrHref: string) => `vt-talk-media-${slugFromHref(slugOrHref)}`,
  postTitle: (slug: string) => `vt-post-title-${sanitizeSlug(slug)}`,
  postHero: (slug: string) => `vt-post-hero-${sanitizeSlug(slug)}`,
  postDate: (slug: string) => `vt-post-date-${sanitizeSlug(slug)}`,
  postRow: (slug: string) => `vt-post-row-${sanitizeSlug(slug)}`,
  aboutCard: (slugOrHref: string) => `vt-about-card-${slugFromHref(slugOrHref)}`,
  aboutTitle: (slugOrHref: string) => `vt-about-title-${slugFromHref(slugOrHref)}`,
  aboutHero: (slugOrHref: string) => `vt-about-hero-${slugFromHref(slugOrHref)}`,
  aboutLottie: (slugOrHref: string) => `vt-about-lottie-${slugFromHref(slugOrHref)}`,
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
//  UNIQUENESS
//  ---------------------------------------------------------------------------

const NAMED_SELECTOR = '[style*="view-transition-name"]';
const DISABLED_SELECTOR = '[data-vt-original]';

const queryAll = (selector: string) => Array.from(document.querySelectorAll<HTMLElement>(selector));

const groupByTransitionName = (elements: HTMLElement[]) =>
  elements.reduce((groups, element) => {
    const name = element.style.viewTransitionName;

    if (!name || name === 'none') {
      return groups;
    }

    return groups.set(name, [...(groups.get(name) ?? []), element]);
  }, new Map<string, HTMLElement[]>());

const disableTransitionName = (element: HTMLElement) => {
  element.dataset.vtOriginal = element.style.viewTransitionName;
  element.style.viewTransitionName = 'none';
};

const restoreTransitionNames = () => {
  queryAll(DISABLED_SELECTOR).forEach((element) => {
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
  restoreTransitionNames();

  groupByTransitionName(queryAll(NAMED_SELECTOR)).forEach((elements) => {
    if (elements.length < 2) {
      return;
    }

    const kept = elements.find((element) => preferred?.contains(element)) ?? elements[0];

    elements.filter((element) => element !== kept).forEach(disableTransitionName);
  });
};

//  ---------------------------------------------------------------------------
//  NAVIGATION
//  ---------------------------------------------------------------------------

const PAINT_TIMEOUT = 120;

const nextPaint = () =>
  new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));

const afterTimeout = (delay: number) => new Promise<void>((resolve) => setTimeout(resolve, delay));

/** Chrome aborts a transition whose update callback runs longer than ~4s, so every wait needs a ceiling */
const waitForPaint = () => Promise.race([nextPaint(), afterTimeout(PAINT_TIMEOUT)]);

const runViewTransition = async (update: () => void | Promise<void>) => {
  try {
    await document.startViewTransition(async () => {
      await update();
      await waitForPaint();
    }).finished;
  } catch {
    // Skipped or aborted by the browser — the DOM update itself still happened.
  }
};

export const withViewTransition = (update: () => void | Promise<void>) => {
  if (!shouldUseViewTransition()) {
    void update();
    return;
  }

  void runViewTransition(update);
};

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

  dedupeTransitionNames(preferred);
  setTransitionMode(getTransitionMode(from, destination));

  await runViewTransition(async () => {
    await navigate();
    scrollToTop();
    dedupeTransitionNames();
  });

  clearTransitionMode();
  restoreTransitionNames();

  return true;
};
