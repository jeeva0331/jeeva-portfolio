import { motion } from 'framer-motion';

// Animated gradient blur orbs that drift slowly behind content.
export default function GradientBlobs({
  variant = 'default',
}: {
  variant?: 'default' | 'warm' | 'mixed';
}) {
  const sets = {
    default: [
      { color: 'rgba(6, 182, 212, 0.35)', size: 520, x: '8%', y: '12%' },
      { color: 'rgba(8, 145, 178, 0.28)', size: 460, x: '70%', y: '60%' },
      { color: 'rgba(34, 211, 238, 0.18)', size: 380, x: '40%', y: '80%' },
    ],
    warm: [
      { color: 'rgba(251, 191, 36, 0.32)', size: 500, x: '15%', y: '20%' },
      { color: 'rgba(245, 158, 11, 0.25)', size: 420, x: '72%', y: '55%' },
      { color: 'rgba(252, 211, 77, 0.2)', size: 360, x: '45%', y: '78%' },
    ],
    mixed: [
      { color: 'rgba(6, 182, 212, 0.32)', size: 520, x: '10%', y: '15%' },
      { color: 'rgba(251, 191, 36, 0.26)', size: 440, x: '68%', y: '58%' },
      { color: 'rgba(244, 114, 182, 0.18)', size: 360, x: '42%', y: '82%' },
    ],
  };
  const orbs = sets[variant];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[100px]"
          style={{
            width: orb.size,
            height: orb.size,
            background: orb.color,
            left: orb.x,
            top: orb.y,
          }}
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -30, 25, 0],
            scale: [1, 1.12, 0.92, 1],
          }}
          transition={{
            duration: 16 + i * 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
