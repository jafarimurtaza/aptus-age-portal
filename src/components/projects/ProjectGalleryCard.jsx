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
        border-[#E7E3DD]
        bg-white
        shadow-lg
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#D79B49]
        hover:shadow-2xl
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





      <div
        className="
          space-y-6
          p-6
        "
      >



        {/* Gallery */}

        {
          project.images?.length > 0 && (

            <div
              className="
                grid
                grid-cols-3
                gap-2
              "
            >

              {
                project.images.map((image,index)=>(

                  <button

                    key={`${project.slug}-${index}`}

                    type="button"

                    onClick={() => setActiveImage(index)}

                    className={

                      activeImage === index

                      ?

                      `
                      h-16
                      overflow-hidden
                      border-2
                      border-[#D79B49]
                      `

                      :

                      `
                      h-16
                      overflow-hidden
                      border-2
                      border-[#E7E3DD]
                      hover:border-[#D79B49]
                      `

                    }

                  >

                    <ProjectImage

                      project={project}

                      imageIndex={index}

                      rounded="rounded-none"

                    />


                  </button>

                ))
              }


            </div>

          )
        }






        {/* Author */}

        <p
          className="
            text-[11px]
            font-bold
            uppercase
            tracking-[0.2em]
            text-[#6C7280]
          "
        >

          BY {project.graduate || project.author}

        </p>






        {/* Title */}

        <h3
          className="
            text-2xl
            font-bold
            leading-tight
            text-[#17396C]
            transition-colors
            duration-300
            group-hover:text-[#D79B49]
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
            text-[#6C7280]
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

          {
            project.tags?.map((tag)=>(

              <span

                key={`${project.slug}-${tag}`}

                className="
                  border
                  border-[#E7E3DD]
                  bg-[#F8F4EE]
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  text-[#17396C]
                "

              >

                {tag}

              </span>


            ))
          }


        </div>








        {/* Footer */}

        <div
          className="
            flex
            items-center
            justify-between
            border-t
            border-[#ECE8E1]
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
              text-[#6C7280]
            "
          >

            {project.views} views

          </p>


        </div>



      </div>



    </article>


  );

}