import { CalendarDays, Folder, Users } from "lucide-react";

export default function CohortCard({ cohort }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-base-300 bg-base-100  transition-all duration-500 hover:-translate-y-2">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-base-100 to-success/10 p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h2 className="text-3xl font-bold transition-colors duration-300 group-hover:text-primary">
              {cohort.title}
            </h2>

            <div className="mt-3 flex items-center gap-2 text-base-content/60">
              <CalendarDays size={18} />
              <span>
                {cohort.startDate} — {cohort.endDate}
              </span>
            </div>
          </div>

          <span
            className={`badge badge-lg rounded-full whitespace-nowrap ${
              cohort.graduates === "completed"
                ? "badge-success"
                : "badge-primary"
            }`}
          >
            {cohort.graduates} Graduates
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-8">
        {/* Top Content */}
        <div className="flex-1">
          <p className="leading-8 text-base-content/70">
            {cohort.description}
          </p>
        </div>

        {/* Stats - Always at Bottom */}
        <div className="mt-10 grid grid-cols-3 gap-4">
          <div className="border border-base-300 bg-base-100 p-4 text-center transition-all duration-300 hover:border-primary/20 hover:shadow-md">
            <Users size={18} className="mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold">{cohort.graduates}</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-base-content/60">
              Graduates
            </p>
          </div>

          <div className="border border-base-300 bg-base-100 p-4 text-center transition-all duration-300 hover:border-primary/20 hover:shadow-md">
            <Folder size={18} className="mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold">{cohort.projects}</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-base-content/60">
              Projects
            </p>
          </div>

          <div className="border border-base-300 bg-base-100 p-4 text-center transition-all duration-300 hover:border-primary/20 hover:shadow-md">
            <CalendarDays size={18} className="mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold">{cohort.months}</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-base-content/60">
              Months
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}