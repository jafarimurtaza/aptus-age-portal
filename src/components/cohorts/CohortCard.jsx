import { CalendarDays, Folder, Users, ArrowRight } from "lucide-react";

export default function CohortCard({ cohort }) {
  const Icon = cohort.icon;

  return (
    <article
      className="group overflow-hidden rounded-3xl border border-base-300 bg-base-200 p-4 
      shadow-sm transition-all duration-500 hover:-translate-y-1 lg:p-8"
    >
      <div className="flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex-1">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left">
            {/* Icon */}
            <div className="flex h-20w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-base-300 transition-all duration-500 group-hover:rotate-6 group-hover:scale-105 sm:h-24 sm:w-24 lg:h-28 lg:w-28">
              <Icon className=" h-9 w-9 text-primary transition-transform duration-500 group-hover:scale-110 sm:h-11 sm:w-11 lg:h-14 lg:w-14" />
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">
              {/* Status */}
              <div className="flex justify-center sm:justify-start">
                <span
                  className={`badge uppercase ${cohort.status === "completed" ? "badge-success" : "badge-primary"}`}
                >
                  {" "}
                  {cohort.status}
                </span>
              </div>

              {/* Title */}
              <h2
                className=" mt-4 break-words text-2xl font-bold leading-tight sm:text-3xl
                "
              >
                {cohort.title}
              </h2>

              {/* Date */}
              <div
                className=" mt-4 flex flex-wrap items-center justify-center gap-2 text-sm text-base-content/70 sm:justify-start sm:text-base
                "
              >
                <CalendarDays size={18} />
                <span>
                  {" "}
                  {cohort.startDate} – {cohort.endDate}
                </span>
              </div>

              {/* Description */}
              <p
                className=" mt-5 max-w-3xl text-sm leading-7 text-base-content/70 sm:text-base
                "
              >
                {cohort.description}
              </p>

              {/* Skills */}
              <div
                className=" mt-6 flex flex-wrap justify-center gap-2 sm:justify-start
                "
              >
                {cohort.skills.map((skill) => (
                  <span
                    key={skill}
                    className="badge badge-outline badge-primary transition-all duration-300 hover:scale-105   "
                  >
                    {" "}
                    {skill}{" "}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-72">
          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-base-300 bg-base-100/60 p-4 sm:grid-cols-4xl:grid-cols-1 xl:p-5">
            {/* Graduates */}
            <div className="flex flex-col items-center justify-center rounded-xl p-4 transition-all duration-300 hover:bg-base-200 hover:scale-105">
              <Users className="mb-2 h-6 w-6 text-primary" />

              <h3 className="text-2xl font-bold lg:text-3xl">
                {cohort.graduates}
              </h3>

              <p className="mt-1 text-center text-xs text-base-content/60 sm:text-sm">
                Graduates
              </p>
            </div>

            {/* Projects */}
            <div className="flex flex-col items-center justify-center rounded-xl p-4 transition-all duration-300 hover:bg-base-200 hover:scale-105">
              <Folder className="mb-2 h-6 w-6 text-primary" />

              <h3 className="text-2xl font-bold lg:text-3xl">
                {cohort.projects}
              </h3>

              <p className="mt-1 text-center text-xs text-base-content/60 sm:text-sm">
                Projects
              </p>
            </div>

            {/* Months */}
            <div className="flex flex-col items-center justify-center rounded-xl p-4 transition-all duration-300 hover:bg-base-200 hover:scale-105">
              <CalendarDays className="mb-2 h-6 w-6 text-primary" />

              <h3 className="text-2xl font-bold lg:text-3xl">
                {cohort.months}
              </h3>

              <p className="mt-1 text-center text-xs text-base-content/60 sm:text-sm">
                Months
              </p>
            </div>

            {/* Button */}
            <div className=" col-span-2 flex items-center justify-center sm:col-span-4 xl:col-span-1">
              <button className=" btn btn-primary group/btn w-full rounded-xl transition-all duration-300 hover:scale-[1.03] active:scale-95">
                <span>{cohort.button}</span>

                <ArrowRight
                  size={18}
                  className="   transition-transform duration-300 group-hover/btn:translate-x-1 "
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
