"use client";

import { motion } from "framer-motion";
import ChatAvatar from "@/components/aptus/chats/ChatAvatar";
import ChatBubble from "@/components/aptus/chats/ChatBubble";
import { cn } from "@/components/aptus/utils/helpers";

export default function ChatMessage({ message }) {
  const isUser = message.role === "user";

  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className={cn("flex gap-4", isUser && "justify-end")}
    >
      {!isUser && <ChatAvatar role={message.role} />}

      <div className={cn("max-w-97.5", isUser && "flex flex-col items-end")}>
        <ChatBubble role={message.role} text={message.text} />
        <time className="mt-2 block text-[10px] font-semibold text-[#8A949B]">
          {message.timestamp}
        </time>
      </div>
    </motion.article>
  );
}
