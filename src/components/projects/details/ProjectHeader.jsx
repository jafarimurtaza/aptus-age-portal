export default function ProjectHeader({ project }) {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      
      <div className="
        w-full
        h-[250px]
        md:h-[350px]
        lg:h-[450px]
        overflow-hidden
        rounded-xl
      ">
        <img
          src={project.heroImage}
          alt={project.title}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-500
            hover:scale-105
          "
        />
      </div>

      <h2 className="text-xl font-bold text-slate-800 mb-4">
        {project.title}
      </h2>

    </div>
  )
}