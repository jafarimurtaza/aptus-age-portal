"use client";

import Link from "next/link";
import { ChevronRight, UsersRound } from "lucide-react";

export default function ExploreCard() {
  return (
    <article className="rounded-2xl border border-aptus-line bg-white md:px-5 px-2 py-5 shadow-aptus-card transition-colors duration-300 dark:border-white/10 dark:bg-[#14201B]">
      <h2 className="text-[13px] font-extrabold text-[#1D2730] dark:text-[#F1FAF5]">
        Explore Manually
      </h2>
      <p className="mt-4 text-[11px] font-medium text-[#7B858D] dark:text-[#9BA9A2]">
        Prefer to explore on your own?
      </p>

      <Link
        href="/graduates" 
        className="mt-4 flex h-11 w-full items-center justify-center rounded-xl border border-sand bg-gold px-4 text-left font-extrabold text-dark shadow-[0_6px_14px_rgba(11,15,25,0.04)] transition duration-200 hover:border-navy/35 hover:text-navy hover:shadow-md dark:border-cream/10 dark:bg-dark dark:text-cream dark:hover:border-gold/45 dark:hover:text-gold"
      >
        <span className="flex text-sm items-center gap-3 whitespace-nowrap font-normal">
          <UsersRound className="h-4 w-4 text-navy" aria-hidden="true" />
          View All Graduates
        </span>
        <ChevronRight className="h-4 w-4 text-navy" aria-hidden="true" />
      </Link>
    </article>
  );
}
