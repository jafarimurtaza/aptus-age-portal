"use client";

import Link from "next/link";

const imageSlotStyles = [
  "from-emerald-100 via-teal-50 to-sky-100",
  "from-amber-100 via-orange-50 to-rose-100",
  "from-indigo-100 via-violet-50 to-fuchsia-100",
];

function ImagePlaceholder({ imageIndex = 0 }) {
  return (
    <div
      className={`relative h-full overflow-hidden rounded-2xl bg-gradient-to-br ${imageSlotStyles[imageIndex]}`}
    >
      <div className="absolute inset-4 rounded-2xl border border-white/70 bg-white/35 shadow-inner" />

      <div className="absolute left-6 top-6 h-3 w-24 rounded-full bg-white/80" />

      <div className="absolute left-6 top-14 h-3 w-36 rounded-full bg-white/65" />

      <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-2">
        <span className="h-16 rounded-xl bg-white/60" />
        <span className="h-16 rounded-xl bg-white/45" />
        <span className="h-16 rounded-xl bg-white/55" />
      </div>
    </div>
  );
}


export default function ProjectHeader({
  project,
  imageIndex = 0,
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">

      {/* Image */}
      <div className="overflow-hidden rounded-3xl border bg-white p-4 shadow-xl">
        <div className="h-[430px]">
          <ImagePlaceholder imageIndex={imageIndex} />
        </div>
      </div>


      {/* Information */}
      <div className="rounded-3xl border bg-white p-8 shadow-xl">

        <Link
          href="/projects"
          className="inline-block rounded-full border px-4 py-2 text-sm font-bold hover:bg-gray-50"
        >
          ← Back to projects
        </Link>


        <p className="mt-6 text-xs font-black uppercase text-emerald-700">
          {project.category}
        </p>


        <h1 className="mt-3 text-5xl font-black">
          {project.title}
        </h1>


        <p className="mt-4 text-gray-600 leading-7">
          {project.description}
        </p>


      </div>

    </div>
  );
}