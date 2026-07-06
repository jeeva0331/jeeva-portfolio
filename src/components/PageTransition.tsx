import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

// Cinematic full-page transition. Each page passes a unique `variant`
// so transitions feel distinct per route.
const variants = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  rise: {
    initial: { opacity: 0, y: 60, filter: 'blur(8px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    exit: { opacity: 0, y: -40, filter: 'blur(8px)' },
  },
  scale: {
    initial: { opacity: 0, scale: 0.94, filter: 'blur(6px)' },
    animate: { opacity: 1, scale: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, scale: 1.04, filter: 'blur(6px)' },
  },
  slide: {
    initial: { opacity: 0, x: 80 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -80 },
  },
  reveal: {
    initial: { opacity: 0, clipPath: 'inset(0 0 100% 0)' },
    animate: { opacity: 1, clipPath: 'inset(0 0 0% 0)' },
    exit: { opacity: 0, clipPath: 'inset(0 0 100% 0)' },
  },
} as const;

export type TransitionVariant = keyof typeof variants;

export default function PageTransition({
  children,
  variant = 'rise',
}: {
  children: ReactNode;
  variant?: TransitionVariant;
}) {
  return (
    <motion.main
      variants={variants[variant]}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative min-h-screen w-full"
    >
      {children}
    </motion.main>
  );
}
