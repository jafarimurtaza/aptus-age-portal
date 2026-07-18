export default function ProjectStory({ project }) {
  return (
    <section className="mt-8" dir="ltr">
      {/* عنوان و پاراگراف‌های اول */}
      <h2 className="text-2xl font-bold text-slate-800 mb-4">{project.title}</h2>
      
      <div className="space-y-4 text-sm leading-7 text-slate-600">
        {project.paragraphs?.slice(0, 2).map((text, idx) => (
          <p key={idx}>{text}</p>
        ))}
      </div>

      {/* گالری دو عکسی کنار هم مطابق تصویر */}
      <div className="my-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="overflow-hidden rounded-xl h-64">
          <img
            alt="Gallery 1"
            className="h-full w-full object-cover"
            src={project.galleryImages?.[0] || project.storyImage}
          />
        </div>
        <div className="overflow-hidden rounded-xl h-64">
          <img
            alt="Gallery 2"
            className="h-full w-full object-cover"
            src={project.galleryImages?.[1] || project.storyImage}
          />
        </div>
      </div>

      {/* پاراگراف آخر */}
      <p className="text-sm leading-7 text-slate-600 mb-8">
        {project.paragraphs?.[2]}
      </p>
    </section>
  );
}
