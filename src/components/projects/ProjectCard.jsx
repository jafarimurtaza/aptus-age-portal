"use client";

import { useState } from "react";

const imageSlots = [0, 1, 2];

const imageSlotStyles = [
  "from-emerald-100 via-teal-50 to-sky-100",
  "from-amber-100 via-orange-50 to-rose-100",
  "from-indigo-100 via-violet-50 to-fuchsia-100",
];

function ProjectPreview({ imageIndex, rounded = "rounded-t-2xl" }) {
  return (
    <div
      className={`h-full ${rounded} bg-gradient-to-br ${imageSlotStyles[imageIndex]}`}
    />
  );
}

function ProjectGalleryCard({ project }) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-900/15">
      <a
        aria-label={`Open ${project.title} project page`}
        className="block h-44 sm:h-52 md:h-56"
        href={`/projects/${project.slug}?image=${activeImage}`}
        target="_blank"
        rel="noreferrer"
      >
        <ProjectPreview imageIndex={activeImage} />
      </a>

      <div className="space-y-4 p-4">
        <div className="flex gap-2">
          {imageSlots.map((imageIndex) => (
            <button
              aria-label={`Show screenshot ${imageIndex + 1} for ${
                project.title
              }`}
              className={`h-14 flex-1 overflow-hidden rounded-lg border-2 transition ${
                activeImage === imageIndex
                  ? "border-emerald-600 ring-2 ring-emerald-100"
                  : "border-slate-200 hover:border-emerald-300"
              }`}
              key={`${project.title}-${imageIndex}`}
              onClick={() => setActiveImage(imageIndex)}
              type="button"
            >
              <ProjectPreview imageIndex={imageIndex} rounded="rounded-md" />
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h3 className="text-lg font-black leading-tight text-slate-950">
              {project.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm font-medium leading-6 text-slate-600">
              {project.description}
            </p>
          </div>
          <span className="w-fit rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-black text-emerald-800">
            Live
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-black text-slate-700"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <a
            className="btn h-9 min-h-0 w-full rounded-full border-0 bg-green-900 px-4 text-xs font-black text-white hover:bg-green-950 sm:w-auto"
            href={`/projects/${project.slug}`}
            target="_blank"
            rel="noreferrer"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-sky-300" />
            Live Demo
          </a>

          <p className="flex items-center gap-1.5 text-xs font-black text-slate-500">
            <span className="relative h-3 w-4 rounded-full border border-slate-500 before:absolute before:left-1/2 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-slate-500" />
            {project.views} Views
          </p>
        </div>
      </div>
    </article>
  );
}

export default function ProjectCard({ projects }) {
  if (projects.length === 0) {
    return (
      <div className="mt-8 rounded-xl border border-dashed border-emerald-300 bg-white p-10 text-center shadow-sm">
        <p className="text-lg font-black text-slate-950">No projects found</p>
        <p className="mt-2 text-sm font-semibold text-slate-600">
          Try another search or choose All from the filters.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6 grid gap-5 sm:mt-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectGalleryCard
          key={project.title}
          project={project}
        />
      ))}
    </div>
  );
}
