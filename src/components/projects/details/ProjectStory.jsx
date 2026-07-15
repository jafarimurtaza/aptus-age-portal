export default function ProjectStory({ project }) {
  return (
    <section className="mt-12">
      {/* Story Paragraphs */}
      <div className="space-y-6">
        {project.paragraphs.slice(0, 2).map((text, index) => (
          <p
            key={index}
            className="text-base leading-8 text-slate-600"
          >
            {text}
          </p>
        ))}
      </div>

   {/* Story Image */}
<div className="my-12 overflow-hidden rounded-3xl shadow-xl border border-slate-200">
  <img
    src={project.storyImage}
    alt={project.title}
    className="
      w-full
      h-[250px]
      md:h-[350px]
      lg:h-[450px]
      object-cover
      transition-transform
      duration-500
      hover:scale-105
    "
  />
</div>

      {/* Final Paragraph */}
      <p className="text-base leading-8 text-slate-600">
        {project.paragraphs[2]}
      </p>
    </section>
  );
}