"use client";

import { LockKeyhole, Sparkles } from "lucide-react";
import MessageList from "@/components/aptus/chats/MessageList";
import EmptyState from "@/components/aptus/chats/EmptyState";
import SuggestedPrompts from "@/components/aptus/chats/SuggestedPrompts";
import MessageInput from "@/components/aptus/chats/MessageInput";
import { useChat } from "@/components/aptus/hooks/useChat";
import { CHAT_NOTICE, APTUS_BRAND } from "@/components/aptus/utils/constants";

export default function ChatWindow() {
  const chat = useChat();

  // Check if the user has sent at least one message
  const hasUserSentMessage = chat.messages.some((msg) => msg.role === "user");

  return (
    <section
      aria-label="Chat with Aptus"
      className="mt-0 flex h-[100dvh] w-full flex-col overflow-hidden bg-base-100 transition-colors duration-300 sm:h-auto sm:min-h-[760px]"
    >
      <header className="mt-0 hidden h-18 shrink-0 items-center justify-between border-b border-base-300/15 bg-base-200 px-8 transition-colors duration-300 md:flex">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-base-300" strokeWidth={2.4} aria-hidden="true" />
          <h2 className="hidden md:flex text-[15px] sm:text-[17px] font-extrabold">
            Chat with Aptus
          </h2>
        </div>

        <div className="hidden sm:flex items-center">
          <span className="inline-flex h-7 sm:h-8 items-center gap-1.5 sm:gap-2 rounded-full bg-base-300 px-2.5 sm:px-3 text-[10px] sm:text-[11px] font-extrabold text-base-100 transition hover:bg-primary hover:text-base-300">
            <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-success hover:bg-white" aria-hidden="true" />
            Online
          </span>
        </div>
      </header>

    
      <div className="relative flex min-h-0 flex-1 flex-col overflow-y-auto overflow-x-hidden px-2.5 py-3 transition-colors duration-300 sm:px-8 sm:py-7 md:px-4">
        <MessageList messages={chat.messages} />
        
        {/* Conditionally render EmptyState and SuggestedPrompts */}
        {!hasUserSentMessage && (
          <>
            <div className="hidden md:flex">
              <EmptyState />
            </div>
            
            <SuggestedPrompts onSelectPrompt={chat.usePrompt} />
          </>
        )}
      </div>

      <div className="shrink-0 border-t border-base-300/15 bg-base-100 px-1.5 py-1.5 transition-colors duration-300 sm:px-7 sm:py-5 md:px-4">
        <MessageInput
          value={chat.draft}
          canSend={chat.canSend}
          onChange={chat.setDraft}
          onSend={chat.sendMessage}
        />
      </div>

      <footer className="flex min-h-10 sm:min-h-12 shrink-0 flex-col items-center justify-center gap-1 border-t border-base-300/15 bg-base-200 px-4 py-2.5 text-[9px] sm:flex-row sm:justify-between sm:gap-3 sm:px-8 sm:py-3 sm:text-[10px] font-semibold text-base-content/50 transition-colors duration-300">
        <p className="flex items-center gap-1.5 sm:gap-2">
          <LockKeyhole className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-base-content/60" aria-hidden="true" />
          {CHAT_NOTICE.secure}
        </p>
        <div className="flex lg:hidden items-center gap-1">
          <p className="font-semibold text-base-content/60">
            Powered by
          </p>
          <p className="font-bold text-primary">
            {APTUS_BRAND.poweredBy}
          </p>
        </div>
      </footer>
    </section>
  );
}
