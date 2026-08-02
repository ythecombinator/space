import { NextRouter, useRouter } from 'next/router';
import { PropsWithChildren, useEffect } from 'react';

import { isRoutableLink } from 'utils/link';
import { isSamePath, shouldUseViewTransition, transitionNavigate } from 'utils/view-transition';
import { scrollToTop } from 'utils/window';

//  ---------------------------------------------------------------------------
//  UTILS
//  ---------------------------------------------------------------------------

const isModifiedClick = (event: MouseEvent) =>
  event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;

const opensOutsideCurrentTab = (anchor: HTMLAnchorElement) => {
  const target = anchor.getAttribute('target');

  return Boolean(target) && target !== '_self';
};

//  ---------------------------------------------------------------------------
//  HOOKS
//  ---------------------------------------------------------------------------

/** Capture-phase interception covers every internal anchor, including those rendered outside our Link */
const useLinkTransitions = (router: NextRouter) => {
  useEffect(() => {
    if (!shouldUseViewTransition()) {
      return;
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
      event.stopPropagation();

      void transitionNavigate(router, href, { preferred: anchor });
    };

    document.addEventListener('click', onClick, true);

    return () => document.removeEventListener('click', onClick, true);
  }, [router]);
};

const useHistoryTransitions = (router: NextRouter) => {
  useEffect(() => {
    if (!shouldUseViewTransition()) {
      return;
    }

    router.beforePopState(({ as }) => {
      void transitionNavigate(router, as);

      return false;
    });

    return () => router.beforePopState(() => true);
  }, [router]);
};

/** Transitions scroll on their own; plain navigations still need the reset */
const useScrollReset = (router: NextRouter) => {
  useEffect(() => {
    if (shouldUseViewTransition()) {
      return;
    }

    router.events.on('routeChangeComplete', scrollToTop);

    return () => router.events.off('routeChangeComplete', scrollToTop);
  }, [router]);
};

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

function ViewTransitionProvider({ children }: PropsWithChildren) {
  const router = useRouter();

  useLinkTransitions(router);
  useHistoryTransitions(router);
  useScrollReset(router);

  return children;
}

export default ViewTransitionProvider;
