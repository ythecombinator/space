import { useRouter } from 'next/router';
import { PropsWithChildren, useEffect } from 'react';

import { clearTransitionMode, navigateWithViewTransition, shouldUseViewTransition } from 'utils/view-transition';

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

function ViewTransitionProvider({ children }: PropsWithChildren) {
  const router = useRouter();

  useEffect(() => {
    if (!shouldUseViewTransition()) return;

    router.beforePopState(({ as }) => {
      void navigateWithViewTransition(router, as);
      return false;
    });

    return () => {
      router.beforePopState(() => true);
      clearTransitionMode();
    };
  }, [router]);

  return children;
}

export default ViewTransitionProvider;
