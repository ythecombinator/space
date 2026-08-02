import createGlobe from 'cobe';
import { useMotionValue, useSpring } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';

function CurrentLocation() {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === 'dark';

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const fadeMask = 'radial-gradient(circle at 50% 50%, rgb(0, 0, 0) 60%, rgb(0, 0, 0, 0) 70%)';

  const rotation = useMotionValue(0);
  const springRotation = useSpring(rotation, {
    stiffness: 280,
    damping: 40,
    mass: 1,
  });

  useEffect(() => {
    let width = 0;

    const onResize = () => {
      if (canvasRef.current && (width = canvasRef.current.offsetWidth)) {
        window.addEventListener('resize', onResize);
      }
    };
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0,
      dark: isDarkMode ? 1 : 0,
      diffuse: isDarkMode ? 2 : 1.2,
      mapSamples: 16_000,
      mapBrightness: isDarkMode ? 2 : 3,
      baseColor: isDarkMode ? [0.8, 0.8, 0.8] : [0.9, 0.9, 0.9],
      markerColor: isDarkMode ? [1, 1, 1] : [0.2, 0.4, 0.8],
      glowColor: isDarkMode ? [0.5, 0.5, 0.5] : [0.9, 0.9, 1],
      markers: [{ location: [50.0755, 14.4378], size: 0.1 }],
      scale: 1.05,
      onRender: (state) => {
        state.phi = 2.75 + springRotation.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, [springRotation, isDarkMode]);

  return (
    <div className="relative flex h-60 flex-col gap-6 overflow-hidden rounded-xl p-4 shadow-feature-card lg:p-6">
      <div className="absolute inset-x-0 -bottom-44 mx-auto aspect-square h-84 lg:-bottom-48 lg:h-96">
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            placeItems: 'center',
            placeContent: 'center',
            overflow: 'visible',
          }}
        >
          <div
            style={{
              width: '100%',
              aspectRatio: '1/1',
              maxWidth: 800,
              WebkitMaskImage: fadeMask,
              maskImage: fadeMask,
            }}
          >
            <canvas
              ref={canvasRef}
              onPointerDown={(e) => {
                pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
                if (canvasRef.current) canvasRef.current.style.cursor = 'grabbing';
              }}
              onPointerUp={() => {
                pointerInteracting.current = null;
                if (canvasRef.current) canvasRef.current.style.cursor = 'grab';
              }}
              onPointerOut={() => {
                pointerInteracting.current = null;
                if (canvasRef.current) canvasRef.current.style.cursor = 'grab';
              }}
              onMouseMove={(e) => {
                if (pointerInteracting.current !== null) {
                  const delta = e.clientX - pointerInteracting.current;
                  pointerInteractionMovement.current = delta;
                  rotation.set(delta / 200);
                }
              }}
              onTouchMove={(e) => {
                if (pointerInteracting.current !== null && e.touches[0]) {
                  const delta = e.touches[0].clientX - pointerInteracting.current;
                  pointerInteractionMovement.current = delta;
                  rotation.set(delta / 100);
                }
              }}
              style={{
                width: '100%',
                height: '100%',
                contain: 'layout paint size',
                cursor: 'auto',
                userSelect: 'none',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentLocation;
