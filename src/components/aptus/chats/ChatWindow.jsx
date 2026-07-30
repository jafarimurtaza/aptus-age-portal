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
      className="flex h-[100dvh] sm:h-auto sm:min-h-[760px] w-full flex-col overflow-hidden rounded-none sm:rounded-[22px] border border-aptus-line bg-cream shadow-none sm:shadow-[0_14px_35px_rgba(24,48,39,0.06)] transition-colors duration-300 dark:border-white/10 dark:bg-[#101A16] sm:dark:shadow-[0_18px_42px_rgba(0,0,0,0.34)]"
    >
      <header className="flex h-14 sm:h-18 shrink-0 items-center justify-between border-b border-aptus-line px-4 sm:px-8 transition-colors duration-300 dark:border-white/10">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-navy" strokeWidth={2.4} aria-hidden="true" />
          <h2 className="text-[15px] sm:text-[17px] font-extrabold text-dark dark:text-[#F5FFF9]">
            Chat with Aptus
          </h2>
        </div>

        <div className="hidden sm:flex items-center">
          <span className="inline-flex h-7 sm:h-8 items-center gap-1.5 sm:gap-2 rounded-full bg-gold px-2.5 sm:px-3 text-[10px] sm:text-[11px] font-extrabold text-dark dark:bg-[#173326] dark:text-[#75E5A2]">
            <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-navy" aria-hidden="true" />
            Online
          </span>
        </div>
      </header>

      {/* 
        Changed back to your EXACT original container. 
        Only added "overflow-y-auto" so the whole content (messages + prompts) can scroll together.
      */}
      <div className="relative flex min-h-0 flex-1 flex-col overflow-y-auto overflow-x-hidden md:px-4 px-3 py-5 sm:px-8 sm:py-7 transition-colors duration-300">
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

      <div className="shrink-0 border-t border-aptus-line md:px-4 px-3 py-3.5 sm:px-7 sm:py-5 transition-colors duration-300 dark:border-white/10">
        <MessageInput
          value={chat.draft}
          canSend={chat.canSend}
          onChange={chat.setDraft}
          onSend={chat.sendMessage}
        />
      </div>

      <footer className="flex min-h-10 sm:min-h-12 shrink-0 flex-col items-center justify-center gap-1 border-t border-aptus-line px-4 py-2.5 text-[9px] sm:flex-row sm:justify-between sm:gap-3 sm:px-8 sm:py-3 sm:text-[10px] font-semibold text-[#828C94] transition-colors duration-300 dark:border-white/10 dark:text-[#98A7A0]">
        <p className="flex items-center gap-1.5 sm:gap-2">
          <LockKeyhole className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#6F7B83] dark:text-[#98A7A0]" aria-hidden="true" />
          {CHAT_NOTICE.secure}
        </p>
        <div className="flex lg:hidden items-center gap-1">
          <p className="font-semibold text-[#77828A] dark:text-[#98A7A0]">
            Powered by
          </p>
          <p className="font-bold text-navy">
            {APTUS_BRAND.poweredBy}
          </p>
        </div>
      </footer>
    </section>
  );
}