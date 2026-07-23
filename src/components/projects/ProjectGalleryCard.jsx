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
        rounded-3xl
        border
        border-[#243B63]
        bg-[#101827]
        shadow-lg
        shadow-black/20
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >


      {/* Main Image */}

      <Link
        className="
          block
          h-56
          overflow-hidden
          sm:h-60
        "
        href={`/projects/${project.slug}?image=${activeImage}`}
      >

        <ProjectImage
          project={project}
          imageIndex={activeImage}
        />

      </Link>



      <div
        className="
          space-y-5
          p-5
        "
      >



        {/* Gallery */}

        <div className="grid grid-cols-3 gap-2">

          {project.images?.map((image, imageIndex)=>(

            <button
              key={image}
              type="button"
              onClick={()=>setActiveImage(imageIndex)}
              className={`
                h-16
                overflow-hidden
                rounded-xl
                border-2
                transition-all

                ${
                  activeImage === imageIndex
                  ?
                  "border-[#D6A04A] ring-2 ring-[#D6A04A]/20"
                  :
                  "border-[#243B63] hover:border-[#D6A04A]"
                }
              `}
            >

              <ProjectImage
                project={project}
                imageIndex={imageIndex}
                rounded="rounded-lg"
              />

            </button>

          ))}

        </div>




        {/* Author */}

        <p
          className="
            text-[11px]
            font-bold
            uppercase
            tracking-[0.2em]
            text-[#A8B1C2]
          "
        >
          BY {project.graduate}
        </p>





        {/* Title */}

        <h3
          className="
            text-xl
            font-extrabold
            text-[#F8F5EE]
            transition
            group-hover:text-[#D6A04A]
          "
        >
          {project.title}
        </h3>





        {/* Description */}

        <p
          className="
            line-clamp-2
            text-sm
            leading-7
            text-[#A8B1C2]
          "
        >
          {project.description}
        </p>





        {/* Tags */}

        <div
          className="
            flex
            flex-wrap
            gap-2
          "
        >

          {project.tags?.map((tag)=>(

            <span
              key={tag}
              className="
                rounded-full
                border
                border-[#243B63]
                bg-[#080D1A]
                px-3
                py-1
                text-xs
                font-medium
                text-[#F8F5EE]
                transition
                hover:border-[#D6A04A]
                hover:text-[#D6A04A]
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
            border-[#243B63]
            pt-5
          "
        >


          <Link
            className="
              rounded-xl
              bg-[#D6A04A]
              px-5
              py-2.5
              text-xs
              font-bold
              text-[#080D1A]
              transition
              hover:bg-[#e5b968]
            "
            href={`/projects/${project.slug}`}
          >
            Live Demo
          </Link>



          <p
            className="
              text-xs
              font-semibold
              text-[#A8B1C2]
            "
          >
            {project.views} views
          </p>


        </div>


      </div>


    </article>

  );
}