import ChatBubble from "./ChatBubble";

export default function ChatCard() {
  return (
    <div
      className="
        w-full
        max-w-140
        rounded-3xl
        bg-[#2E6A4C]
        p-8
        shadow-2xl
        ring-1
        ring-white/10
        backdrop-blur-sm
      "
    >
      {/* Conversation */}
      <div className="space-y-6">

        {/* AI Message */}
        <ChatBubble
          sender="ai"
          avatarLetter="A"
          avatarColor="bg-green-600"
          bubbleColor="bg-white"
          textColor="text-gray-800"
          delay="animate-slide-up delay-100"
          message="Hi! I'm Aptus. What kind of talent are you looking for today?"
        />

        {/* User Message */}
        <ChatBubble
          sender="user"
          avatarLetter="U"
          avatarColor="bg-amber-600"
          bubbleColor="bg-amber-600"
          textColor="text-white"
          delay="animate-slide-up delay-300"
          message="I need a React developer who understands design systems."
        />

        {/* AI Response */}
        <ChatBubble
          sender="ai"
          avatarLetter="A"
          avatarColor="bg-green-600"
          bubbleColor="bg-white"
          textColor="text-gray-800"
          delay="animate-slide-up delay-500"
          message="Great! I found 3 graduates who match perfectly. Mariam leads with Figma + React, and Freshta built the portal you're viewing now."
        />

      </div>
    </div>
  );
}