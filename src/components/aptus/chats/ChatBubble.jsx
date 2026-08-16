import { cn } from "@/components/aptus/utils/helpers";

export default function ChatBubble({ role, text }) {
  const isUser = role === "user";

  return (
    <div
      className={cn(
        "whitespace-pre-line px-2.5 py-1.5 text-[12.5px] font-medium leading-[1.65] sm:px-3 sm:py-2 sm:leading-[1.9]",
        isUser
          ? "bg-base-300 text-base-100"
          : "border border-base-200 bg-base-200 text-base-content"
      )}
    >
      {text}
    </div>
  );
}
