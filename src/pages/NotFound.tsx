import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home as HomeIcon } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import GradientBlobs from '../components/GradientBlobs';

export default function NotFound() {
  return (
    <PageTransition variant="scale">
      <section className="relative grid min-h-screen place-items-center overflow-hidden">
        <GradientBlobs variant="warm" />
        <div className="relative z-10 px-5 text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-8xl font-semibold text-gradient sm:text-9xl"
          >
            404
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-white/60"
          >
            This page drifted off into the particles.
          </motion.p>
          <Link to="/" className="mt-8 inline-block">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-300 to-accent-500 px-7 py-3.5 font-medium text-ink-950 glow-cyan"
            >
              <HomeIcon size={18} /> Back home
            </motion.span>
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
