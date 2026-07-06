import { motion } from 'framer-motion';
import { ArrowUpRight, Clock } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import GradientBlobs from '../components/GradientBlobs';
import ParticleField from '../components/ParticleField';
import { SectionHeading } from '../components/Section';
import { articles } from '../data/portfolio';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Articles() {
  return (
    <PageTransition variant="fade">
      <section className="relative min-h-screen overflow-hidden pt-32 pb-24">
        <GradientBlobs variant="default" />
        <ParticleField density={40} />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Writing"
            title={<>Featured <span className="text-gradient">articles</span></>}
            subtitle="Notes on Java, Spring Boot, REST APIs, and the craft of building reliable backends."
          />

          <div className="mt-12 space-y-5">
            {articles.map((article, i) => (
              <motion.a
                key={article.title}
                href={article.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
                whileHover={{ x: 8 }}
                className="group block overflow-hidden rounded-2xl glass p-6 transition-colors hover:border-accent-400/30 sm:p-7"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-white/50">
                      <span className="rounded-full bg-accent-500/15 px-3 py-1 font-medium text-accent-300">
                        {article.tag}
                      </span>
                      <span>{article.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {article.readTime}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-accent-200 sm:text-2xl">
                      {article.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base">
                      {article.excerpt}
                    </p>
                  </div>
                  <motion.span
                    whileHover={{ rotate: 45, scale: 1.1 }}
                    className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-white/5 text-white/50 transition-colors group-hover:bg-accent-500/15 group-hover:text-accent-300"
                  >
                    <ArrowUpRight size={22} />
                  </motion.span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
