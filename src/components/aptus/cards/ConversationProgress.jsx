import { conversationSteps } from "@/components/aptus/data/conversationSteps";
import { cn } from "@/components/aptus/utils/helpers";

export default function ConversationProgress() {
  return (
    <article className="rounded-2xl border border-aptus-line bg-white px-5 py-5 shadow-aptus-card transition-colors duration-300 dark:border-white/10 dark:bg-[#14201B]">
      <h2 className="text-[13px] font-extrabold text-[#1D2730] dark:text-[#F1FAF5]">Conversation Progress</h2>

      <ol className="mt-7 space-y-0">
        {conversationSteps.map((step, index) => (
          <li key={step.id} className="relative flex gap-4 pb-7 last:pb-1">
            {index !== conversationSteps.length - 1 && (
              <span
                className="absolute left-2.75 top-7 h-[calc(100%-26px)] border-l border-dashed border-[#D7E2DD] dark:border-white/15"
                aria-hidden="true"
              />
            )}

            <span
              className={cn(
                "relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-extrabold",
                step.active
                  ? "bg-aptus-green text-white shadow-[0_7px_16px_rgba(57,184,112,0.32)]"
                  : "bg-[#F3F5F4] text-[#4B5962] dark:bg-[#202C27] dark:text-[#B8C6BF]"
              )}
            >
              {step.id}
            </span>

            <span className="min-w-0 pt-px">
              <span
                className={cn(
                  "block text-[12px] font-extrabold",
                  step.active ? "text-[#6BE39A]" : "text-[#36403b]"
                )}
              >
                {step.title}
              </span>
              <span
                className={cn(
                  "mt-1 block text-[10.5px] font-medium leading-4",
                  step.active ? "text-aptus-green" : "text-[#73808A] dark:text-[#9BA9A2]"
                )}
              >
                {step.description}
              </span>
            </span>
          </li>
        ))}
      </ol>
    </article>
  );
}
