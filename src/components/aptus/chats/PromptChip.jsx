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
      className="inline-flex h-10 items-center gap-2 rounded-full border border-[#DDE8E2] bg-white px-4 text-[11px] font-extrabold text-[#27694C] shadow-[0_5px_14px_rgba(36,72,58,0.045)] transition hover:border-aptus-green/40 hover:bg-[#FBFFFC] dark:border-white/10 dark:bg-[#17231E] dark:text-[#B8F3CD] dark:hover:border-aptus-green/45 dark:hover:bg-[#1B2A23] cursor-pointer"
    >
      <Icon className="h-4 w-4 text-[#1D9860]" strokeWidth={2.1} aria-hidden="true" />
      {prompt.label}
    </motion.button>
  );
}
