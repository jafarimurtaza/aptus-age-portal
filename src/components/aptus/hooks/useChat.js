"use client";

import { useCallback, useMemo, useState } from "react";
import { initialMessages } from "@/components/aptus/data/messages";
import { getCurrentTimeLabel } from "@/components/aptus/utils/helpers";

export function useChat() {
  const [messages, setMessages] = useState(initialMessages);
  const [draft, setDraft] = useState("");

  const canSend = useMemo(() => draft.trim().length > 0, [draft]);

  const sendMessage = useCallback((value = draft) => {
    const text = value.trim();

    if (!text) {
      return;
    }

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: `message-${Date.now()}`,
        role: "user",
        text,
        timestamp: getCurrentTimeLabel(),
      },
    ]);
    setDraft("");
  }, [draft]);

  const usePrompt = useCallback((prompt) => {
    setDraft(prompt);
  }, []);

  return {
    messages,
    // current messages being typed
    draft,
    canSend,
    setDraft,
    sendMessage,
    usePrompt,
  };
}
