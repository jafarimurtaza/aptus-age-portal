import Image from "next/image";

export default function ProjectStory({ project }) {
  const paragraphs = project.paragraphs || [];

  return (
    <section
      className="bg-[#F8F4EE] py-12"
      dir="ltr"
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* Project Title */}

        <div className="mb-10 text-center">
          <h2
            className="
              text-4xl
              font-bold
              text-[#17396C]
              md:text-5xl
            "
          >
            {project.title}
          </h2>
        </div>

        {/* Hero Image */}

        <div className="mb-12 overflow-hidden border border-[#E7E3DD] shadow-xl">
          <Image
            src={project.heroImage}
            alt={project.title}
            width={1400}
            height={900}
            priority
            className="
              h-[260px]
              w-full
              object-cover
              transition-transform
              duration-700
              hover:scale-105
              sm:h-[360px]
              md:h-[480px]
              lg:h-[600px]
              xl:h-[700px]
            "
          />
        </div>

        {/* First Paragraph */}

        <p
          className="
            text-lg
            leading-9
            text-[#6C7280]
          "
        >
          {paragraphs[0]}
        </p>

        {/* Two Columns */}

        <div
          className="
            mt-12
            grid
            items-center
            gap-12
            lg:grid-cols-2
          "
        >
          {/* Left Content */}

          <div>
            <h3
              className="
                text-3xl
                font-bold
                leading-tight
                text-[#17396C]
                lg:text-4xl
              "
            >
              Recruitment With AI For Startup Businesses
            </h3>

            <p
              className="
                mt-6
                text-lg
                leading-9
                text-[#6C7280]
              "
            >
              {paragraphs[1]}
            </p>
          </div>

          {/* Right Image */}

          <div className="overflow-hidden border border-[#E7E3DD] shadow-lg">
            <Image
              src={project.storyImage || project.heroImage}
              alt={project.title}
              width={900}
              height={600}
              className="
                h-[180px]
                w-full
                object-cover
                transition-transform
                duration-700
                hover:scale-105
                md:h-[220px]
                lg:h-[260px]
              "
            />
          </div>
        </div>

        {/* Last Paragraph */}

        <div className="mt-8">
          <p
            className="
              text-lg
              leading-9
              text-[#6C7280]
            "
          >
            {paragraphs[2]}
          </p>
        </div>
      </div>
    </section>
  );
}