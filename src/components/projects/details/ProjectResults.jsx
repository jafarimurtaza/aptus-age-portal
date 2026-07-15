export default function ProjectResults({ project }) {
  return (
    <section className="mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
          <p className="text-xs uppercase tracking-widest text-indigo-500 font-semibold">
            Project Result
          </p>

          <p className="mt-4 text-base leading-7 text-slate-600">
            {project.outcome}
          </p>
        </div>

        <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
          <p className="text-xs uppercase tracking-widest text-indigo-500 font-semibold">
            Next Step
          </p>

          <p className="mt-4 text-base leading-7 text-slate-600">
            {project.nextStep}
          </p>
        </div>

      </div>
    </section>
  );
}