"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const particles = [
  "right-6 top-6 h-1.5 w-1.5",
  "right-9 bottom-6 h-1 w-1",
  "right-4 bottom-5 h-1 w-1",
  "right-3 bottom-3 h-1.5 w-1.5",
  "right-7 bottom-3 h-1 w-1",
];

export default function HeroCard() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="relative min-h-31 overflow-hidden rounded-2xl bg-[linear-gradient(137deg,#176545_0%,#0F5239_58%,#0C4733_100%)] px-5 py-5 text-white shadow-[0_18px_34px_rgba(15,82,57,0.28)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_95%_12%,rgba(91,223,145,0.2),transparent_23%),radial-gradient(circle_at_10%_0%,rgba(255,255,255,0.11),transparent_34%)]" />
      <Sparkles className="absolute right-5 top-6 h-4 w-4 text-[#67E39E]" aria-hidden="true" />
      {particles.map((className) => (
        <span
          key={className}
          className={`absolute rounded-full bg-[#79E6A6]/70 ${className}`}
          aria-hidden="true"
        />
      ))}

      <div className="relative max-w-51.25">
        <h2 className="text-[13px] font-extrabold leading-5">
          Find the right Afghan talent
        </h2>
        <p className="mt-3 text-[11px] font-medium leading-[1.75] text-white/88">
          Aptus uses AI to match you with the best Afghan graduates based on your needs-no keywords required.
        </p>
      </div>
    </motion.article>
  );
}
