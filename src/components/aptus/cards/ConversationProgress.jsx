import { conversationSteps } from "@/components/aptus/data/conversationSteps";
import { cn } from "@/components/aptus/utils/helpers";

export default function ConversationProgress() {
  return (
    <article className="rounded-2xl bg-base-100 md:bg-base-100 px-3 py-0 md:py-5 transition-colors duration-300 md:px-5">
      <h2 className="text-[13px] font-extrabold text-base-content">
        Conversation Progress
      </h2>

      <ol className="relative mt-7 flex flex-row justify-between gap-2 md:block md:gap-0">
        {/* Horizontal line for mobile (hidden on desktop) */}
        <span
          className="absolute left-3 right-3 top-3 border-t border-dashed border-base-300/20 md:hidden"
          aria-hidden="true"
        />

        {conversationSteps.map((step, index) => {
          return (
            <li
              key={step.id}
              className="relative z-10 flex flex-1 flex-col items-center gap-1.5 pb-0 md:flex-none md:flex-row md:items-start md:gap-4 md:pb-7 last:pb-0 md:last:pb-1"
            >
              {/* Vertical line for desktop (hidden on mobile) */}
              {index !== conversationSteps.length - 1 && (
                <span
                  className="absolute left-2.75 top-7 hidden h-[calc(100%-26px)] border-l border-dashed border-base-300/20 md:block"
                  aria-hidden="true"
                />
              )}

              {/* Step Circle */}
              <span
                className={cn(
                  "relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-extrabold",
                  step.active
                    ? "bg-base-300 text-base-100"
                    : "bg-base-200 text-base-content/65"
                )}
              >
                {step.id}
              </span>

              {/* Text wrapper: centered on mobile, left-aligned on desktop */}
              <span className="min-w-0 pt-px text-center md:text-left">
                {/* Title: Visible on mobile and desktop */}
                <span
                  className={cn(
                    "block text-[12px] font-extrabold",
                    step.active ? "text-primary" : "text-base-content"
                  )}
                >
                  {step.title}
                </span>

                {/* Description: Hidden on mobile, visible on desktop */}
                <span
                  className={cn(
                    "mt-1 hidden text-[10.5px] font-medium leading-4 md:block",
                    step.active ? "text-primary" : "text-base-content/55"
                  )}
                >
                  {step.description}
                </span>
              </span>
            </li>
          );
        })}
      </ol>
    </article>
  );
}
