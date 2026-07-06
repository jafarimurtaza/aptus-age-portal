"use client";

import { motion } from "framer-motion";
import PromptChip from "@/components/aptus/chats/PromptChip";
import { suggestedPrompts } from "@/components/aptus/data/suggestedPrompts";

export default function SuggestedPrompts({ onSelectPrompt }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.36, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 mt-auto pb-9 text-center"
    >
      <p className="mb-5 text-[13px] font-extrabold text-[#1B252D] dark:text-[#EEF8F2]">
        Try asking something like:
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        {suggestedPrompts.map((prompt, index) => (
          <PromptChip
            key={prompt.id}
            prompt={prompt}
            index={index}
            onSelect={() => onSelectPrompt(prompt.label)}
          />
        ))}
      </div>
    </motion.div>
  );
}
