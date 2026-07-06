import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import GradientBlobs from '../components/GradientBlobs';
import ParticleField from '../components/ParticleField';
import { profile } from '../data/portfolio';

const ease = [0.22, 1, 0.36, 1] as const;

export default function CallToAction() {
  return (
    <PageTransition variant="reveal">
      <section className="relative grid min-h-screen place-items-center overflow-hidden">
        <GradientBlobs variant="mixed" />
        <ParticleField density={70} />
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-30" />

        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-white/80"
          >
            <Sparkles size={15} className="text-accent-400" />
            Let's build together
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl"
          >
            Have a backend worth <br />
            <span className="text-gradient">building right?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.25 }}
            className="mx-auto mt-6 max-w-xl text-lg text-white/60"
          >
            I'm currently exploring full-time Java backend roles and internship opportunities.
            If your team values clean, well-architected code, we'll get along.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link to="/contact">
              <motion.span
                whileHover={{ scale: 1.05, filter: 'blur(0px)' }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-accent-300 to-accent-500 px-9 py-4 font-display text-lg font-semibold text-ink-950 glow-cyan"
              >
                {/* motion blur sweep on hover */}
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent blur-md transition-transform duration-700 group-hover:translate-x-full" />
                <Mail size={20} className="relative" />
                <span className="relative">Hire me</span>
                <ArrowRight
                  size={20}
                  className="relative transition-transform group-hover:translate-x-1"
                />
              </motion.span>
            </Link>

            <a href={`mailto:${profile.email}`}>
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-full glass px-9 py-4 font-display text-lg font-semibold text-white/90"
              >
                {profile.email}
              </motion.span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12 flex items-center justify-center gap-3 text-sm text-white/40"
          >
            <span className="h-px w-8 bg-white/20" />
            Average reply time: under 24 hours
            <span className="h-px w-8 bg-white/20" />
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
