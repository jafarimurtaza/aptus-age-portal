"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProjectHero() {
  return (
    <section className="relative overflow-hidden bg-base-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT */}

          <div className="max-w-2xl">
            <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2.5">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Showcasing Graduate Excellence
              </span>
            </div>

            <h1 className="mt-8 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Explore Innovative
              <br />
              Projects Built by
              <br />
              <span className="text-primary">Afghan Geeks</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
              Discover creative digital solutions, modern applications, and
              innovative projects created by talented graduates.
            </p>

            <div className="mt-8">
              <Link
                href="/graduates"
                className="inline-flex items-center rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-white transition duration-300 hover:bg-primary"
              >
                Meet Our Graduates
              </Link>
            </div>
          </div>

          {/* RIGHT */}

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[620px] overflow-hidden border-4 border-white/10 shadow-2xl">
              <Image
                src="/images/project-detail.jpeg"
                alt="Projects"
                width={620}
                height={520}
                priority
                className="h-[320px] w-full object-cover sm:h-[380px] lg:h-[460px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
