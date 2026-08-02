import { useRouter } from 'next/router';
import { PropsWithChildren, useEffect } from 'react';

import { normalizePath, shouldUseViewTransition, transitionNavigate } from 'utils/view-transition';

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

function ViewTransitionProvider({ children }: PropsWithChildren) {
  const router = useRouter();

  // Capture-phase interception keeps every internal link on the same path,
  // including anchors rendered outside our Link component.
  useEffect(() => {
    if (!shouldUseViewTransition()) return;

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;

      const anchor = (event.target as Element | null)?.closest('a');
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (anchor.hasAttribute('download')) return;

      const target = anchor.getAttribute('target');
      if (target && target !== '_self') return;

      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('/') || href.startsWith('//') || href.startsWith('/#')) return;
      if (normalizePath(href) === normalizePath(router.asPath)) return;

      event.preventDefault();
      event.stopPropagation();

      void transitionNavigate(router, href, { preferred: anchor });
    };

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, [router]);

  useEffect(() => {
    if (!shouldUseViewTransition()) return;

    router.beforePopState(({ as }) => {
      void transitionNavigate(router, as);
      return false;
    });

    return () => {
      router.beforePopState(() => true);
    };
  }, [router]);

  useEffect(() => {
    if (shouldUseViewTransition()) return;

    const scrollTop = () => window.scrollTo(0, 0);
    router.events.on('routeChangeComplete', scrollTop);
    return () => router.events.off('routeChangeComplete', scrollTop);
  }, [router]);

  return children;
}

export default ViewTransitionProvider;
