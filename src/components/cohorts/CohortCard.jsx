import { CalendarDays, Folder, Users, ArrowRight } from "lucide-react";

export default function CohortCard({ cohort }) {
  const Icon = cohort.icon;

  return (
    <article className="group overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl">
      <div className="p-6 sm:p-7 lg:p-8">
        {/* Header */}

        <div className="flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-1 gap-6">
            {/* Icon */}

            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl border border-base-300 bg-base-200 shadow-sm transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary/10">
              <Icon className="h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-110" />
            </div>

            {/* Content */}

            <div className="min-w-0 flex-1">
              {/* Status */}

              <div className="mb-4">
                <span
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold ${
                    cohort.status === "completed"
                      ? "border-success/20 bg-success/10 text-success"
                      : "border-primary/20 bg-primary/10 text-primary"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      cohort.status === "completed"
                        ? "bg-success"
                        : "bg-primary"
                    }`}
                  />

                  {cohort.status === "completed" ? "Completed" : "Ongoing"}
                </span>
              </div>

              {/* Title */}

              <h2 className="text-3xl font-bold tracking-tight transition-colors duration-300 group-hover:text-primary">
                {cohort.title}
              </h2>

              {/* Date */}

              <div className="mt-4 flex flex-wrap items-center gap-2 text-base text-base-content/60">
                <CalendarDays size={18} />

                <span>
                  {cohort.startDate} – {cohort.endDate}
                </span>
              </div>

              {/* Description */}

              <p className="mt-6 max-w-4xl leading-8 text-base text-base-content/70">
                {cohort.description}
              </p>
            </div>
          </div>

          {/* Stats */}

          <div className="grid grid-cols-3 gap-4 lg:w-auto">
            <div className="rounded-2xl border border-base-300 bg-base-200 px-6 py-5 text-center transition-all duration-300 hover:border-primary/20 hover:shadow-md">
              <Users className="mx-auto mb-3 h-6 w-6 text-primary" />

              <p className="text-3xl font-bold">{cohort.graduates}</p>

              <p className="mt-1 text-xs uppercase tracking-wider text-base-content/60">
                Graduates
              </p>
            </div>

            <div className="rounded-2xl border border-base-300 bg-base-200 px-6 py-5 text-center transition-all duration-300 hover:border-primary/20 hover:shadow-md">
              <Folder className="mx-auto mb-3 h-6 w-6 text-primary" />

              <p className="text-3xl font-bold">{cohort.projects}</p>

              <p className="mt-1 text-xs uppercase tracking-wider text-base-content/60">
                Projects
              </p>
            </div>

            <div className="rounded-2xl border border-base-300 bg-base-200 px-6 py-5 text-center transition-all duration-300 hover:border-primary/20 hover:shadow-md">
              <CalendarDays className="mx-auto mb-3 h-6 w-6 text-primary" />

              <p className="text-3xl font-bold">{cohort.months}</p>

              <p className="mt-1 text-xs uppercase tracking-wider text-base-content/60">
                Months
              </p>
            </div>
          </div>
        </div>

        <div className="my-7 border-t border-base-300" />

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Skills */}

          <div className="flex flex-wrap gap-3">
            {cohort.skills.map((skill) => (
              <span
                key={skill}
                className="badge badge-outline badge-primary px-4 py-3 transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-content"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Button */}

          <button className="btn btn-primary group/btn h-13 rounded-2xl px-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:scale-95">
            <span>{cohort.button}</span>

            <ArrowRight
              size={19}
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </button>
        </div>
      </div>
    </article>
  );
}
