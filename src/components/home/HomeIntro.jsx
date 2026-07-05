const graduates = [
  {
    name: "Azadeh Ahmadi",
    title: "Full Stack Developer",
    skill: "Web Development",
    company: "AFGHAN GEEKS",
    photoClass: "from-sky-100 via-slate-100 to-blue-200",
  },
  {
    name: "Sahar Karimi",
    title: "UI UX Designer",
    skill: "Product Design",
    company: "APTUS AGE",
    photoClass: "from-emerald-100 via-stone-100 to-teal-200",
  },
  {
    name: "Maryam Rasa",
    title: "Frontend Engineer",
    skill: "React Development",
    company: "TECH STUDIO",
    photoClass: "from-indigo-100 via-slate-100 to-violet-200",
  },
];

const stats = [
  {
    value: "14",
    label: "Total Graduates",
  },
  {
    value: "20",
    label: "Projects Built",
  },
  {
    value: "3",
    label: "Cohorts Completed",
  },
  {
    value: "14",
    label: "Skills Taught",
  },
];

export default function HomeIntro() {
  return (
    <section className="min-h-screen w-full bg-[#f8fafc] px-6 py-16 text-slate-950 sm:px-10 lg:px-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 xl:min-h-[560px] xl:grid-cols-[0.95fr_1.05fr]">
        <div className="max-w-xl">
          <h1 className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2.5 text-base font-bold text-emerald-700 shadow-sm shadow-emerald-100">
            Afghan Geeks Graduate Portal
          </h1>

          <h2 className="mt-8 text-2xl font-semibold leading-snug text-slate-950 sm:text-3xl lg:text-4xl">
            Find skilled Afghan tech graduates
          </h2>

          <p className="mt-5 h-8 text-xl font-semibold text-[#1d4ed8]">
            <span className="typing-loop">Verified skills. Real projects.</span>
          </p>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
            Explore Afghan Geeks graduates through clear profiles, practical
            project experience, and the technical skills they can bring to
            professional teams.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">
            <button className="btn min-w-52 border-0 bg-[#071022] px-8 text-white hover:bg-[#111827]">
              Browse Graduates
            </button>

            <button className="btn min-w-44 border-[#1d4ed8] bg-white px-8 text-[#1d4ed8] hover:border-[#1d4ed8] hover:bg-blue-50">
              Try Aptus AI
            </button>
          </div>
        </div>

        <div className="flex min-h-[520px] items-center justify-center px-3 py-10 sm:px-8 xl:min-h-[540px] xl:px-10">
          <div className="graduate-card-stack relative h-[500px] w-full max-w-[460px] xl:h-[560px] xl:max-w-[560px]">
            {graduates.map((graduate, index) => (
              <article
                className="graduate-card absolute left-1/2 top-1/2 w-[min(78vw,320px)] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl shadow-slate-200/70 xl:w-[360px]"
                key={graduate.name}
                style={{ "--card-index": index }}
              >
                <div
                  className={`relative flex h-60 items-end justify-center bg-gradient-to-br xl:h-72 ${graduate.photoClass}`}
                >
                  <div className="absolute bottom-0 left-0 h-24 w-24 -translate-x-8 translate-y-10 rotate-45 bg-white"></div>
                </div>

                <div className="relative bg-white p-6 xl:p-7">
                  <h3 className="text-xl font-bold text-[#1d4ed8] xl:text-2xl">
                    {graduate.name}
                  </h3>

                  <p className="mt-3 flex items-center gap-3 text-lg font-bold text-emerald-700 xl:text-xl">
                    <span className="flex h-6 w-6 items-center justify-center rounded bg-emerald-600 text-sm text-white">
                      ✓
                    </span>
                    Verified Graduate
                  </p>

                  <p className="ml-9 mt-1 text-base text-emerald-700 xl:text-lg">
                    in {graduate.skill}
                  </p>

                  <p className="mt-5 flex items-center gap-3 text-lg text-slate-600 xl:text-xl">
                    <span className="flex h-6 w-6 items-center justify-center border border-slate-400 text-sm text-slate-500">
                      ✓
                    </span>
                    {graduate.title}
                  </p>

                  <p className="mt-7 text-sm font-semibold uppercase text-slate-500 xl:mt-9">
                    Previously at
                  </p>
                  <p className="mt-2 text-3xl font-black text-slate-900 xl:text-4xl">
                    {graduate.company}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-0 mx-auto mt-12 grid max-w-7xl gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            className="rounded-lg bg-slate-50 px-6 py-8 text-center"
            key={stat.label}
          >
            <h2 className="text-5xl font-bold text-emerald-700">
              {stat.value}
            </h2>
            <p className="mt-3 font-medium text-slate-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
