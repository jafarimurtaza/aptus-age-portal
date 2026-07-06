import { ChevronRight, UsersRound } from "lucide-react";

export default function ExploreCard() {
  return (
    <article className="rounded-2xl border border-aptus-line bg-white px-5 py-5 shadow-aptus-card transition-colors duration-300 dark:border-white/10 dark:bg-[#14201B]">
      <h2 className="text-[13px] font-extrabold text-[#1D2730] dark:text-[#F1FAF5]">Explore Manually</h2>
      <p className="mt-4 text-[11px] font-medium text-[#7B858D] dark:text-[#9BA9A2]">Prefer to explore on your own?</p>

      <button
        type="button"
        className="mt-4 flex h-11 w-full items-center justify-between rounded-xl border border-aptus-line bg-white px-4 text-left text-[12px] font-extrabold text-[#25313A] shadow-[0_6px_14px_rgba(25,48,40,0.04)] transition duration-200 hover:border-aptus-green/35 hover:text-aptus-deep hover:shadow-aptus-soft dark:border-white/10 dark:bg-[#101A16] dark:text-[#E6F3EC] dark:hover:border-aptus-green/45 dark:hover:text-[#7AE6A1]"
      >
        <span className="flex items-center gap-3">
          <UsersRound className="h-4 w-4 text-aptus-green" aria-hidden="true" />
          View All Graduates
        </span>
        <ChevronRight className="h-4 w-4 text-aptus-green" aria-hidden="true" />
      </button>
    </article>
  );
}
