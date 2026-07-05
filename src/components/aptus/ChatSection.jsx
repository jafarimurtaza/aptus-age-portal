import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

export default function ChatSection() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg">
      {/* Header */}
      <ChatHeader />

      {/* Messages */}
      <div className="flex-1 overflow-y-auto bg-gray-50 px-8 py-6">
        <ChatMessages />
      </div>

      {/* Input */}
      <ChatInput />
    </div>
  );
}