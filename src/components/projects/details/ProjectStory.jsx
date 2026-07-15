export default function ProjectStory({ project }) {
  return (
    <section className="mt-12">
      <div className="space-y-6">
        {project.paragraphs.slice(0, 2).map((text) => (
          <p className="text-base leading-8 text-slate-600" key={text}>
            {text}
          </p>
        ))}
      </div>

      <div className="my-12 overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
        <img
          alt={project.title}
          className="h-[250px] w-full object-cover transition-transform duration-500 hover:scale-105 md:h-[350px] lg:h-[450px]"
          src={project.storyImage}
        />
      </div>

      <p className="text-base leading-8 text-slate-600">
        {project.paragraphs[2]}
      </p>
    </section>
  );
}
