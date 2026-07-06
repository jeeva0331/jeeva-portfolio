import { motion } from 'framer-motion';
import { ArrowUpRight, Star, Trophy } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import GradientBlobs from '../components/GradientBlobs';
import ParticleField from '../components/ParticleField';
import { SectionHeading } from '../components/Section';
import { codingProfiles } from '../data/portfolio';

const ease = [0.22, 1, 0.36, 1] as const;

export default function CodingProfiles() {
  return (
    <PageTransition variant="rise">
      <section className="relative min-h-screen overflow-hidden pt-32 pb-24">
        <GradientBlobs variant="mixed" />
        <ParticleField density={50} />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Where I code"
            title={<>Coding <span className="text-gradient">profiles</span></>}
            subtitle="I sharpen my DSA and backend skills across platforms — here's where you can find my work."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {codingProfiles.map((p, i) => (
              <motion.a
                key={p.platform}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.08,
                  type: 'spring',
                  stiffness: 220,
                  damping: 18,
                  ease,
                }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative overflow-hidden rounded-2xl glass p-6"
              >
                <div
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
                  style={{ background: p.color }}
                />
                <div className="relative flex items-start justify-between">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-white/40">
                      Platform
                    </span>
                    <h3 className="mt-1 font-display text-xl font-semibold" style={{ color: p.color }}>
                      {p.platform}
                    </h3>
                    <p className="mt-1 text-sm text-white/50">{p.handle}</p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    style={{ color: p.color }}
                  />
                </div>

                <div className="relative mt-6 flex items-end justify-between border-t border-white/8 pt-5">
                  <div>
                    <div className="font-display text-3xl font-semibold" style={{ color: p.color }}>
                      {p.stat}
                    </div>
                    <div className="mt-0.5 text-xs text-white/50">{p.statLabel}</div>
                  </div>
                  <span
                    className="grid h-9 w-9 place-items-center rounded-lg opacity-70 transition-opacity group-hover:opacity-100"
                    style={{ background: `${p.color}1a`, color: p.color }}
                  >
                    {i % 2 === 0 ? <Star size={16} /> : <Trophy size={16} />}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
