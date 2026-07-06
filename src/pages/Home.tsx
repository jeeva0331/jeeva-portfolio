import { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin, Sparkles } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import ParticleField from '../components/ParticleField';
import GradientBlobs from '../components/GradientBlobs';
import Counter from '../components/Counter';
import { profile } from '../data/portfolio';

const HeroScene = lazy(() => import('../components/three/HeroScene'));

const ease = [0.22, 1, 0.36, 1] as const;

export default function Home() {
  return (
    <PageTransition variant="reveal">
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16">
        <GradientBlobs variant="mixed" />
        <ParticleField />
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />

        {/* 3D scene layer */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-90">
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            {profile.available && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
                className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-white/80"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
                </span>
                Available for opportunities
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
            >
              Hi, I'm <span className="text-gradient">{profile.name}</span>
              <br />
              <span className="text-white/85">{profile.role}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.25 }}
              className="mt-6 max-w-xl text-lg text-white/60"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.4 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link to="/projects">
                <motion.span
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-300 to-accent-500 px-7 py-3.5 font-medium text-ink-950 glow-cyan"
                >
                  View my work
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </motion.span>
              </Link>
              <Link to="/resume">
                <motion.span
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 font-medium text-white/90 transition-colors hover:text-white"
                >
                  <Download size={18} />
                  Resume
                </motion.span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex items-center gap-2 text-sm text-white/45"
            >
              <MapPin size={15} />
              {profile.location}
            </motion.div>
          </div>

          {/* Stats column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.5 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              {profile.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.12, ease }}
                  className="glass rounded-2xl p-6"
                >
                  <div className="font-display text-4xl font-semibold text-gradient-cool">
                    <Counter to={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-2 text-sm text-white/55">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-7 left-1/2 -translate-x-1/2 text-white/40"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="flex flex-col items-center gap-1"
          >
            <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
            <div className="h-8 w-px bg-gradient-to-b from-accent-400 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <GradientBlobs variant="default" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="mb-3 inline-block font-mono text-xs uppercase tracking-[0.3em] text-accent-400">
                About me
              </span>
              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease }}
                className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
              >
                Building backends that <span className="text-gradient">scale</span>.
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease }}
                className="mt-6 flex items-center gap-3 text-white/70"
              >
                <Sparkles size={18} className="text-accent-400" />
                {profile.profession}
              </motion.div>
            </div>

            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease }}
                className="text-lg leading-relaxed text-white/70"
              >
                {profile.intro}
              </motion.p>

              <div className="space-y-3">
                {profile.achievements.map((a, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: i * 0.1, ease }}
                    className="flex items-start gap-3 text-white/75"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent-400 glow-cyan" />
                    {a}
                  </motion.li>
                ))}
              </div>

              <Link to="/contact" className="inline-block pt-2">
                <motion.span
                  whileHover={{ x: 6 }}
                  className="inline-flex items-center gap-2 font-medium text-accent-300"
                >
                  Let's build something together
                  <ArrowRight size={18} />
                </motion.span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
