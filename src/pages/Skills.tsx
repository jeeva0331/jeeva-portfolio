import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import PageTransition from '../components/PageTransition';
import GradientBlobs from '../components/GradientBlobs';
import ParticleField from '../components/ParticleField';
import { SectionHeading } from '../components/Section';
import { skills } from '../data/portfolio';

const ease = [0.22, 1, 0.36, 1] as const;

function SkillBar({ skill, index }: { skill: (typeof skills)[number]; index: number }) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[skill.icon] ?? Icons.Sparkles;
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease }}
      whileHover={{ y: -6 }}
      className="glass rounded-2xl p-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span
            className="grid h-11 w-11 place-items-center rounded-xl"
            style={{ background: `${skill.color}1a`, color: skill.color }}
          >
            <Icon size={20} />
          </span>
          <span className="font-display text-base font-semibold">{skill.name}</span>
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + index * 0.08 }}
          className="font-mono text-sm font-medium"
          style={{ color: skill.color }}
        >
          {skill.level}%
        </motion.span>
      </div>

      <div className="mt-5 h-2.5 w-full overflow-hidden rounded-full bg-white/8">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, delay: 0.2 + index * 0.08, ease }}
          className="relative h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${skill.color}aa, ${skill.color})`,
            boxShadow: `0 0 14px ${skill.color}66`,
          }}
        >
          <span className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent bg-[length:200%_100%]" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <PageTransition variant="scale">
      <section className="relative min-h-screen overflow-hidden pt-32 pb-24">
        <GradientBlobs variant="warm" />
        <ParticleField density={50} color="251, 191, 36" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Toolkit"
            title={<>My <span className="text-gradient">skills</span>, measured</>}
            subtitle="A live snapshot of the technologies I reach for daily — each bar animates as it scrolls into view."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {skills.map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i} />
            ))}
          </div>

          {/* toolbelt chips */}
          <div className="mt-14">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-white/40">
              Also in the toolbelt
            </p>
            <div className="flex flex-wrap gap-2.5">
              {[
                'Spring Security', 'Spring Data JPA', 'Hibernate', 'Maven', 'Gradle',
                'Postman', 'Swagger', 'Tomcat', 'JUnit', 'Mockito', 'Servlets', 'JSP',
                'Eclipse', 'IntelliJ IDEA', 'VS Code', 'REST', 'CRUD', 'MVC',
              ].map((tool, i) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03, type: 'spring', stiffness: 260, damping: 16 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
