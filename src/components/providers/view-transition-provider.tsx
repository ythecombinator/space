import { NextRouter, useRouter } from 'next/router';
import { PropsWithChildren, useEffect } from 'react';

import { isRoutableLink } from 'utils/link';
import { isSamePath, shouldUseViewTransition, transitionNavigate } from 'utils/view-transition';
import { scrollToTop } from 'utils/window';

const isModifiedClick = (event: MouseEvent) =>
  event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;

const opensOutsideCurrentTab = (anchor: HTMLAnchorElement) => {
  const target = anchor.getAttribute('target');

  return Boolean(target) && target !== '_self';
};

const logTransitionError = (context: string) => (error: unknown) => {
  if (process.env.NODE_ENV === 'development') {
    console.warn(`[view-transition] ${context}`, error);
  }
};

const useViewTransitions = (router: NextRouter) => {
  useEffect(() => {
    if (!shouldUseViewTransition()) {
      router.events.on('routeChangeComplete', scrollToTop);

      return () => router.events.off('routeChangeComplete', scrollToTop);
    }

    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const onClick = (event: MouseEvent) => {
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

      transitionNavigate(router, href, { source: anchor }).catch(logTransitionError('navigate'));
    };

    router.beforePopState(({ as }) => {
      transitionNavigate(router, as).catch(logTransitionError('back'));

      return false;
    });

    document.addEventListener('click', onClick, true);

    return () => {
      document.removeEventListener('click', onClick, true);
      router.beforePopState(() => true);
    };
  }, [router]);
};

function ViewTransitionProvider({ children }: PropsWithChildren) {
  useViewTransitions(useRouter());

  return children;
}

export default ViewTransitionProvider;
