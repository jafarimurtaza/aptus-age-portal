"use client";

import { motion } from "framer-motion";

export default function MessageInput({ value, canSend, onChange, onSend }) {
  function handleSubmit(event) {
    event.preventDefault();
    onSend();
  }

  return (
    <form className="flex items-center gap-2 sm:gap-4" onSubmit={handleSubmit}>
      <div className="flex h-10 sm:h-12 min-w-0 flex-1 items-center border border-[#E6ECE8] bg-white px-3 sm:px-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_18px_rgba(31,50,44,0.055)] transition-colors duration-300">
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Type your message..."
          aria-label="Type your message"
          className="min-w-0 flex-1 bg-transparent text-[12.5px] font-medium text-[#1E2A32] placeholder:text-[#8A949B] focus:outline-none"
        />
      </div>

      <motion.button
        type="submit"
        aria-label="Send message"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        disabled={!canSend}
        className="cursor-pointer flex h-9 w-9 sm:h-13.5 sm:w-13.5 shrink-0 items-center justify-center rounded-full bg-primary text-base-300 shadow-[0_12px_24px_rgba(24,58,107,0.28)] transition hover:bg-base-300 hover:text-base-100 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <Send className="h-4 w-4 sm:h-5 sm:w-5 -translate-x-px translate-y-px fill-current" strokeWidth={2.1} />
      </motion.button>
    </form>
  );
}
