"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function ProjectImage({ project, imageIndex, rounded = "rounded-t-2xl" }) {
  const image = project.images?.[imageIndex] || "/images/download (49).jpeg";

  return (
    <div className={`relative h-full w-full overflow-hidden ${rounded}`}>
      <Image
        alt={`${project.title} screenshot`}
        className="object-cover"
        fill
        sizes="(max-width: 768px) 100vw, 420px"
        src={image}
      />
    </div>
  );
}

function ProjectGalleryCard({ project }) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <Link
        className="block h-52 sm:h-56"
        href={`/projects/${project.slug}?image=${activeImage}`}
      >
        <ProjectImage project={project} imageIndex={activeImage} />
      </Link>

      <div className="space-y-4 p-4">
        <div className="grid grid-cols-3 gap-2">
          {project.images?.map((image, imageIndex) => (
            <button
              className={`h-16 overflow-hidden rounded-xl border-2 transition ${
                activeImage === imageIndex
                  ? "border-slate-950 ring-2 ring-slate-100"
                  : "border-slate-200 hover:border-emerald-400"
              }`}
              key={image}
              onClick={() => setActiveImage(imageIndex)}
              type="button"
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

        <h3 className="text-lg font-black text-slate-950">{project.title}</h3>

        <p className="line-clamp-2 text-sm leading-6 text-slate-500">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <span
              className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-600"
              key={tag}
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
    <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectGalleryCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
