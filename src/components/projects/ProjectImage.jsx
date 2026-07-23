"ues client";  

import Image from "next/image";

export default function ProjectImage({
  project,
  imageIndex,
  rounded = "rounded-t-3xl",
}) {

  const image =
    project.images?.[imageIndex] || "/images/download (49).jpeg";


  return (

    <div
      className={`
        group
        relative
        h-full
        w-full
        overflow-hidden
        ${rounded}
        bg-[#101827]
      `}
    >

      <Image
        alt={`${project.title} screenshot`}
        className="
          object-cover
          transition-transform
          duration-700
          group-hover:scale-110
        "
        fill
        sizes="(max-width:768px) 100vw, 420px"
        src={image}
      />


      {/* Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#080D1A]/40
          via-transparent
          to-transparent
          opacity-0
          transition
          duration-500
          group-hover:opacity-100
        "
      />


    </div>

  );
}