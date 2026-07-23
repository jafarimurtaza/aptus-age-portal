export default function ProjectStory({ project }) {
  const paragraphs = project.paragraphs || [];

  return (
    <section className="bg-[#F8F4EE] py-20 text-black" dir="ltr">
      <div className="mx-auto max-w-6xl px-6">

        {/* Hero Image */}
        <img
          src={project.heroImage}
          alt={project.title}
          className="
            mb-10
            h-[280px]
            md:h-[380px]
            lg:h-[500px]
            w-full
            rounded-2xl
            border
            border-[#E7E3DD]
            object-cover
            shadow-lg
          "
        />

        {/* Title */}
        <h2 className="text-5xl font-semibold text-[#17396C]">
          {project.title}
        </h2>

        <p className="mt-10 text-lg leading-9 text-[#6C7280]">
          {paragraphs[0]}
        </p>

        {/* Two Columns */}
        <div className="mt-20 grid gap-16 lg:grid-cols-2">

          {/* Left */}
          <div>
            <h3 className="mb-8 text-5xl font-semibold leading-tight text-[#17396C]">
              Recruitment With AI For Startup Businesses
            </h3>

            <p className="text-lg leading-9 text-[#6C7280]">
              {paragraphs[1]}
            </p>
          </div>

          {/* Right Image */}
          <div>
            <img
              src={project.storyImage || project.heroImage}
              alt={project.title}
              className="
                h-[280px]
                md:h-[380px]
                lg:h-[500px]
                w-full
                rounded-2xl
                border
                border-[#E7E3DD]
                object-cover
                shadow-lg
                transition-transform
                duration-500
                hover:scale-[1.02]
              "
            />
          </div>

        </div>

        <p className="mt-20 text-lg leading-9 text-[#6C7280]">
          {paragraphs[2]}
        </p>

      </div>
    </section>
  );
}