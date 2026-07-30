"use client";

import Link from "next/link";
import { useState } from "react";

import ProjectImage from "./ProjectImage";


export default function ProjectGalleryCard({ project }) {

  const [activeImage, setActiveImage] = useState(0);


  return (

    <article
  className="
    group
    overflow-hidden
  
    border
    border-[#E7DCCB]
    bg-gradient-to-b
    from-[#FFFDF9]
    to-[#F7F2EA]
    shadow-lg
    shadow-[#17396C]/10
    transition-all
    duration-500
    hover:-translate-y-2
    hover:border-[#D79B49]
    hover:bg-white
    hover:shadow-2xl
    hover:shadow-[#17396C]/15
  "
>
  {/* Main Image */}

  <Link
    href={`/projects/${project.slug}?image=${activeImage}`}
    className="
      block
      h-60
      overflow-hidden
    "
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
                ? `
                    h-16
                    overflow-hidden
                    rounded-xl
                    border-2
                    border-[#D79B49]
                  `
                : `
                    h-16
                    overflow-hidden
                    rounded-xl
                    border-2
                    border-[#E6DDD0]
                    hover:border-[#D79B49]
                  `
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

    <p
      className="
        text-[11px]
        font-bold
        uppercase
        tracking-[0.22em]
        text-[#8A7C6A]
      "
    >
      BY {project.graduate || project.author}
    </p>

    {/* Title */}

{/* Title */}

<Link
  href={`/projects/${project.slug}`}
  className="
    block
    text-[28px]
    font-bold
    leading-tight
    text-[#17396C]
    transition-colors
    duration-300
    hover:text-[#D79B49]
  "
>
  {project.title}
</Link>

    {/* Description */}

    <p
      className="
        line-clamp-2
        text-[15px]
        leading-7
        text-[#6C7280]
      "
    >
      {project.description}
    </p>

    {/* Tags */}

    <div className="flex flex-wrap gap-2">
      {project.tags?.map((tag) => (
        <span
          key={`${project.slug}-${tag}`}
          className="
            rounded-full
            border
            border-[#E5D7C4]
            bg-white
            px-4
            py-2
            text-xs
            font-semibold
            text-[#17396C]
            transition
            hover:border-[#D79B49]
            hover:text-[#D79B49]
            cursor-pointer
            
          "
        >
          {tag}
        </span>
      ))}
    </div>

    {/* Footer */}

    <div
      className="
        flex
        items-center
        justify-between
        border-t
        border-[#E7DCCB]
        pt-6
      "
    >
      <Link
        href={`/projects/${project.slug}`}
        className="
          inline-flex
          items-center
          rounded-full
          bg-[#D79B49]
          px-6
          py-3
          text-sm
          font-semibold
          text-white
          transition-all
          duration-300
          hover:bg-[#17396C]
        "
      >
        Read More
      </Link>

      <p
        className="
          text-xs
          font-semibold
          text-[#7C7C7C]
        "
      >
        {project.views} views
      </p>
    </div>

  </div>
</article>


  );

}