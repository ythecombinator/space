import { useEffect, useState } from 'react';

/**
 * Jump, don't ease — `html.scroll-smooth` turns a bare scrollTo into an animation,
 * which leaves the new view-transition snapshot mid-page and kills the morph.
 */
export const scrollToTop = () => {
  const root = document.documentElement;
  const body = document.body;
  const previous = root.style.scrollBehavior;

  root.style.scrollBehavior = 'auto';
  root.scrollTop = 0;
  body.scrollTop = 0;
  window.scrollTo(0, 0);
  root.style.scrollBehavior = previous;
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    windowSize,
    isMobile: typeof windowSize?.width === 'number' && windowSize?.width < 768,
    isDesktop: typeof windowSize?.width === 'number' && windowSize?.width >= 768,
  };
};
