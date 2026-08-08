"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function MessageInput({
  value,
  canSend,
  onChange,
  onSend,
}) {
  function handleSubmit(event) {
    event.preventDefault();

    if (!canSend) return;

    onSend();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        flex
        h-11
        sm:h-12
        w-full
        items-center
        border
        border-[#E6ECE8]
        bg-white
        transition-colors
        duration-200
        focus-within:border-[#C9D6D0]
      "
    >
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Type your message..."
        aria-label="Type your message"
        className="
          min-w-0
          h-full
          flex-1
          bg-transparent
          px-3.5
          sm:px-4
          text-[13px]
          sm:text-sm
          font-medium
          text-[#1E2A32]
          placeholder:text-[#8A949B]
          outline-none
        "
      />

      <motion.button
        type="submit"
        aria-label="Send message"
        whileHover={canSend ? { scale: 0.96 } : undefined}
        whileTap={canSend ? { scale: 0.9 } : undefined}
        disabled={!canSend}
        className="cursor-pointer
          flex
          h-full
          w-11
          sm:w-12
          shrink-0
          items-center
          justify-center
          border-l
          border-[#E6ECE8]
          bg-primary
          text-base-300
          transition-colors
          duration-200
          hover:bg-base-300
          hover:text-base-100
          disabled:cursor-not-allowed
          disabled:opacity-70
          disabled:hover:bg-primary
          disabled:hover:text-base-300
        "
      >
        <ArrowUp
          className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
          strokeWidth={2.25}
        />
      </motion.button>
    </form>
  );
}