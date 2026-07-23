"use client";

import Image from "next/image";

export default function ProjectHero() {
  return (
    <section className="overflow-hidden rounded-3xl bg-[#17396C] px-6 py-16 sm:px-10 lg:px-16 xl:px-20">

      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

        <div className="max-w-xl text-center lg:text-left">

          <div className="mb-8 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold tracking-wide text-[#D79B49] sm:text-sm">
            Showcasing Graduate Excellence
          </div>

          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            Explore Innovative Projects Built by{" "}
            <span className="text-[#D79B49]">
              Afghan Geeks
            </span>
          </h1>

          <p className="mt-6 text-sm leading-7 text-slate-300 sm:text-base">
            Discover creative digital solutions, modern applications,
            and innovative projects created by talented graduates.
          </p>

          <button className="mt-10 rounded-xl bg-[#D79B49] px-7 py-3 text-base font-bold text-white transition duration-300 hover:bg-[#c88f3d] sm:text-lg">
            Meet Our Graduates
          </button>

        </div>


        <div className="relative mx-auto w-full lg:max-w-xl">

          <div className="relative aspect-[11/9] overflow-hidden rounded-[35px] border-3 border-white/20">

            <Image
              src="/images/download (49).jpeg"
              alt="Online learning project preview"
              fill
              priority
              sizes="(max-width:1024px) 100vw, 600px"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

          </div>

        </div>

      </div>

    </section>
  );
}