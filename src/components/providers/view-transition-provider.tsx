import { NextRouter, useRouter } from 'next/router';
import { PropsWithChildren, useEffect } from 'react';

import { isRoutableLink } from 'utils/link';
import { isSamePath, shouldUseViewTransition, transitionNavigate } from 'utils/view-transition';
import { scrollToTop } from 'utils/window';

function isModifiedClick(event: MouseEvent) {
  return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
}

function opensOutsideCurrentTab(anchor: HTMLAnchorElement) {
  const target = anchor.getAttribute('target');

  return Boolean(target) && target !== '_self';
}

function logTransitionError(context: string, error: unknown) {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  console.warn(`[view-transition] ${context}`, error);
}

function useViewTransitions(router: NextRouter) {
  useEffect(() => {
    if (!shouldUseViewTransition()) {
      router.events.on('routeChangeComplete', scrollToTop);

      return () => router.events.off('routeChangeComplete', scrollToTop);
    }

    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    function onClick(event: MouseEvent) {
      if (event.defaultPrevented || isModifiedClick(event)) {
        return;
      }

      const anchor = (event.target as Element | null)?.closest('a');

      if (!anchor || anchor.hasAttribute('download') || opensOutsideCurrentTab(anchor)) {
        return;
      }

      const href = anchor.getAttribute('href') ?? '';

      if (!isRoutableLink(href) || isSamePath(href, router.asPath)) {
        return;
      }

      event.preventDefault();
      transitionNavigate(router, href, { source: anchor }).catch((error) => logTransitionError('navigate', error));
    }

    router.beforePopState(({ as }) => {
      transitionNavigate(router, as).catch((error) => logTransitionError('back', error));

      return false;
    });

    document.addEventListener('click', onClick, true);

    return () => {
      document.removeEventListener('click', onClick, true);
      router.beforePopState(() => true);
    };
  }, [router]);
}

function ViewTransitionProvider({ children }: PropsWithChildren) {
  useViewTransitions(useRouter());

  return children;
}

export default ViewTransitionProvider;
