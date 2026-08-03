import { stats } from "./HomeIntro";

const statDetails = [
  {
    helper: "trained graduates",
    icon: (
      <path d="M4 7.5 12 4l8 3.5-8 3.5L4 7.5Zm0 4L12 15l8-3.5M7 13v3.5c1.4 1 3 1.5 5 1.5s3.6-.5 5-1.5V13" />
    ),
  },
  {
    helper: "projects built",
    icon: (
      <path d="M5 6h14v12H5V6Zm3 4 2 2-2 2m5 0h3" />
    ),
  },
  {
    helper: "completed cohorts",
    icon: (
      <path d="M12 4v16M5 8h14M7 4h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
    ),
  },
  {
    helper: "skills taught",
    icon: (
      <path d="M7 8h10M7 12h7M7 16h4M5 4h14v16H5V4Z" />
    ),
  },
];

export function StatsSection() {
  return (
    <div className="relative z-0 mx-auto mt-8 grid max-w-7xl gap-3 sm:grid-cols-2 sm:gap-4 lg:mt-12 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <div
          className="flex items-center gap-4 rounded-lg border border-primary/20 bg-base-100 px-5 py-5 shadow-sm shadow-primary/10 transition hover:-translate-y-0.5 hover:border-primary/50 hover:bg-base-200 hover:shadow-md"
          key={stat.label}
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-base-300">
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
              {statDetails[index].icon}
            </svg>
          </div>

          <div>
            <h2 className="text-base font-semibold text-base-content">
              {stat.label}
            </h2>
            <p className="mt-1 text-xs font-medium text-base-content/50">
              {stat.value} {statDetails[index].helper}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
