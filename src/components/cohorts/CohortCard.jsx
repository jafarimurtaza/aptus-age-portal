import {
  CalendarDays,
  Folder,
  Users,
  ArrowRight,
} from "lucide-react";

export default function CohortCard({ cohort }) {
  const Icon = cohort.icon;

  return (
    <div className="rounded-2xl border border-base-300 bg-base-200 p-5 sm:p-6 transition-all duration-300 hover:border-primary/30">
      <div className="grid items-center gap-8 xl:grid-cols-[170px_1fr_140px_140px_140px_220px]">

        {/* Left Icon */}
        <div className="flex justify-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-base-300 sm:h-36 sm:w-36">
            <Icon className="h-12 w-12 text-primary sm:h-16 sm:w-16" />
          </div>
        </div>

        {/* Content */}
        <div>

          {/* Status */}
          <span
            className={`badge badge-sm uppercase ${
              cohort.status === "completed"
                ? "badge-success"
                : "badge-primary"
            }`}
          >
            {cohort.status}
          </span>

          {/* Title */}
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
            {cohort.title}
          </h2>

          {/* Date */}
          <div className="mt-2 flex items-center gap-2 text-base-content/70">
            <CalendarDays size={16} />

            <span>
              {cohort.startDate} - {cohort.endDate}
            </span>
          </div>

          {/* Description */}
          <p className="mt-3 max-w-xl break-words text-base-content/70">
            {cohort.description}
          </p>

          {/* Skills */}
          <div className="mt-5 flex flex-wrap gap-2">
            {cohort.skills.map((skill) => (
              <div
                key={skill}
                className="badge badge-outline"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Graduates */}
        <div className="text-center">
          <Users className="mx-auto mb-3 text-primary" />

          <h3 className="text-3xl font-bold sm:text-4xl">
            {cohort.graduates}
          </h3>

          <p className="text-base-content/60">
            Graduates
          </p>
        </div>

        {/* Projects */}
        <div className="text-center">
          <Folder className="mx-auto mb-3 text-primary" />

          <h3 className="text-3xl font-bold sm:text-4xl">
            {cohort.projects}
          </h3>

          <p className="text-base-content/60">
            Projects
          </p>
        </div>

        {/* Months */}
        <div className="text-center">
          <CalendarDays className="mx-auto mb-3 text-primary" />

          <h3 className="text-3xl font-bold sm:text-4xl">
            {cohort.months}
          </h3>

          <p className="text-base-content/60">
            Months
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center xl:justify-end">
          <button className="btn btn-outline btn-primary w-full rounded-xl sm:w-auto">
            {cohort.button}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}