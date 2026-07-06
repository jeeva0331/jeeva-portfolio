import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import GradientBlobs from '../components/GradientBlobs';
import ParticleField from '../components/ParticleField';
import SocialLinks from '../components/SocialLinks';
import { SectionHeading } from '../components/Section';
import { profile } from '../data/portfolio';

const ease = [0.22, 1, 0.36, 1] as const;
type Status = 'idle' | 'loading' | 'success' | 'error';

type FormState = { name: string; email: string; message: string };
type FormErrors = Partial<Record<keyof FormState, string>>;

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('idle');

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = 'Please tell me your name';
    if (!form.email.trim()) next.email = 'An email lets me reply';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'That email looks off';
    if (form.message.trim().length < 10) next.message = 'A little more detail helps (10+ chars)';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onChange = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    // Simulated send — wire to Supabase / edge function when ready.
    await new Promise((r) => setTimeout(r, 1400));
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <PageTransition variant="rise">
      <section className="relative min-h-screen overflow-hidden pt-32 pb-24">
        <GradientBlobs variant="default" />
        <ParticleField density={55} />
        <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeading
            align="center"
            eyebrow="Get in touch"
            title={<>Let's build something <span className="text-gradient">solid</span></>}
            subtitle="Have a role or project in mind, or just want to say hello? Drop a message below and I'll reply within a day."
          />

          <div className="mx-auto mt-12 grid max-w-4xl gap-8 lg:grid-cols-[1fr_1.2fr]">
            {/* left: direct contact */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="space-y-6"
            >
              <a
                href={`mailto:${profile.email}`}
                className="group block rounded-2xl glass p-6 transition-colors hover:border-accent-400/40"
              >
                <Mail className="text-accent-400" size={22} />
                <p className="mt-3 text-sm text-white/50">Email me at</p>
                <p className="mt-1 font-display text-lg font-medium group-hover:text-accent-300">
                  {profile.email}
                </p>
              </a>

              <div className="rounded-2xl glass p-6">
                <p className="text-sm text-white/50">Find me on</p>
                <div className="mt-4">
                  <SocialLinks />
                </div>
              </div>

              <div className="rounded-2xl border border-success/20 bg-success/5 p-6">
                <div className="flex items-center gap-2 text-success">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
                  </span>
                  Currently available
                </div>
                <p className="mt-2 text-sm text-white/55">
                  Open to full-time roles and internships.
                </p>
              </div>
            </motion.div>

            {/* right: form */}
            <motion.form
              onSubmit={onSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="relative rounded-3xl glass-strong p-7 sm:p-8"
              noValidate
            >
              <Field
                label="Your name"
                error={errors.name}
                value={form.name}
                onChange={onChange('name')}
                placeholder="Jane Doe"
              />
              <Field
                label="Email"
                type="email"
                error={errors.email}
                value={form.email}
                onChange={onChange('email')}
                placeholder="jane@company.com"
              />
              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium text-white/80">Message</label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={onChange('message')}
                  placeholder="Tell me about your project, timeline, and goals…"
                  className={`w-full resize-none rounded-xl border bg-ink-900/60 px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors ${
                    errors.message ? 'border-danger/60' : 'border-white/10 focus:border-accent-400'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-danger">
                    <AlertCircle size={13} /> {errors.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                whileTap={{ scale: 0.97 }}
                className="relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-accent-300 to-accent-500 px-6 py-3.5 font-medium text-ink-950 glow-cyan disabled:opacity-90"
              >
                <AnimatePresence mode="wait">
                  {status === 'loading' && (
                    <motion.span
                      key="loading"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2"
                    >
                      <Loader2 size={18} className="animate-spin" /> Sending…
                    </motion.span>
                  )}
                  {status === 'success' && (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 size={18} /> Message sent!
                    </motion.span>
                  )}
                  {status === 'idle' && (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2"
                    >
                      Send message <Send size={17} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* success overlay burst */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 14 }}
                    className="pointer-events-none absolute -right-3 -top-3 grid h-16 w-16 place-items-center rounded-full bg-success/15 text-success"
                  >
                    <CheckCircle2 size={30} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.form>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  placeholder,
  type = 'text',
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className="mb-5">
      <label className="mb-2 block text-sm font-medium text-white/80">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-xl border bg-ink-900/60 px-4 py-3 text-white placeholder:text-white/30 outline-none transition-colors ${
          error ? 'border-danger/60' : 'border-white/10 focus:border-accent-400'
        }`}
      />
      {error && (
        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-danger">
          <AlertCircle size={13} /> {error}
        </p>
      )}
    </div>
  );
}
