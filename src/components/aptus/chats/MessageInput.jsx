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
        h-10
        sm:h-12
        w-full
        items-center
        border
        border-base-300/20
        bg-base-100
        transition-colors
        duration-200
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
          px-2.5
          sm:px-4
          text-xs
          sm:text-sm
          font-medium
          text-base-content
          placeholder:text-base-content/45
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
          w-10
          sm:w-12
          shrink-0
          items-center
          justify-center
          border-l
          border-base-300/20
          bg-primary
          text-base-100
          transition-colors
          duration-200
          hover:bg-base-300
          hover:text-base-100
          disabled:cursor-not-allowed
          disabled:hover:bg-primary
          disabled:hover:text-base-100
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
