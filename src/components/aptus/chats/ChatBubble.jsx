import { cn } from "@/components/aptus/utils/helpers";

export default function ChatBubble({ role, text }) {
  const isUser = role === "user";

  return (
    <div
      className={cn(
        "whitespace-pre-line rounded-[18px] px-3 py-2 text-[12.5px] font-medium leading-[1.9]",
        isUser
          ? "bg-base-200 text-base-300 shadow-[0_10px_22px_rgba(24,58,107,0.24)]"
          : "border border-[#EDF0EE] bg-white text-[#1F2B33] shadow-[0_8px_18px_rgba(31,50,44,0.08)]"
      )}
    >
      {text}
    </div>
  );
}
