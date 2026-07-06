import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUp, Sparkles } from 'lucide-react';
import SocialLinks from './SocialLinks';
import { navItems, profile } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/8 bg-ink-950/80">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 text-ink-950">
                <Sparkles size={18} strokeWidth={2.5} />
              </span>
              <span className="font-display text-lg font-semibold">
                {profile.firstName}
                <span className="text-accent-400">.dev</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              {profile.tagline} Currently based in {profile.location} and working with teams worldwide.
            </p>
            <div className="mt-6">
              <SocialLinks />
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-white/60 transition-colors hover:text-accent-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              <li>
                <a href={`mailto:${profile.email}`} className="transition-colors hover:text-accent-300">
                  {profile.email}
                </a>
              </li>
              <li>{profile.location}</li>
              <li className="flex items-center gap-2 text-success">
                <span className="h-2 w-2 rounded-full bg-success" /> Available for work
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-6 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {profile.name}. Crafted with React, Framer Motion & Three.js.
          </p>
          <motion.a
            href="#top"
            whileHover={{ y: -3 }}
            className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-accent-300"
          >
            Back to top <ArrowUp size={14} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
