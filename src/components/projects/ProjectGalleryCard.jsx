"use client";

import Link from "next/link";
import { useState } from "react";

import ProjectImage from "./ProjectImage";

export default function ProjectGalleryCard({ project }) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      
      <Link
        className="block h-52 sm:h-56"
        href={`/projects/${project.slug}?image=${activeImage}`}
      >
        <ProjectImage
          project={project}
          imageIndex={activeImage}
        />
      </Link>


      <div className="space-y-4 p-4">

        <div className="grid grid-cols-3 gap-2">
          {project.images?.map((image, imageIndex) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveImage(imageIndex)}
              className={`h-16 overflow-hidden rounded-xl border-2 transition ${
                activeImage === imageIndex
                  ? "border-slate-950 ring-2 ring-slate-100"
                  : "border-slate-200 hover:border-emerald-400"
              }`}
            >
              <ProjectImage
                project={project}
                imageIndex={imageIndex}
                rounded="rounded-lg"
              />
            </button>
          ))}
        </div>


        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
          BY {project.graduate}
        </p>


        <h3 className="text-lg font-black text-slate-950">
          {project.title}
        </h3>


        <p className="line-clamp-2 text-sm leading-6 text-slate-500">
          {project.description}
        </p>


        <div className="flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>


        <div className="flex items-center justify-between border-t border-slate-100 pt-4">

          <Link
            className="rounded-lg bg-slate-950 px-4 py-2 text-xs font-bold text-white hover:bg-slate-800"
            href={`/projects/${project.slug}`}
          >
            Live Demo
          </Link>


          <p className="text-xs font-semibold text-slate-400">
            {project.views} views
          </p>

        </div>

      </div>

    </article>
  );
}