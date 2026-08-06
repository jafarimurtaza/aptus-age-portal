import Link from "next/link";
import Image from "next/image";
import { projects } from "@/app/projects/data";

export default function ProjectInfo({ project }) {
  return (
    <section className="w-full bg-base-100 py-12" dir="ltr">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-5xl font-extrabold text-base-300">
            Latest Projects
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {project?.relatedProjects?.slice(0, 4).map((item, index) => {
            const relatedProject = projects.find((p) => p.slug === item.slug);

            if (!relatedProject) return null;

            return (
              <article
                key={`${relatedProject.slug}-${index}`}
                className="group overflow-hidden border border-base-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-2xl"
              >
                {/* Image */}
                <Link
                  href={`/projects/${relatedProject.slug}`}
                  className="block"
                >
                  <div className="relative h-72 w-full overflow-hidden">
                    <Image
                      src={relatedProject.heroImage}
                      alt={relatedProject.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 520px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-lg">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-6">
                  <Link
                    href={`/projects/${relatedProject.slug}`}
                    className="mt-5 block text-2xl font-bold leading-tight text-base-300 transition-colors duration-300 hover:text-primary"
                  >
                    {relatedProject.title}
                  </Link>

                  <p className="mt-4 text-sm leading-7 text-base-content/60">
                    {relatedProject.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t border-base-content/20 pt-6">
                    <span className="text-sm font-medium text-base-300">
                      View Details
                    </span>

                    <Link
                      href={`/projects/${relatedProject.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-base-300"
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
      </div>
    </section>
  );
}
