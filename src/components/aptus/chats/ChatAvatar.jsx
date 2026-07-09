import { GraduationCap, UserRound } from "lucide-react";

export default function ChatAvatar({ role }) {
  const isAssistant = role === "assistant";
  const Icon = isAssistant ? GraduationCap : UserRound;

  return (
    <span
      className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#1B7B54,#0F593E)] text-white shadow-[0_8px_18px_rgba(21,91,65,0.26)]"
      aria-hidden="true"
    >
      <Icon className="h-5 w-5" strokeWidth={2.1} />
    </span>
  );
}
