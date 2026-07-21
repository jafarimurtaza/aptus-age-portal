import Link from "next/link";

export default function ProjectHeader({ project }) {
  return (
    <div className="flex w-full flex-col justify-between border-b border-slate-100 pb-6 sm:flex-row sm:items-end">
      
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          {project.title}
        </h1>

        <div className="mt-3 flex items-center gap-2 text-xs font-medium text-indigo-600">

          <Link
            href="/"
            className="hover:underline"
          >
            Home
          </Link>

          <span className="text-slate-300">
            |
          </span>

          <Link
            href="/projects"
            className="hover:underline"
          >
            Projects
          </Link>

          <span className="text-slate-300">
            |
          </span>

          <span className="text-slate-400">
            Project Details
          </span>

        </div>
      </div>


      {project.heroImage && (
        <div className="mt-4 h-16 w-32 overflow-hidden rounded-lg sm:mt-0">

          <img
            src={project.heroImage}
            alt={project.title}
            className="h-full w-full object-cover"
          />

        </div>
      )}

    </div>
  );
}