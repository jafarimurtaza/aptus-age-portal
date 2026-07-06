export default function ProjectCard({ projects }) {
  if (projects.length === 0) {
    return (
      <div className="mt-8 rounded-lg border border-dashed border-emerald-400 bg-white/70 p-8 text-center">
        <p className="text-lg font-black text-slate-950">No projects found</p>
        <p className="mt-2 text-sm font-semibold text-slate-600">
          Try another search or choose All from the filters.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <article
          className="overflow-hidden rounded-lg border border-emerald-900/20 bg-[#064b08] text-white shadow-lg shadow-emerald-950/10"
          key={project.title}
        >
          <div>
            <div className="aspect-[16/7] border-b border-emerald-100 bg-[#f7f5e8] shadow-inner" />
          </div>

          <div className="p-3">
            <h3 className="text-base font-black leading-tight">
              {project.title}
            </h3>

            <p className="mt-2 h-12 overflow-hidden text-[11px] font-bold leading-4 text-white/85">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  className="rounded-full bg-slate-200 px-3 py-1 text-[11px] font-black text-slate-950"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2.5">
              <div className="h-9 w-9 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-full bg-[radial-gradient(circle_at_50%_32%,#f8fafc_0_18%,transparent_19%),radial-gradient(circle_at_50%_88%,#94a3b8_0_42%,transparent_43%),linear-gradient(135deg,#dbeafe,#dcfce7)]" />
              </div>
              <p className="text-sm font-black">{project.graduate}</p>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-2">
              <div className="flex gap-2">
                <button
                  className="btn h-7 min-h-0 rounded-full border-0 bg-slate-200 px-3 text-[11px] font-black text-slate-950 hover:bg-white"
                  type="button"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
                  Live Demo
                </button>
                <button
                  className="btn h-7 min-h-0 rounded-full border-0 bg-slate-200 px-3 text-[11px] font-black text-slate-950 hover:bg-white"
                  type="button"
                >
                  <span className="text-[10px] font-black leading-none">
                    &lt;/&gt;
                  </span>
                  GitHub
                </button>
              </div>
              <p className="flex items-center gap-1.5 text-xs font-black text-white/90">
                <span className="relative h-3 w-4 rounded-[50%] border border-white/90 before:absolute before:left-1/2 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-white/90" />
                {project.views} Views
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
