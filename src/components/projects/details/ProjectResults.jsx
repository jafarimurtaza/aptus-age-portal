export default function ProjectResults({ project }) {
  return (
    <section className="mt-12">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">
            Project Result
          </p>

          <p className="mt-4 text-base leading-7 text-slate-600">
            {project.outcome}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">
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
