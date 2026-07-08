export default function ProjectCard({ projects }) {
  if (projects.length === 0) {
    return (
      <div className="mt-8 rounded-xl border border-dashed border-emerald-300 bg-white p-10 text-center shadow-sm">
        <p className="text-lg font-black text-slate-950">No projects found</p>
        <p className="mt-2 text-sm font-semibold text-slate-600">
          Try another search or choose All from the filters.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <div
          className="group h-[420px] [perspective:1200px]"
          key={project.title}
        >
          <article className="relative h-full rounded-xl transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="absolute inset-0 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg [backface-visibility:hidden]">
              <div className="h-full bg-gradient-to-br from-slate-50 via-emerald-50 to-sky-50 p-3">
                <div className="h-full rounded-xl border-2 border-dashed border-emerald-300 bg-emerald-50/60 p-4">
                  <div className="h-full rounded-xl border border-emerald-100 bg-white shadow-inner">
                    <div className="h-full bg-gradient-to-br from-white via-emerald-50 to-slate-100" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/90 px-4 py-3 shadow-lg backdrop-blur">
                  <h3 className="text-base font-black text-slate-950">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 flex flex-col rounded-xl border border-emerald-100 bg-white p-5 shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-black uppercase text-emerald-800">
                  Graduate Project
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-black uppercase text-slate-600">
                  Live
                </span>
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-black leading-tight text-slate-950">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm font-medium leading-5 text-slate-600">
                  {project.description}
                </p>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="rounded-lg bg-slate-50 p-3">
                  <p className="text-[10px] font-black uppercase text-slate-500">
                    Category
                  </p>
                  <p className="mt-1 text-xs font-black text-slate-950">
                    Product Design
                  </p>
                </div>
                <div className="rounded-lg bg-emerald-50 p-3">
                  <p className="text-[10px] font-black uppercase text-emerald-700">
                    Status
                  </p>
                  <p className="mt-1 text-xs font-black text-emerald-900">
                    Live Demo Ready
                  </p>
                </div>
                <div className="rounded-lg bg-sky-50 p-3">
                  <p className="text-[10px] font-black uppercase text-sky-700">
                    Impact
                  </p>
                  <p className="mt-1 text-xs font-black text-slate-950">
                    User workflow
                  </p>
                </div>
                <div className="rounded-lg bg-amber-50 p-3">
                  <p className="text-[10px] font-black uppercase text-amber-700">
                    Type
                  </p>
                  <p className="mt-1 text-xs font-black text-slate-950">
                    Web Platform
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-[11px] font-black text-emerald-800"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                <button
                  className="btn h-9 min-h-0 rounded-lg border-0 bg-green-900 px-4 text-xs font-black text-white hover:bg-green-950"
                  type="button"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-sky-300" />
                  Live Demo
                </button>
                <p className="flex items-center gap-1.5 text-xs font-black text-slate-500">
                  <span className="relative h-3 w-4 rounded-full border border-slate-500 before:absolute before:left-1/2 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-slate-500" />
                  {project.views} Views
                </p>
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}
