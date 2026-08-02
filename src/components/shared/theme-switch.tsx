import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { MouseEvent, useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

import { setRevealOrigin, transitionState } from 'utils/view-transition';

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const isDarkMode = theme === 'dark' || resolvedTheme === 'dark';

  const onToggle = (event: MouseEvent<HTMLButtonElement>) => {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();

    setRevealOrigin(left + width / 2, top + height / 2);
    // No `within` — the reveal is a full-page snapshot, not a shared-element morph
    transitionState(() => setTheme(isDarkMode ? 'light' : 'dark'), { mode: 'theme' });
  };

  return (
    <motion.button
      className="ml-1 flex h-11 w-11 items-center justify-center bg-transparent p-0 text-lg sm:ml-4"
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.7,
        rotate: 360,
        transition: { duration: 0.2 },
      }}
      aria-label="Toggle Dark Mode"
      type="button"
      onClick={onToggle}
    >
      {mounted && isDarkMode ? <FaSun size={20} aria-hidden /> : <FaMoon size={20} aria-hidden />}
    </motion.button>
  );
}

export default ThemeSwitch;
