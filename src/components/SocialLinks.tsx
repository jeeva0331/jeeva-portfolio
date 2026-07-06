import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { socials } from '../data/portfolio';

export default function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${compact ? '' : 'justify-center'}`}>
      {socials.map((s, i) => {
        const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[s.icon] ?? Icons.Link;
        return (
          <motion.a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            initial={{ opacity: 0, scale: 0.6, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, type: 'spring', stiffness: 260, damping: 18 }}
            whileHover={{
              scale: 1.18,
              y: -4,
              transition: { type: 'spring', stiffness: 400, damping: 12 },
            }}
            whileTap={{ scale: 0.9 }}
            className="group relative grid h-11 w-11 place-items-center rounded-xl glass text-white/70 transition-colors hover:text-white"
          >
            <motion.span
              className="absolute inset-0 rounded-xl opacity-0 transition-opacity group-hover:opacity-100"
              style={{ background: `${s.color}22`, boxShadow: `0 0 22px ${s.color}55` }}
            />
            <Icon size={18} className="relative z-10" />
            <span className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink-800 px-2 py-1 text-xs text-white/80 opacity-0 transition-opacity group-hover:opacity-100">
              {s.label}
            </span>
          </motion.a>
        );
      })}
    </div>
  );
}
