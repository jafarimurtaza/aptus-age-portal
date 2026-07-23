"use client";

import { motion } from "framer-motion";
import { BarChart3, Search, UsersRound } from "lucide-react";

const iconMap = {
  search: Search,
  chart: BarChart3,
  users: UsersRound,
};

export default function PromptChip({ prompt, index, onSelect }) {
  const Icon = iconMap[prompt.icon] ?? Search;

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, delay: 0.24 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onSelect}
      className="inline-flex h-10 items-center gap-2 rounded-full border border-sand bg-cream px-2 md:px-4 text-[4px] md:text-[11px] font-extrabold text-navy shadow-[0_5px_14px_rgba(24,58,107,0.045)] transition hover:border-gold/40 hover:bg-sand dark:border-gold/10 dark:bg-dark dark:text-gold dark:hover:border-gold/45 dark:hover:bg-navy cursor-pointer"
    >
      <Icon className="h-4 w-4 text-navy" strokeWidth={2.1} aria-hidden="true" />
      {prompt.label}
    </motion.button>
  );
}
