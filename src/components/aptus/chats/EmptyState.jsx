"use client";

import { motion } from "framer-motion";
import { BotMessageSquare, Sparkles } from "lucide-react";

const dots = [
  "left-[31%] top-[38%]",
  "left-[37%] top-[48%]",
  "left-[44%] top-[36%]",
  "left-[57%] top-[35%]",
  "left-[64%] top-[46%]",
  "left-[72%] top-[39%]",
];

export default function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute inset-x-0 top-[34%] z-0 mx-auto h-40 max-w-180 sm:top-[28%] sm:h-61.25"
      aria-hidden="true"
    >
      <div className="aptus-ambient-waves" />
      <div className="aptus-dot-field">
        {dots.map((dot) => (
          <span key={dot} className={dot} />
        ))}
      </div>

      <div className="absolute left-1/2 top-[44%] z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary/80 shadow-[0_0_0_22px] shadow-primary/10 sm:h-20.5 sm:w-20.5">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-base-300 to-primary text-base-100 shadow-[0_10px_24px] shadow-primary/30 sm:h-14.5 sm:w-14.5">
          <BotMessageSquare className="h-6 w-6 sm:h-8 sm:w-8" strokeWidth={2.2} />
        </div>
        <Sparkles className="absolute -left-1 -top-2 h-4 w-4 text-base-300 sm:h-5 sm:w-5" strokeWidth={2.2} />
      </div>
    </motion.div>
  );
}
