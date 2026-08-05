import Image from "next/image";

const features = [
  {
    title: "Smart Talent Matching",
    description:
      "Match roles with graduates by skills, projects, and readiness.",
    icon: (
      <path d="M5 7h6v6H5V7Zm8 0h6v6h-6V7ZM5 15h6v6H5v-6Zm10 2h4m-2-2v4" />
    ),
  },
  {
    title: "Natural Language Search",
    description:
      "Describe what you need and get focused profile suggestions.",
    icon: (
      <path d="M5 7h14M5 12h10M5 17h7m7-1 2 2m-1-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
    ),
  },
  {
    title: "Verified Skill Insights",
    description:
      "See practical strengths from cohort work and real tools.",
    icon: (
      <path d="m5 13 4 4L19 7M7 21h10a3 3 0 0 0 3-3V9.5L14.5 4H7a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3Z" />
    ),
  },
  {
    title: "Project Evidence",
    description:
      "Review built projects, tools used, and solved problems.",
    icon: (
      <path d="M4 6h16v12H4V6Zm4 4h4m-4 4h8m2-4h2" />
    ),
  },
  {
    title: "Shortlist Support",
    description:
      "Save strong profiles and compare candidates faster.",
    icon: (
      <path d="M8 5h10v16H8V5Zm-3 3h3m-3 5h3m-3 5h3m4-8h3m-3 4h5" />
    ),
  },
  {
    title: "Team Fit Signals",
    description:
      "Spot strengths in code, design, teamwork, or product thinking.",
    icon: (
      <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4 20a4 4 0 0 1 8 0m0 0a4 4 0 0 1 8 0" />
    ),
  },
];

function FeatureIcon({ children }) {
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-neutral">
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

export default function AptusFeaturesslider() {
  return (
    <section className="w-full bg-base-100 text-base-content">
      <div className="w-full border-y border-primary/20 bg-base-200 px-4 py-6 shadow-sm shadow-primary/10 sm:px-8 lg:px-16 lg:py-8 xl:px-20">
        <div className="grid items-center gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <div>
          <p className="inline-flex rounded-full border border-primary/30 bg-base-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-neutral shadow-sm shadow-primary/10">
              Aptus capabilities
            </p>
            <h2 className="mt-5 max-w-md text-2xl font-semibold leading-tight text-neutral sm:text-3xl">
              Match talent in four simple steps
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-base-content/70 sm:text-base">
              Aptus helps teams move from a simple request to a focused
              graduate shortlist.
            </p>

            <div className="relative mt-6 h-56 overflow-hidden bg-base-100 shadow-sm sm:h-72 lg:h-80">
              <Image
                alt="Aptus AI talent matching preview"
                className="object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                src="/Images/ai-technology.avif"
              />
            </div>
          </div>

          <div className="w-full max-w-xl space-y-3 lg:justify-self-start">
            {features.slice(0, 4).map((feature, index) => (
              <article
                className={`flex gap-4 rounded-2xl border bg-base-100 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                  index === 2
                    ? "border-primary/50 shadow-primary/10"
                    : "border-primary/20"
                }`}
                key={feature.title}
              >
                <FeatureIcon>{feature.icon}</FeatureIcon>

                <div>
                  <p className="text-xs font-semibold text-primary">
                    Step {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 text-base font-medium text-base-content">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-base-content/60">
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
