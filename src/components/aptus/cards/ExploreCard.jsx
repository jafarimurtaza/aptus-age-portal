"use client";

import Link from "next/link";
import { ChevronRight, UsersRound } from "lucide-react";

export default function ExploreCard() {
  return (
    <article className="hidden md:block rounded-2xl bg-white md:px-5 px-2 py-5 transition-colors duration-300">
      <h2 className="text-[13px] font-extrabold text-[#1D2730]">
        Explore Manually
      </h2>
      <p className="mt-4 text-[11px] font-medium text-[#7B858D]">
        Prefer to explore on your own?
      </p>

      <Link
        href="/graduates" 
        className="mt-4 flex h-11 w-full items-center justify-center rounded-xl border border-base-100 bg-primary px-4 text-left font-extrabold shadow-[0_6px_14px_rgba(11,15,25,0.04)] transition duration-200 hover:border-base-300/35 hover:text-base-300 hover:shadow-md"
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
