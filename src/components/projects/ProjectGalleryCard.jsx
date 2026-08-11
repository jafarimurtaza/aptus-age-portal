"use client";

import Link from "next/link";
import { useState } from "react";

import ProjectImage from "./ProjectImage";

export default function ProjectGalleryCard({ project }) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <article className="group overflow-hidden border border-base-200 bg-gradient-to-b from-base-100 to-base-200 shadow-lg shadow-base-300/10 transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:bg-base-100 hover:shadow-2xl hover:shadow-base-300/15">
      {/* Main Image */}

      <Link
        href={`/projects/${project.slug}?image=${activeImage}`}
        className="block h-60 overflow-hidden"
      >
        <ProjectImage
          project={project}
          imageIndex={activeImage}
          rounded="rounded-none"
        />
      </Link>

      <div className="space-y-6 p-6">
        {/* Gallery */}

        {project.images?.length > 0 && (
          <div className="grid grid-cols-3 gap-2">
            {project.images.map((image, index) => (
              <button
                key={`${project.slug}-${index}`}
                type="button"
                onClick={() => setActiveImage(index)}
                className={
                  activeImage === index
                    ? "h-16 overflow-hidden rounded-xl border-2 border-primary"
                    : "h-16 overflow-hidden rounded-xl border-2 border-base-200 hover:border-primary"
                }
              >
                <ProjectImage
                  project={project}
                  imageIndex={index}
                  rounded="rounded-xl"
                />
              </button>
            ))}
          </div>
        )}

        {/* Author */}

        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted">
          BY {project.graduate || project.author}
        </p>

        {/* Title */}

        <Link
          href={`/projects/${project.slug}`}
          className="block text-[28px] font-bold leading-tight text-base-300 transition-colors duration-300 hover:text-primary"
        >
          {project.title}
        </Link>

        {/* Description */}

        <p className="line-clamp-2 text-[15px] leading-7 text-base-content/60">
          {project.description}
        </p>

        {/* Tags */}

        <div className="flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <span
              key={`${project.slug}-${tag}`}
              className="cursor-pointer rounded-full border border-base-200 bg-white px-4 py-2 text-xs font-semibold text-base-300 transition hover:border-primary hover:text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}

        <div className="flex items-center justify-between border-t border-base-content/20 pt-6">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-base-300"
          >
            Read More
          </Link>

          <p className="text-xs font-semibold text-muted-400">
            {project.views} views
          </p>
        </div>
      </div>
    </article>
  );
}
