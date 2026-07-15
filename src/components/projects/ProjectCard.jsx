"use client";

import { useState } from "react";
import Image from "next/image";

const imageSlots = [0, 1, 2];

function ProjectPreview({
  project,
  imageIndex,
  rounded = "rounded-t-2xl",
}) {
  return (
    <div className={`h-full w-full overflow-hidden ${rounded}`}>
      <Image
        src={project.images?.[imageIndex] || "/images/project.jpg"}
        alt={project.title}
        width={600}
        height={400}
        className="h-full w-full object-cover"
      />
    </div>
  );
}


function ProjectGalleryCard({ project }) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <article
      className="
      overflow-hidden
      rounded-2xl
      border
      border-slate-200
      bg-white
      shadow-sm
      transition
      hover:-translate-y-1
      hover:shadow-xl
      "
    >

      {/* Image */}
      <a
        href={`/projects/${project.slug}?image=${activeImage}`}
        className="block h-56"
      >
        <ProjectPreview
          project={project}
          imageIndex={activeImage}
        />
      </a>


      <div className="p-4 space-y-4">


        {/* Slider lines */}
        <div className="flex gap-2">
          {imageSlots.map((imageIndex)=>(
            <button
              key={imageIndex}
              onClick={()=>setActiveImage(imageIndex)}
              className={`
              h-1.5 flex-1 rounded-full
              ${
                activeImage===imageIndex
                ?"bg-slate-900"
                :"bg-slate-200"
              }
              `}
            />
          ))}
        </div>



        {/* Author */}
        <p className="
        text-[11px]
        uppercase
        font-bold
        tracking-wider
        text-slate-400
        ">
          BY {project.author}
        </p>



        {/* Title */}
        <h3 className="
        text-lg
        font-black
        text-slate-950
        ">
          {project.title}
        </h3>



        {/* Description */}
        <p className="
        text-sm
        leading-6
        text-slate-500
        line-clamp-2
        ">
          {project.description}
        </p>



        {/* Tags */}
        <div className="flex flex-wrap gap-2">

          {project.tags.map(tag=>(
            <span
              key={tag}
              className="
              rounded-md
              border
              border-slate-200
              bg-slate-50
              px-2
              py-1
              text-xs
              text-slate-600
              "
            >
              {tag}
            </span>
          ))}

        </div>



        {/* Footer */}
        <div className="
        flex
        items-center
        justify-between
        border-t
        border-slate-100
        pt-4
        ">


          <a
            href={`/projects/${project.slug}`}
            className="
            rounded-lg
            bg-slate-950
            px-4
            py-2
            text-xs
            font-bold
            text-white
            hover:bg-slate-800
            "
          >
            Live Demo
          </a>


          <p className="
          text-xs
          font-semibold
          text-slate-400
          ">
            👁 {project.views} views
          </p>


        </div>


      </div>

    </article>
  );
}



export default function ProjectCard({projects}) {


return (

<div
className="
mt-8
grid
gap-6
md:grid-cols-2
lg:grid-cols-3
"
>

{
projects.map(project=>(
<ProjectGalleryCard
key={project.title}
project={project}
/>
))
}

</div>

);

}