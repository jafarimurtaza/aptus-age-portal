import { cn } from "@/components/aptus/utils/helpers";

export default function ChatBubble({ role, text }) {
  const isUser = role === "user";

  return (
    <div
      className={cn(
        "whitespace-pre-line px-3 py-2 text-[12.5px] font-medium leading-[1.9]",
        isUser
          ? "bg-base-200 text-base-300"
          : "border border-[#EDF0EE] bg-white text-[#1F2B33]"
      )}
    >
      {text}
    </div>
  );
}
