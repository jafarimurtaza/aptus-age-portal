import Link from "next/link";

export default function ProjectInfo({ project }) {
  return (
    <section className="mt-16">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500">
          Portfolio
        </p>

        <h2 className="mt-2 text-3xl font-bold text-[#29285d]">
          Latest Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {project.relatedProjects?.map((item) => (
          <div
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition duration-300 hover:shadow-xl"
            key={item.title}
          >
            <img
              alt={item.title}
              className="h-52 w-full object-cover transition-transform duration-300 hover:scale-105"
              src={item.image}
            />

            <div className="flex items-center justify-between px-5 py-4">
              <h3 className="text-sm font-semibold text-slate-800">
                {item.title}
              </h3>

              <Link
                className="text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-800"
                href={`/projects/${item.slug}`}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
