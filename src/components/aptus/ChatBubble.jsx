export default function ChatBubble({
  sender,
  message,
  avatarLetter,
  avatarColor,
  bubbleColor,
  textColor,
  delay = "",
}) {
  // Check if the message is from the user
  const isUser = sender === "user";

  return (
    <div
      className={`flex items-end gap-3 ${
        isUser ? "justify-end" : "justify-start"
      } ${delay}`}
    >
      {/* AI Avatar */}
      {!isUser && (
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full font-semibold text-white ${avatarColor}`}
        >
          {avatarLetter}
        </div>
      )}

      {/* Chat Bubble */}
      <div
        className={`max-w-xs rounded-2xl px-5 py-4 shadow-md md:max-w-sm ${bubbleColor}`}
      >
        <p className={`text-sm leading-7 ${textColor}`}>
          {message}
        </p>
      </div>

      {/* User Avatar */}
      {isUser && (
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full font-semibold text-white ${avatarColor}`}
        >
          {avatarLetter}
        </div>
      )}
    </div>
  );
}