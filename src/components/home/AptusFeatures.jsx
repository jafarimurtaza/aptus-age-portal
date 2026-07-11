const features = [
  {
    title: "Smart Talent Matching",
    description:
      "Connect open roles with graduates whose skills, projects, and learning path match what your team needs.",
    icon: (
      <path d="M5 7h6v6H5V7Zm8 0h6v6h-6V7ZM5 15h6v6H5v-6Zm10 2h4m-2-2v4" />
    ),
  },
  {
    title: "Natural Language Search",
    description:
      "Ask in plain language, and Aptus brings forward the closest graduate profiles without complex filters.",
    icon: (
      <path d="M5 7h14M5 12h10M5 17h7m7-1 2 2m-1-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
    ),
  },
  {
    title: "Verified Skill Insights",
    description:
      "Understand practical strengths from cohort work, portfolio projects, and real tools used in training.",
    icon: (
      <path d="m5 13 4 4L19 7M7 21h10a3 3 0 0 0 3-3V9.5L14.5 4H7a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3Z" />
    ),
  },
  {
    title: "Project Evidence",
    description:
      "Review what each graduate has built, which technologies they used, and how they solved problems.",
    icon: (
      <path d="M4 6h16v12H4V6Zm4 4h4m-4 4h8m2-4h2" />
    ),
  },
  {
    title: "Shortlist Support",
    description:
      "Create a focused list of promising profiles so teams can compare candidates with less noise.",
    icon: (
      <path d="M8 5h10v16H8V5Zm-3 3h3m-3 5h3m-3 5h3m4-8h3m-3 4h5" />
    ),
  },
  {
    title: "Team Fit Signals",
    description:
      "See whether a graduate is strongest in frontend, backend, design, collaboration, or product thinking.",
    icon: (
      <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4 20a4 4 0 0 1 8 0m0 0a4 4 0 0 1 8 0" />
    ),
  },
];

const featureSlides = [...features, ...features];

function FeatureIcon({ children }) {
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 shadow-sm shadow-emerald-100">
      <svg
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        {children}
      </svg>
    </span>
  );
}

export default function AptusFeatures() {
  return (
    <section className="w-full overflow-hidden bg-white px-4 py-10 text-slate-950 sm:px-8 sm:py-12 lg:px-16 xl:px-20 xl:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-xl text-center">
          <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700 shadow-sm shadow-emerald-100">
            Aptus capabilities
          </p>
          <h2 className="mt-5 text-2xl font-semibold leading-tight text-slate-950 sm:text-3xl">
            Discover talent faster
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Search, compare, and understand Afghan Geeks graduates through
            skills and real project work.
          </p>
        </div>

        <div className="mt-8 overflow-hidden sm:mt-10">
          <div className="aptus-feature-track flex w-max gap-5 [--feature-gap:1.25rem] lg:gap-6 lg:[--feature-gap:1.5rem]">
            {featureSlides.map((feature, index) => (
              <article
                className="min-h-[210px] w-[260px] shrink-0 rounded-[22px] border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/70 sm:w-[320px] sm:p-6 lg:w-[360px]"
                key={`${feature.title}-${index}`}
              >
                <FeatureIcon>{feature.icon}</FeatureIcon>

                <h3 className="mt-6 text-lg font-semibold text-slate-950 sm:text-xl">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
