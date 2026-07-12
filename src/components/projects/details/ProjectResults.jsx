export default function ProjectResults({ project }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/5 sm:p-8">

      {/* Final Outcome */}
      <div className="rounded-2xl bg-slate-50 p-4 sm:p-5">
        <p className="text-xs font-black uppercase text-slate-500">
          Final outcome
        </p>

        <p className="mt-2 text-sm font-bold leading-6 text-slate-800">
          {project.outcome}
        </p>
      </div>

      {/* Next Improvement */}
      <div className="mt-4 rounded-2xl bg-amber-50 p-4 sm:p-5">
        <p className="text-xs font-black uppercase text-amber-700">
          Next improvement
        </p>

        <p className="mt-2 text-sm font-bold leading-6 text-slate-800">
          {project.nextStep}
        </p>
      </div>

      {/* Mentor Review */}
      <div className="mt-4 rounded-2xl bg-violet-50 p-4">
        <p className="text-xs font-black uppercase text-violet-700">
          Mentor review focus
        </p>

        <p className="mt-2 text-sm font-bold leading-6 text-slate-800">
          {project.reviewFocus}
        </p>
      </div>

      {/* Expected Impact */}
      <div className="mt-4 rounded-2xl bg-sky-50 p-4">
        <p className="text-xs font-black uppercase text-sky-700">
          Expected impact
        </p>

        <p className="mt-2 text-sm font-bold leading-6 text-slate-800">
          {project.impact}
        </p>
      </div>

    </section>
  );
}