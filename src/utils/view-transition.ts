import { NextRouter } from 'next/router';
import { CSSProperties, MouseEvent, ReactNode, type JSX } from 'react';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type ViewTransitionNavigateOptions = {
  shallow?: boolean;
  scroll?: boolean;
  replace?: boolean;
};

export type ViewTransitionMode = 'section' | 'detail' | 'about-detail';

//  ---------------------------------------------------------------------------
//  KEYS
//  ---------------------------------------------------------------------------

/** CSS custom idents must be stable — strip characters that break view-transition-name */
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
} as const;

/** @deprecated Use vtKeys instead */
export const vtNames = {
  logo: 'vt-logo',
  main: 'vt-main',
  pageTitle: (key: string) => key,
  hero: (key: string) => key,
  aboutCard: (slug: string) => vtKeys.aboutCard(slug),
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

export function skipViewTransitionFromEvent(event: MouseEvent<HTMLAnchorElement>): boolean {
  return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
}

export function viewTransitionStyle(name: string | undefined): CSSProperties | undefined {
  if (!name) return undefined;

  return {
    viewTransitionName: name,
    contain: 'layout',
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

function waitForNextPaint(): Promise<void> {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => resolve());
    });
  });
}

function waitForRouteChangeComplete(router: NextRouter): Promise<void> {
  return new Promise((resolve) => {
    const done = () => {
      router.events.off('routeChangeComplete', done);
      router.events.off('routeChangeError', onError);
      void waitForNextPaint().then(resolve);
    };
    const onError = () => {
      router.events.off('routeChangeComplete', done);
      router.events.off('routeChangeError', onError);
      resolve();
    };

    router.events.on('routeChangeComplete', done);
    router.events.on('routeChangeError', onError);
  });
}

export function withViewTransition(update: () => void | Promise<void>): void {
  if (!shouldUseViewTransition()) {
    void update();
    return;
  }

  document.startViewTransition(async () => {
    await update();
    await waitForNextPaint();
  });
}

export async function navigateWithViewTransition(
  router: NextRouter,
  href: string,
  options: ViewTransitionNavigateOptions = {}
): Promise<boolean> {
  const { shallow, scroll = true, replace = false } = options;
  const destination = normalizePath(href);

  const navigate = () => {
    const method = replace ? router.replace.bind(router) : router.push.bind(router);
    return method(destination, undefined, { shallow, scroll });
  };

  if (!shouldUseViewTransition()) {
    return navigate();
  }

  prepareTransition(router.asPath, destination);

  const transition = document.startViewTransition(async () => {
    const routeChange = waitForRouteChangeComplete(router);
    await navigate();
    await routeChange;
  });

  try {
    await transition.finished;
  } finally {
    clearTransitionMode();
  }

  return true;
}

export type ViewTransitionTargetProps = {
  name?: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
};
