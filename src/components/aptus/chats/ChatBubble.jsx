import { cn } from "@/components/aptus/utils/helpers";

export default function ChatBubble({ role, text }) {
  const isUser = role === "user";

  return (
    <div
      className={cn(
        "whitespace-pre-line rounded-[18px] px-3 py-2 text-[12.5px] font-medium leading-[1.9]",
        isUser
          ? "bg-aptus-green text-white shadow-[0_10px_22px_rgba(57,184,112,0.24)]"
          : "border border-[#EDF0EE] bg-white text-[#1F2B33] shadow-[0_8px_18px_rgba(31,50,44,0.08)] dark:border-white/10 dark:bg-[#17231E] dark:text-[#EEF8F2] dark:shadow-[0_10px_24px_rgba(0,0,0,0.22)]"
      )}
    >
      {text}
    </div>
  );
}
