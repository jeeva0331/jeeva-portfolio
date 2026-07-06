import { Suspense, lazy, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import GradientBlobs from '../components/GradientBlobs';
import ParticleField from '../components/ParticleField';
import TiltCard from '../components/TiltCard';
import { SectionHeading } from '../components/Section';
import { projects } from '../data/portfolio';

const ProjectScene = lazy(() => import('../components/three/ProjectScene'));

const ease = [0.22, 1, 0.36, 1] as const;
const shapes = ['box', 'sphere', 'octa'] as const;

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <PageTransition variant="slide">
      <section className="relative min-h-screen overflow-hidden pt-32 pb-24">
        <GradientBlobs variant="default" />
        <ParticleField density={45} />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Selected Work"
            title={<>Projects that <span className="text-gradient">move</span></>}
            subtitle="A selection of backend systems and APIs I've designed and built — each tuned for performance, reliability, and clean architecture."
          />

          {/* Filters */}
          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  filter === cat ? 'text-ink-950' : 'text-white/60 hover:text-white'
                }`}
              >
                {filter === cat && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-300 to-accent-500"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                >
                  <TiltCard className="group h-full rounded-3xl glass p-1.5">
                    <div className="flex h-full flex-col overflow-hidden rounded-[1.35rem]">
                      {/* 3D + image header */}
                      <div className="relative h-44 overflow-hidden bg-ink-800">
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover opacity-45 transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />
                        <div className="absolute inset-0 grid place-items-center">
                          <Suspense
                            fallback={
                              <div className="h-12 w-12 animate-spin rounded-full border-2 border-accent-400/30 border-t-accent-400" />
                            }
                          >
                            <ProjectScene shape={shapes[i % shapes.length]} />
                          </Suspense>
                        </div>
                        <span className="absolute left-4 top-4 rounded-full bg-ink-900/70 px-3 py-1 text-xs text-accent-300 backdrop-blur">
                          {project.year}
                        </span>
                      </div>

                      {/* body */}
                      <div className="flex flex-1 flex-col p-5" style={{ transform: 'translateZ(40px)' }}>
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs uppercase tracking-wider text-accent-400">
                            {project.category}
                          </span>
                          <ArrowUpRight
                            size={18}
                            className="text-white/40 transition-all duration-300 group-hover:text-accent-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </div>
                        <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">
                          {project.title}
                        </h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">
                          {project.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-white/60"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-300 transition-colors hover:text-accent-200"
                        >
                          View case study
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
