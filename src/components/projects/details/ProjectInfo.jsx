export default function ProjectInfo({ project }) {
  return (
    <section className="mt-6 grid gap-6 lg:grid-cols-3">

      {/* Stats */}
      <div className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">

        <h2 className="text-2xl font-black">
          Project Information
        </h2>


        <div className="mt-5 grid gap-3 sm:grid-cols-3">

          <div className="rounded-2xl bg-emerald-50 p-4">
            <p className="text-xs font-black uppercase text-emerald-700">
              Views
            </p>

            <p className="mt-2 text-3xl font-black">
              {project.views}
            </p>
          </div>


          <div className="rounded-2xl bg-sky-50 p-4">
            <p className="text-xs font-black uppercase text-sky-700">
              Duration
            </p>

            <p className="mt-2 text-xl font-black">
              {project.duration}
            </p>
          </div>


          <div className="rounded-2xl bg-amber-50 p-4">
            <p className="text-xs font-black uppercase text-amber-700">
              Level
            </p>

            <p className="mt-2 text-lg font-black">
              Graduate
            </p>
          </div>

        </div>


        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">

          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-800"
            >
              {tag}
            </span>
          ))}

        </div>

      </div>


      {/* Graduate */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">

        <p className="text-xs font-black uppercase text-slate-500">
          Created by
        </p>

        <h3 className="mt-3 text-xl font-black">
          {project.graduate}
        </h3>

      </div>


    </section>
  );
}