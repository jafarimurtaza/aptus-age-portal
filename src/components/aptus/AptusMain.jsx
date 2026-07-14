import { GraduationCap, Heart } from "lucide-react";
import HeroCard from "@/components/aptus/cards/HeroCard";
import ConversationProgress from "@/components/aptus/cards/ConversationProgress";
import ExploreCard from "@/components/aptus/cards/ExploreCard";
import ChatWindow from "@/components/aptus/chats/ChatWindow";
import { APTUS_BRAND } from "@/components/aptus/utils/constants";

export default function AptusMain() {
  return (
    <main className="min-h-screen w-full px-4 py-4 text-aptus-ink transition-colors duration-300 dark:text-[#EEF8F2] sm:px-5">
      <section className="mx-auto flex min-h-[calc(100vh-32px)] max-w-310 overflow-hidden rounded-[28px] border border-white/80 bg-white/[0.82] shadow-aptus backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-[#0D1713]/[0.86] dark:shadow-[0_24px_70px_rgba(0,0,0,0.42)] max-lg:flex-col">
        <aside className="flex w-full shrink-0 flex-col border-aptus-line bg-[#FBFDFC]/82 px-6 py-7 transition-colors duration-300 dark:border-white/10 dark:bg-[#101C17]/[0.9] lg:w-[296px] lg:border-r">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center text-aptus-green">
              <GraduationCap
                strokeWidth={2.25}
                className="h-10 w-10"
                aria-hidden="true"
              />
            </div>
            <div>
              <h1 className="text-[25px] font-extrabold leading-none tracking-normal text-[#14212A] dark:text-[#F5FFF9]">
                {APTUS_BRAND.name}
              </h1>
              <p className="mt-1 text-[12px] font-medium text-[#5F6D75] dark:text-[#9BA9A2]">
                {APTUS_BRAND.subtitle}
              </p>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-5">
            <HeroCard />
            <div className="flex flex-col gap-2">
              <div className="order-2 md:order-1">
                <ConversationProgress />
              </div>

              <div className="order-1 md:order-2">
                <ExploreCard />
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3 pb-1 text-[11px] leading-tight">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-aptus-mint text-aptus-green dark:bg-[#173326]">
              <Heart className="h-4 w-4 fill-current" aria-hidden="true" />
            </div>
            <div>
              <p className="font-semibold text-[#77828A] dark:text-[#98A7A0]">
                Powered by
              </p>
              <p className="mt-0.5 font-bold text-aptus-green">
                {APTUS_BRAND.poweredBy}
              </p>
            </div>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 bg-white/60 p-3 transition-colors duration-300 dark:bg-[#0A1310]/60 sm:p-4 lg:p-3">
          <ChatWindow />
        </div>
      </section>
    </main>
  );
}
