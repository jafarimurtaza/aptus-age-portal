export default function ProjectHeader({ project }) {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="h-[250px] w-full overflow-hidden rounded-xl md:h-[350px] lg:h-[450px]">
        <img
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          src={project.heroImage}
        />
      </div>

      <h2 className="mb-4 text-xl font-bold text-slate-800">
        {project.title}
      </h2>
    </div>
  );
}
