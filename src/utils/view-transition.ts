import { NextRouter } from 'next/router';
import { CSSProperties, ReactNode, type JSX } from 'react';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type ViewTransitionMode = 'section' | 'detail' | 'about-detail';

export type TransitionNavigateOptions = {
  shallow?: boolean;
  replace?: boolean;
  /** Element whose shared names win when the same name is used more than once */
  preferred?: Element | null;
};

//  ---------------------------------------------------------------------------
//  KEYS
//  ---------------------------------------------------------------------------

export function sanitizeVtSlug(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function slugFromHref(href: string): string {
  try {
    const pathname = href.startsWith('http') ? new URL(href).pathname : href.split('?')[0]?.split('#')[0] ?? href;
    const segment = pathname.split('/').filter(Boolean).pop() ?? pathname.replace(/\//g, '-');
    return sanitizeVtSlug(segment);
  } catch {
    const segment = href.split('/').filter(Boolean).pop() ?? href;
    return sanitizeVtSlug(segment);
  }
}

export const vtKeys = {
  talkTitle: (slugOrHref: string) => `vt-talk-title-${slugFromHref(slugOrHref)}`,
  talkCard: (slugOrHref: string) => `vt-talk-card-${slugFromHref(slugOrHref)}`,
  talkMedia: (slugOrHref: string) => `vt-talk-media-${slugFromHref(slugOrHref)}`,
  postTitle: (slug: string) => `vt-post-title-${sanitizeVtSlug(slug)}`,
  postHero: (slug: string) => `vt-post-hero-${sanitizeVtSlug(slug)}`,
  postDate: (slug: string) => `vt-post-date-${sanitizeVtSlug(slug)}`,
  postRow: (slug: string) => `vt-post-row-${sanitizeVtSlug(slug)}`,
  aboutCard: (slugOrHref: string) => `vt-about-card-${slugFromHref(slugOrHref)}`,
  aboutTitle: (slugOrHref: string) => `vt-about-title-${slugFromHref(slugOrHref)}`,
  aboutHero: (slugOrHref: string) => `vt-about-hero-${slugFromHref(slugOrHref)}`,
  aboutLottie: (slugOrHref: string) => `vt-about-lottie-${slugFromHref(slugOrHref)}`,
  logo: 'vt-logo',
} as const;

//  ---------------------------------------------------------------------------
//  UTILS
//  ---------------------------------------------------------------------------

export function supportsViewTransitions(): boolean {
  return typeof document !== 'undefined' && 'startViewTransition' in document;
}

export function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function shouldUseViewTransition(): boolean {
  return supportsViewTransitions() && !prefersReducedMotion();
}

export function viewTransitionStyle(name: string | undefined, options?: { contain?: boolean }): CSSProperties | undefined {
  if (!name) return undefined;

  return {
    viewTransitionName: name,
    ...(options?.contain ? { contain: 'layout' as const } : {}),
  } as CSSProperties;
}

export function normalizePath(path: string): string {
  const withoutQuery = path.split('?')[0]?.split('#')[0] ?? path;
  return withoutQuery.endsWith('/') && withoutQuery.length > 1 ? withoutQuery.slice(0, -1) : withoutQuery;
}

export function getTransitionMode(from: string, to: string): ViewTransitionMode {
  const fromParts = normalizePath(from).split('/').filter(Boolean);
  const toParts = normalizePath(to).split('/').filter(Boolean);

  if (fromParts[0] === 'about' && toParts[0] === 'about' && fromParts.length === 1 && toParts.length >= 2) {
    return 'about-detail';
  }

  if (
    fromParts.length >= 1 &&
    toParts.length === fromParts.length + 1 &&
    fromParts.every((part, i) => part === toParts[i])
  ) {
    return 'detail';
  }

  return 'section';
}

export function setTransitionMode(mode: ViewTransitionMode): void {
  if (typeof document === 'undefined') return;
  document.documentElement.dataset.vtMode = mode;
}

export function clearTransitionMode(): void {
  if (typeof document === 'undefined') return;
  delete document.documentElement.dataset.vtMode;
}

export function prepareTransition(from: string, to: string): ViewTransitionMode {
  const mode = getTransitionMode(from, to);
  setTransitionMode(mode);
  return mode;
}

//  ---------------------------------------------------------------------------
//  UNIQUENESS
//  ---------------------------------------------------------------------------

/**
 * A view-transition-name must be unique per document — the same talk is listed
 * in several sections, so the names collide and Chrome discards the whole
 * transition. Keep one element per name (the one being navigated from, when
 * known) and disable the rest for the duration of the transition.
 */
export function restoreViewTransitionNames(): void {
  document.querySelectorAll<HTMLElement>('[data-vt-original]').forEach((element) => {
    element.style.viewTransitionName = element.dataset.vtOriginal ?? '';
    delete element.dataset.vtOriginal;
  });
}

export function dedupeViewTransitionNames(preferred?: Element | null): void {
  restoreViewTransitionNames();

  const groups = new Map<string, HTMLElement[]>();

  document.querySelectorAll<HTMLElement>('[style*="view-transition-name"]').forEach((element) => {
    const name = element.style.viewTransitionName;
    if (!name || name === 'none') return;

    const group = groups.get(name);
    if (group) group.push(element);
    else groups.set(name, [element]);
  });

  groups.forEach((elements) => {
    if (elements.length < 2) return;

    const keep = (preferred && elements.find((element) => preferred.contains(element))) ?? elements[0];

    elements.forEach((element) => {
      if (element === keep) return;
      element.dataset.vtOriginal = element.style.viewTransitionName;
      element.style.viewTransitionName = 'none';
    });
  });
}

/**
 * Chrome aborts a transition whose update callback runs longer than ~4s, so
 * every wait in that callback needs an upper bound.
 */
async function waitForPaint(): Promise<void> {
  await Promise.race([
    new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve()))),
    new Promise<void>((resolve) => setTimeout(resolve, 120)),
  ]);
}

/**
 * Navigate with a view transition on the Pages Router.
 *
 * router.push is awaited directly inside the update callback: it resolves once
 * the destination route is loaded and rendered, which is the signal the browser
 * needs before capturing the new snapshot. Deferring it through startTransition
 * and router events instead deadlocks, because rendering is suspended while the
 * callback is pending and the transition dies on Chrome's timeout.
 */
export async function transitionNavigate(
  router: NextRouter,
  href: string,
  options: TransitionNavigateOptions = {}
): Promise<boolean> {
  const { shallow, replace = false, preferred } = options;
  const destination = normalizePath(href);
  const from = router.asPath;

  const navigate = () => {
    const method = replace ? router.replace.bind(router) : router.push.bind(router);
    return method(destination, undefined, { shallow, scroll: false });
  };

  if (!shouldUseViewTransition() || normalizePath(from) === destination) {
    const result = await navigate();
    window.scrollTo(0, 0);
    return result;
  }

  dedupeViewTransitionNames(preferred);
  prepareTransition(from, destination);

  try {
    await document.startViewTransition(async () => {
      await navigate();
      window.scrollTo(0, 0);
      dedupeViewTransitionNames();
      await waitForPaint();
    }).finished;
  } catch {
    // Transition skipped or aborted — the navigation itself still happened.
  } finally {
    clearTransitionMode();
    restoreViewTransitionNames();
  }

  return true;
}

export function withViewTransition(update: () => void | Promise<void>): void {
  if (!shouldUseViewTransition()) {
    void update();
    return;
  }

  document.startViewTransition(async () => {
    await update();
    await waitForPaint();
  });
}

export type ViewTransitionTargetProps = {
  name?: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
  contain?: boolean;
};
