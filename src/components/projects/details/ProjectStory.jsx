export default function ProjectStory({ project }) {
  const paragraphs = project.paragraphs || [];

  return (
    <section className="bg-[#F8F4EE] py-20 text-black" dir="ltr">

      <div className="mx-auto max-w-6xl px-6">

        {/* Image */}

        <img
          src={project.heroImage}
          alt={project.title}
          className="mb-10 w-full rounded object-cover border border-[#E7E3DD]"
        />

        {/* Title */}

        <h2 className="text-5xl font-semibold text-[#17396C]">

          {project.title}

        </h2>

        {/* <p className="mt-5 text-[#D79B49]">

          by TechBox PRO

        </p> */}

        <p className="mt-10 text-lg leading-9 text-[#6C7280]">

          {paragraphs[0]}

        </p>

        {/* Two Columns */}

        <div className="mt-20 grid gap-16 lg:grid-cols-2">

          <div>

            <h3 className="mb-8 text-5xl font-semibold leading-tight text-[#17396C]">

              Recruitment With AI For Startup Businesses

            </h3>

            <p className="text-lg leading-9 text-[#6C7280]">

              {paragraphs[1]}

            </p>

          </div>

          <div>

            <img
              src={project.storyImage || project.heroImage}
              className="w-full rounded object-cover border border-[#E7E3DD]"
              alt=""
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