"use client";

// import { LockKeyhole, Moon, Sparkles, Sun } from "lucide-react";
import { LockKeyhole, Sparkles } from "lucide-react";
import MessageList from "@/components/aptus/chats/MessageList";
import EmptyState from "@/components/aptus/chats/EmptyState";
import SuggestedPrompts from "@/components/aptus/chats/SuggestedPrompts";
import MessageInput from "@/components/aptus/chats/MessageInput";
import { useChat } from "@/components/aptus/hooks/useChat";
import { CHAT_NOTICE } from "@/components/aptus/utils/constants";

export default function ChatWindow() {
  const chat = useChat();

  return (
    <section
      aria-label="Chat with Aptus"
      className="flex min-h-190 w-full flex-col overflow-hidden rounded-[22px] border border-aptus-line bg-white shadow-[0_14px_35px_rgba(24,48,39,0.06)] transition-colors duration-300 dark:border-white/10 dark:bg-[#101A16] dark:shadow-[0_18px_42px_rgba(0,0,0,0.34)]"
    >
      <header className="flex h-18 shrink-0 items-center justify-between border-b border-aptus-line px-7 transition-colors duration-300 dark:border-white/10 sm:px-8">
        <div className="flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-aptus-green" strokeWidth={2.4} aria-hidden="true" />
          <h2 className="text-[17px] font-extrabold text-[#121C24] dark:text-[#F5FFF9]">Chat with Aptus</h2>
        </div>

        <div className="flex items-center gap-5">
          <span className="inline-flex h-8 items-center gap-2 rounded-full bg-[#EFFBF5] px-3 text-[11px] font-extrabold text-[#258D58] dark:bg-[#173326] dark:text-[#75E5A2]">
            <span className="h-2 w-2 rounded-full bg-aptus-green" aria-hidden="true" />
            Online
          </span>
          {/* <button
            type="button"
            aria-label={theme.isDark ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={theme.isDark}
            onClick={theme.toggleTheme}
            className="rounded-full p-1 text-[#52616C] transition hover:bg-[#F4F8F6] hover:text-aptus-deep dark:text-[#AFC0B8] dark:hover:bg-white/10 dark:hover:text-white"
          >
            {theme.isDark ? (
              <Sun className="h-5 w-5" strokeWidth={1.9} />
            ) : (
              <Moon className="h-5 w-5" strokeWidth={1.9} />
            )}
          </button> */}
        </div>
      </header>

      <div className="relative flex min-h-117.5 flex-1 flex-col overflow-hidden px-6 py-7 transition-colors duration-300 sm:px-8">
        <MessageList messages={chat.messages} />
        <EmptyState />
        <SuggestedPrompts onSelectPrompt={chat.usePrompt} />
      </div>

      <div className="shrink-0 border-t border-aptus-line px-6 py-5 transition-colors duration-300 dark:border-white/10 sm:px-7">
        <MessageInput
          value={chat.draft}
          canSend={chat.canSend}
          onChange={chat.setDraft}
          onSend={chat.sendMessage}
        />
      </div>

      <footer className="flex min-h-12 shrink-0 flex-wrap items-center justify-between gap-3 border-t border-aptus-line px-7 py-3 text-[10px] font-semibold text-[#828C94] transition-colors duration-300 dark:border-white/10 dark:text-[#98A7A0] sm:px-8">
        <p className="flex items-center gap-2">
          <LockKeyhole className="h-3.5 w-3.5 text-[#6F7B83] dark:text-[#98A7A0]" aria-hidden="true" />
          {CHAT_NOTICE.secure}
        </p>
        <p>{CHAT_NOTICE.disclaimer}</p>
      </footer>
    </section>
  );
}
