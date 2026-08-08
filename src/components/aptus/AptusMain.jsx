import { GraduationCap, Heart } from "lucide-react";
import HeroCard from "@/components/aptus/cards/HeroCard";
import ConversationProgress from "@/components/aptus/cards/ConversationProgress";
import ExploreCard from "@/components/aptus/cards/ExploreCard";
import ChatWindow from "@/components/aptus/chats/ChatWindow";
import { APTUS_BRAND } from "@/components/aptus/utils/constants";

export default function AptusMain() {
  return (
    <main className="min-h-screen w-full text-aptus-ink transition-colors duration-300">
      <section className="flex min-h-[calc(100vh-32px)] w-full overflow-hidden border border-white/80 bg-base-100 backdrop-blur-xl transition-colors duration-300 max-lg:flex-col">
        <aside className="flex w-full shrink-0 flex-col border-aptus-line bg-sand md:px-6 px-3 py-2 md:py-7 transition-colors duration-300 lg:w-[296px] lg:border-r">
          <div className="mb-0 md:mb-8 items-center gap-0 md:gap-3 hidden md:flex">
            <div className="flex h-10 w-10 items-center justify-center text-base-300">
              <GraduationCap
                strokeWidth={2.25}
                className="h-10 w-10"
                aria-hidden="true"
              />
            </div>
            <div>
              <h1 className="text-[25px] font-extrabold leading-none tracking-normal text-[#14212A]">
                {APTUS_BRAND.name}
              </h1>
              <p className="mt-1 text-[12px] font-medium text-[#5F6D75]">
                {APTUS_BRAND.subtitle}
              </p>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-0 md:gap-5">
            <HeroCard />
            <div className="flex flex-col gap-0 md:gap-2">
              <div className="order-2 md:order-1">
                <ConversationProgress />
              </div>

              <div className="order-1 md:order-2">
                <ExploreCard />
              </div>
            </div>
          </div>

          <div className="mt-8 hidden lg:flex items-center gap-3 pb-1 text-[11px] leading-tight">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-base-200 text-primary">
              <Heart className="h-4 w-4 fill-current" aria-hidden="true" />
            </div>
            <div>
              <p className="font-semibold text-[#77828A]">
                Powered by
              </p>
              <p className="mt-0.5 font-bold text-gold">
                {APTUS_BRAND.poweredBy}
              </p>
            </div>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 bg-cream p-3 transition-colors duration-300 sm:p-4 lg:p-3">
          <ChatWindow />
        </div>
      </section>
    </main>
  );
}
