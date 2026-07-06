import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, Eye, CheckCircle2, FileDown } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import GradientBlobs from '../components/GradientBlobs';
import ParticleField from '../components/ParticleField';
import { SectionHeading } from '../components/Section';
import { profile } from '../data/portfolio';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Resume() {
  const [downloaded, setDownloaded] = useState(false);

  const onDownload = () => {
    setDownloaded(true);
    const a = document.createElement('a');
    a.href = profile.resumeUrl;
    a.download = 'Jeeva-M-Resume.pdf';
    a.click();
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <PageTransition variant="scale">
      <section className="relative min-h-screen overflow-hidden pt-32 pb-24">
        <GradientBlobs variant="warm" />
        <ParticleField density={45} color="251, 191, 36" />
        <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeading
            align="center"
            eyebrow="Resume"
            title={<>Grab my <span className="text-gradient">resume</span></>}
            subtitle="A one-page summary of my experience, skills, and shipped work — updated this quarter."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            {/* Resume preview card */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotateX: 12 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              whileHover={{ y: -8, rotateX: 4, rotateY: -2 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative overflow-hidden rounded-3xl glass p-8 sm:p-10"
            >
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-500/20 blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 text-accent-300">
                  <FileText size={22} />
                  <span className="font-mono text-xs uppercase tracking-[0.3em]">PDF · 1 page</span>
                </div>
                <h3 className="mt-5 font-display text-3xl font-semibold tracking-tight">
                  {profile.name}
                </h3>
                <p className="mt-1 text-white/60">{profile.role}</p>

                <div className="mt-7 space-y-4">
                  {['Experience', 'Selected Projects', 'Skills & Tooling', 'Education'].map(
                    (section, i) => (
                      <motion.div
                        key={section}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.12 }}
                        className="flex items-center gap-3 border-b border-white/8 pb-3"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-ember-400" />
                        <span className="text-sm text-white/70">{section}</span>
                        <span className="ml-auto h-px flex-1 max-w-[60%] bg-gradient-to-r from-white/15 to-transparent" />
                      </motion.div>
                    )
                  )}
                </div>

                <div className="mt-8 flex items-center gap-2 text-xs text-white/40">
                  <FileDown size={14} />
                  Last updated July 2026
                </div>
              </div>
            </motion.div>

            {/* Actions */}
            <div className="space-y-5">
              <motion.button
                onClick={onDownload}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-accent-300 to-accent-500 px-7 py-5 font-display text-lg font-semibold text-ink-950 glow-cyan"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <AnimatePresence mode="wait">
                  {downloaded ? (
                    <motion.span
                      key="done"
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="relative flex items-center gap-2"
                    >
                      <CheckCircle2 size={22} /> Downloaded
                    </motion.span>
                  ) : (
                    <motion.span
                      key="dl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="relative flex items-center gap-2"
                    >
                      <Download size={22} /> Download PDF
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              <motion.a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex w-full items-center justify-center gap-2 rounded-2xl glass px-7 py-5 font-display text-lg font-semibold text-white/90"
              >
                <Eye size={22} /> View in browser
              </motion.a>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center text-sm text-white/45"
              >
                Prefer a quick intro first?{' '}
                <a href={`mailto:${profile.email}`} className="text-accent-300 hover:underline">
                  Email me
                </a>{' '}
                instead.
              </motion.p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
