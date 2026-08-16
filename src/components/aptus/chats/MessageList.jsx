import ChatMessage from "@/components/aptus/chats/ChatMessage";

export default function MessageList({ messages }) {
  return (
    <div className="relative z-20 flex flex-col gap-3 sm:gap-4" aria-live="polite">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
    </div>
  );
}
