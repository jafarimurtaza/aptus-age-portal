"use client";

import { motion } from "framer-motion";
import { Paperclip, Send} from "lucide-react";

export default function MessageInput({ value, canSend, onChange, onSend }) {
  function handleSubmit(event) {
    event.preventDefault();
    onSend();
  }

  return (
    <form className="flex items-center gap-2 sm:gap-4" onSubmit={handleSubmit}>
      <div className="flex h-12 sm:h-15.5 min-w-0 flex-1 items-center rounded-full border border-[#E6ECE8] bg-white px-3 sm:px-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_18px_rgba(31,50,44,0.055)] transition-colors duration-300 dark:border-white/10 dark:bg-[#17231E] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_10px_24px_rgba(0,0,0,0.18)]">
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Type your message..."
          aria-label="Type your message"
          className="min-w-0 flex-1 bg-transparent text-[12.5px] font-medium text-[#1E2A32] placeholder:text-[#8A949B] focus:outline-none dark:text-[#EEF8F2] dark:placeholder:text-[#8C9A93]"
        />

        <div className="ml-2 sm:ml-3 flex items-center gap-2 sm:gap-5 text-[#53636E] dark:text-[#AFC0B8]">
          <button
            type="button"
            aria-label="Attach file"
            className="cursor-pointer rounded-full p-1 transition hover:bg-[#F4F8F6] hover:text-aptus-deep dark:hover:bg-white/10 dark:hover:text-white"
          >
            <Paperclip className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.9} />
          </button>
         
        </div>
      </div>

      <motion.button
        type="submit"
        aria-label="Send message"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        disabled={!canSend}
        className="cursor-pointer flex h-11 w-11 sm:h-13.5 sm:w-13.5 shrink-0 items-center justify-center rounded-full bg-aptus-green text-white shadow-[0_12px_24px_rgba(57,184,112,0.28)] transition hover:bg-[#30AA66] disabled:cursor-not-allowed disabled:opacity-70"
      >
        <Send className="h-4 w-4 sm:h-5 sm:w-5 -translate-x-px translate-y-px fill-current" strokeWidth={2.1} />
      </motion.button>
    </form>
  );
}
