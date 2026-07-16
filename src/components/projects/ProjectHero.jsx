"use client";

import Image from "next/image";

export default function ProjectHero() {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-center">

      <div className="text-center lg:text-left">

        <div className="badge mb-5 border-0 bg-slate-950 px-3 py-3 text-xs font-medium text-white shadow-sm sm:text-sm">
          Showcasing Graduate Excellence
        </div>


        <h1 className="mx-auto max-w-3xl text-3xl font-black leading-tight sm:text-4xl md:text-5xl lg:mx-0">
          Explore Innovative Projects Built by{" "}
          <span className="text-emerald-800">
            Afghan Geeks
          </span>
        </h1>


        <button className="btn mt-6 border-0 bg-slate-950 px-6 text-base font-extrabold text-white hover:bg-slate-800 sm:text-lg">
          Meet Our Graduates
        </button>

      </div>


      <div className="mx-auto w-full max-w-md">

        <div className="rounded-2xl border border-emerald-100 bg-white p-3 shadow-xl shadow-emerald-900/10 sm:p-4">

          <div className="relative aspect-video overflow-hidden rounded-xl border border-slate-200 bg-slate-100">

            <Image
              alt="Online learning project preview"
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 430px"
              src="/images/EduFlex - E-Learning Hero Section Figma Template.jpeg"
            />

          </div>

        </div>

      </div>

    </div>
  );
}