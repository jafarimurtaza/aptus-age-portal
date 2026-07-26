"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProjectHero() {
  return (
    <section className="relative w-full bg-[#17396C] overflow-hidden">

      <div className="mx-auto max-w-7xl px-8 py-20">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div className="max-w-xl">

            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-6 py-3">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D6A04A]">
                Showcasing Graduate Excellence
              </span>
            </div>

            <h1 className="mt-10 text-6xl font-extrabold leading-[1.05] text-white">
              Explore Innovative
              <br />
              Projects Built by
              <br />
              <span className="text-[#D6A04A]">
                Afghan Geeks
              </span>
            </h1>

            <p className="mt-8 text-xl leading-9 text-slate-200">
              Discover creative digital solutions, modern applications and
              innovative projects created by talented graduates.
            </p>

            <div className="mt-12 flex gap-5">

              <Link
                href="/graduates"
                className="rounded-2xl bg-[#D6A04A] px-10 py-5 text-lg font-semibold text-white transition hover:bg-[#C98B2F]"
              >
                Meet Our Graduates
              </Link>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex justify-end">

            <div className="overflow-hidden  border-4 border-white/15 shadow-2xl">

              <Image
                src="/images/project-detail.jpeg"
                alt="Projects"
                width={720}
                height={520}
                priority
                className="h-[520px] w-[720px] object-cover"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}