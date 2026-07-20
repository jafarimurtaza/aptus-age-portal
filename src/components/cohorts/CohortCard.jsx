import Image from "next/image";
import { CalendarDays, ArrowRight } from "lucide-react";

export default function CohortCard({ cohort }) {
  const students = [
    {
      name: "Nadia",
      image: "https://i.pravatar.cc/100?img=32",
    },
    {
      name: "Roya",
      image: "https://i.pravatar.cc/100?img=47",
    },
    {
      name: "Parisa",
      image: "https://i.pravatar.cc/100?img=25",
    },
  ];

  return (
    <article className="group cohort-card flex h-full transform-gpu flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2">
      {/* Header */}
      <div className="cohort-card-header p-5 sm:p-6 lg:p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h2 className="text-2xl font-bold text-dark transition-colors duration-300 group-hover:text-NAVY sm:text-3xl">
              {cohort.title}
            </h2>

            <div className="mt-3 flex flex-wrap items-center gap-2 text-dark/70">
              <CalendarDays size={18} className="text-NAVY" />

              <span className="text-sm sm:text-base">
                {cohort.startDate} — {cohort.endDate}
              </span>
            </div>
          </div>

          <span
            className={`badge badge-md rounded-none whitespace-nowrap sm:badge-lg ${
              cohort.graduates === "completed"
                ? "cohort-card-badge-completed"
                : "cohort-card-badge-active"
            }`}
          >
            {cohort.graduates} Graduates
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-8 cohort-card-body">
        <div className="flex-1">
          <p className="leading-7 text-dark/70 sm:leading-8">
            {cohort.description}
          </p>

          {/* Graduates */}
          <div className="mt-6 cohort-card-graduates p-4 sm:mt-8 sm:p-5">
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-dark/50">
              Recent Graduates
            </h3>

            <div className="student-row-container">
              <div className="student-row">
                {students.map((student) => (
                  <div
                    key={student.name}
                    className="group inline-flex min-w-[160px] cursor-pointer select-none items-center gap-2 border border-sand px-3 py-2 transition-all duration-300 hover:-translate-y-1 hover:bg-sand hover:shadow-sm active:scale-95"
                  >
                    <Image
                      src={student.image}
                      alt={student.name}
                      width={36}
                      height={36}
                      unoptimized
                      className="h-9 w-9 shrink-0 rounded-none object-cover ring-2 ring-cream transition-transform duration-300 group-hover:scale-110"
                    />

                    <span className="truncate whitespace-nowrap text-xs font-medium text-dark transition-colors duration-300 sm:text-sm">
                      {student.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <button
              type="button"
              aria-label="View Graduates"
              className="group cohort-card-button mt-6 flex w-full cursor-pointer transform-gpu items-center justify-between border-t border-b border-sand py-3 transition-all duration-300 hover:border-b-NAVY hover:bg-sand active:scale-[0.99] sm:py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:ring-offset-2"
            >
              <span className="text-sm font-semibold text-dark transition-all duration-300 group-hover:translate-x-1 group-hover:text-NAVY sm:text-base">
                View Graduates
              </span>

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-none bg-dark/40 transition-all duration-300 group-hover:scale-150 group-hover:bg-NAVY"></span>

                <ArrowRight
                  size={16}
                  className="text-dark/60 transition-all duration-300 group-hover:translate-x-1.5 group-hover:scale-110 group-hover:text-NAVY"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
