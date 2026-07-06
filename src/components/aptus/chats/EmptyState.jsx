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
      className="pointer-events-none absolute inset-x-0 top-[28%] z-0 mx-auto h-61.25 max-w-180"
      aria-hidden="true"
    >
      <div className="aptus-ambient-waves" />
      <div className="aptus-dot-field">
        {dots.map((dot) => (
          <span key={dot} className={dot} />
        ))}
      </div>

      <div className="absolute left-1/2 top-[44%] z-10 flex h-20.5 w-20.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#BDEED5]/80 shadow-[0_0_0_22px_rgba(57,184,112,0.08)]">
        <div className="flex h-14.5 w-14.5 items-center justify-center rounded-full bg-[linear-gradient(145deg,#71DA9C,#2DAE67)] text-white shadow-[0_10px_24px_rgba(57,184,112,0.28)]">
          <BotMessageSquare className="h-8 w-8" strokeWidth={2.2} />
        </div>
        <Sparkles className="absolute -left-1 -top-2 h-5 w-5 text-aptus-green" strokeWidth={2.2} />
      </div>
    </motion.div>
  );
}
