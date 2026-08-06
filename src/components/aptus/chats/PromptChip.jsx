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
      className="inline-flex h-10 items-center gap-2 rounded-full border border-base-200 bg-base-100 px-2 md:px-4 text-[4px] md:text-[11px] font-extrabold text-base-300 shadow-[0_5px_14px_rgba(24,58,107,0.045)] transition hover:border-primary/40 hover:bg-base-100"
    >
      <Icon className="h-4 w-4 text-base-300" strokeWidth={2.1} aria-hidden="true" />
      {prompt.label}
    </motion.button>
  );
}
