"use client";

import Link from "next/link";
import { ChevronRight, UsersRound } from "lucide-react";

export default function ExploreCard() {
  return (
    <article className="hidden md:block rounded-2xl bg-base-100 md:px-5 px-2 py-5 transition-colors duration-300">
      <h2 className="text-[13px] font-extrabold text-base-content">
        Explore Manually
      </h2>
      <p className="mt-4 text-[11px] font-medium text-base-content/55">
        Prefer to explore on your own?
      </p>

      <Link
        href="/graduates" 
        className="mt-4 flex h-11 w-full items-center justify-center rounded-xl border border-primary bg-primary px-4 text-left font-extrabold text-neutral transition duration-200 hover:border-base-300 hover:bg-base-300 hover:text-base-100"
      >
        <span className="flex text-sm items-center gap-3 whitespace-nowrap font-normal">
          <UsersRound className="h-4 w-4" aria-hidden="true" />
          View All Graduates
        </span>
        <ChevronRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}
