"use client";

import { Send } from "lucide-react";

export default function ChatInput() {
  return (
    <div className="border-t border-gray-200 bg-white p-4">
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 rounded-full border border-gray-300 px-5 py-3 text-sm outline-none focus:border-green-500"
        />

        <button
          className="rounded-full bg-[#8DA79A] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#6F8D7E]"
        >
          <div className="flex items-center gap-2">
            <span>Send</span>
            <Send size={16} />
          </div>
        </button>
      </div>
    </div>
  );
}