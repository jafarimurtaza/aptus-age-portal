export default function ProjectStory({ project }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/5 sm:p-8">

      <h2 className="text-xl font-black text-slate-950 sm:text-2xl">
        Learning case study
      </h2>


      {/* Overview */}
      <p className="mt-4 text-base font-medium leading-8 text-slate-600">
        {project.overview}
      </p>


      {/* Learning Goal */}
      <div className="mt-6 rounded-2xl bg-emerald-50 p-4 sm:p-5">

        <p className="text-xs font-black uppercase text-emerald-700">
          Learning goal
        </p>

        <p className="mt-2 text-sm font-bold leading-6 text-slate-800">
          {project.learningGoal}
        </p>

      </div>



      {/* Challenge + Solution */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">


        <div className="rounded-2xl bg-rose-50 p-4 sm:p-5">

          <p className="text-xs font-black uppercase text-rose-700">
            Project challenge
          </p>

          <p className="mt-2 text-sm font-bold leading-6 text-slate-800">
            {project.problem}
          </p>

        </div>



        <div className="rounded-2xl bg-emerald-50 p-4 sm:p-5">

          <p className="text-xs font-black uppercase text-emerald-700">
            Student solution
          </p>

          <p className="mt-2 text-sm font-bold leading-6 text-slate-800">
            {project.solution}
          </p>

        </div>


      </div>


    </section>
  );
}