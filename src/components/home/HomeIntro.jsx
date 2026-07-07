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
    value: 14,
    label: "Total Graduates",
  },
  {
    value: 20,
    label: "Projects Built",
  },
  {
    value: 3,
    label: "Cohorts Completed",
  },
  {
    value: 14,
    label: "Skills Taught",
  },
];

export default function HomeIntro() {
  return (
    <section className="w-full bg-[#f8fafc] px-4 pb-12 pt-12 text-slate-950 sm:px-8 sm:py-16 lg:px-16 xl:px-20 xl:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 xl:min-h-[560px] xl:grid-cols-[0.95fr_1.05fr] xl:gap-12">
        <div className="mx-auto max-w-xl text-center xl:mx-0 xl:text-left">
          <h1 className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700 shadow-sm shadow-emerald-100 sm:px-5 sm:py-2.5 sm:text-base">
            Afghan Geeks Graduate Portal
          </h1>

          <h2 className="mt-6 text-2xl font-semibold leading-snug text-slate-950 sm:text-3xl lg:text-4xl xl:mt-8">
            Find skilled Afghan tech graduates
          </h2>

          <p className="mt-4 min-h-8 text-lg font-semibold text-[#1d4ed8] sm:mt-5 sm:text-xl">
            <span className="typing-loop">Verified skills. Real projects.</span>
          </p>

          <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 xl:mx-0 xl:mt-6">
            Explore Afghan Geeks graduates through clear profiles, practical
            project experience, and the technical skills they can bring to
            professional teams.
          </p>

          <div className="mt-8 flex flex-row flex-wrap justify-center gap-3 sm:gap-5 xl:mt-12 xl:justify-start">
            <button className="btn min-w-36 border-0 bg-[#071022] px-5 text-sm text-white hover:bg-[#111827] sm:min-w-52 sm:px-8 sm:text-base">
              Browse Graduates
            </button>

            <button className="btn min-w-32 border-[#1d4ed8] bg-white px-5 text-sm text-[#1d4ed8] hover:border-[#1d4ed8] hover:bg-blue-50 sm:min-w-44 sm:px-8 sm:text-base">
              Try Aptus AI
            </button>
          </div>
        </div>

        <div className="flex min-h-[430px] items-center justify-center overflow-hidden px-0 py-4 sm:min-h-[500px] sm:px-8 sm:py-8 xl:min-h-[540px] xl:px-10">
          <div className="graduate-card-stack relative h-[430px] w-full max-w-[360px] sm:h-[500px] sm:max-w-[460px] xl:h-[560px] xl:max-w-[560px]">
            {graduates.map((graduate, index) => (
              <article
                className="graduate-card absolute left-1/2 top-1/2 w-[min(82vw,280px)] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl shadow-slate-200/70 sm:w-[320px] xl:w-[360px]"
                key={graduate.name}
                style={{ "--card-index": index }}
              >
                <div
                  className={`relative flex h-48 items-end justify-center bg-gradient-to-br sm:h-60 xl:h-72 ${graduate.photoClass}`}
                >
                  <div className="absolute bottom-0 left-0 h-24 w-24 -translate-x-8 translate-y-10 rotate-45 bg-white"></div>
                </div>

                <div className="relative bg-white p-5 sm:p-6 xl:p-7">
                  <h3 className="text-lg font-bold text-[#1d4ed8] sm:text-xl xl:text-2xl">
                    {graduate.name}
                  </h3>

                  <p className="mt-3 flex items-center gap-3 text-base font-bold text-emerald-700 sm:text-lg xl:text-xl">
                    <span className="flex h-6 w-6 items-center justify-center rounded bg-emerald-600 text-sm text-white">
                      ✓
                    </span>
                    Verified Graduate
                  </p>

                  <p className="ml-9 mt-1 text-sm text-emerald-700 sm:text-base xl:text-lg">
                    in {graduate.skill}
                  </p>

                  <p className="mt-4 flex items-center gap-3 text-base text-slate-600 sm:mt-5 sm:text-lg xl:text-xl">
                    <span className="flex h-6 w-6 items-center justify-center border border-slate-400 text-sm text-slate-500">
                      ✓
                    </span>
                    {graduate.title}
                  </p>

                  <p className="mt-5 text-xs font-semibold uppercase text-slate-500 sm:mt-7 sm:text-sm xl:mt-9">
                    Previously at
                  </p>
                  <p className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl xl:text-4xl">
                    {graduate.company}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-0 mx-auto mt-8 grid max-w-7xl gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm sm:grid-cols-2 sm:gap-4 sm:p-4 lg:mt-12 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            className="rounded-lg bg-slate-50 px-4 py-6 text-center sm:px-6 sm:py-8"
            key={stat.label}
          >
            <h2 className="text-4xl font-bold text-emerald-700 sm:text-5xl">
              {stat.value}
            </h2>
            <p className="mt-3 font-medium text-slate-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
