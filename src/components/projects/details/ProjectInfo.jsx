import Link from "next/link";
import { projects } from "@/app/projects/data";

export default function ProjectInfo({ project }) {
  return (
    <section
      className="
        mt-16
        w-full
        rounded-[40px]
        bg-[#F8F4EE]
        px-8
        py-16
      "
      dir="ltr"
    >
      {/* Heading */}

      <div className="mb-12 text-center">
        <p
          className="
            mb-2
            text-xs
            font-semibold
            uppercase
            tracking-[4px]
            text-[#D79B49]
          "
        >
          Related Work
        </p>

        <h2
          className="
            text-4xl
            font-extrabold
            text-[#17396C]
          "
        >
          Latest Projects
        </h2>

        <p
          className="
            mt-4
            text-base
            text-[#6C7280]
            max-w-2xl
            mx-auto
          "
        >
          Explore more related case studies and discover inspiring projects
          created by our community.
        </p>
      </div>

      {/* Cards */}

      <div
        className="
          grid
          grid-cols-1
          gap-8
          md:grid-cols-2
        "
      >
        {project?.relatedProjects?.slice(0, 4).map((item, index) => {
          const relatedProject = projects.find(
            (p) => p.slug === item.slug
          );

          if (!relatedProject) return null;

          return (
            <article
              key={`${relatedProject.slug}-${index}`}
              className="
                group
                overflow-hidden
                rounded-3xl
                bg-white
                border
                border-[#E7E3DD]
                shadow-md
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#D79B49]
                hover:shadow-xl
              "
            >
              {/* Image */}

              <div
                className="
                  relative
                  aspect-[16/10]
                  overflow-hidden
                  bg-[#F5F2EC]
                "
              >
                <img
                  src={relatedProject.heroImage}
                  alt={relatedProject.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Number */}

                <span
                  className="
                    absolute
                    left-5
                    top-5
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-[#D79B49]
                    text-white
                    text-sm
                    font-bold
                    shadow-lg
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}

              <div className="p-7">
                {/* Badge */}

                <span
                  className="
                    inline-block
                    rounded-full
                    bg-[#F4E7D3]
                    px-3
                    py-1
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-[#D79B49]
                  "
                >
                  Case Study
                </span>

                {/* Title */}

                <h3
                  className="
                    mt-4
                    text-2xl
                    font-bold
                    leading-tight
                    text-[#17396C]
                    transition-colors
                    duration-300
                    group-hover:text-[#D79B49]
                  "
                >
                  {relatedProject.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-4
                    text-sm
                    leading-7
                    text-[#6C7280]
                  "
                >
                  {relatedProject.description}
                </p>

                {/* Footer */}

                <div
                  className="
                    mt-8
                    flex
                    items-center
                    justify-between
                    border-t
                    border-[#ECE8E1]
                    pt-6
                  "
                >
                  <span
                    className="
                      text-sm
                      font-medium
                      text-[#17396C]
                    "
                  >
                    View Details
                  </span>

                  <Link
                    href={`/projects/${relatedProject.slug}`}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-[#D79B49]
                      px-6
                      py-3
                      text-sm
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:bg-[#17396C]
                    "
                  >
                    Read More

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}