import Image from "next/image";
import { CalendarDays, ArrowRight } from "lucide-react";

const students = [
  { name: "Nadia", image: "https://i.pravatar.cc/100?img=32" },
  { name: "Roya", image: "https://i.pravatar.cc/100?img=47" },
  { name: "Parisa", image: "https://i.pravatar.cc/100?img=25" },
];

export default function CohortCard({ cohort }) {
  const badgeClass =
    cohort.graduates === "completed"
      ? "cohort-card-badge-completed"
      : "cohort-card-badge-active";

  return (
    <article className="group cohort-card flex h-full flex-col overflow-hidden transform transition duration-300 ease-out hover:translate-y-[-0.075rem] hover:shadow-[0_34px_82px_rgba(11,15,25,0.14)]">
      <header className="cohort-card-header p-5 sm:p-6 lg:p-8 xl:p-10">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h2 className="text-2xl font-semibold text-dark sm:text-3xl lg:text-4xl">
            </h2>

            <div className="mt-3 flex flex-wrap items-center gap-2 text-dark/70">
              <CalendarDays size={18} className="text-NAVY" />

              <span className="text-sm sm:text-base">
                {cohort.startDate} — {cohort.endDate}
              </span>
            </div>
          </div>

          <span className={`badge badge-md rounded-none whitespace-nowrap sm:badge-lg ${badgeClass}`}>
            {cohort.graduates} Graduates
          </span>
        </div>
      </header>

      <section className="flex flex-1 flex-col p-4 sm:p-5 lg:p-7 cohort-card-body">
        <p className="text-sm leading-6 text-dark/70 sm:text-base sm:leading-7">
          {cohort.description}
        </p>

        <div className="mt-5 cohort-card-graduates p-4 sm:mt-7 sm:p-5">
          <div className="student-row flex flex-wrap items-center gap-2 sm:gap-3">
            {students.map((student) => (
              <div
                key={student.name}
                className="group flex min-w-24 max-w-37.5 cursor-pointer items-center gap-2 rounded-full border border-sand bg-white px-3 py-1.5 text-sm sm:text-base font-medium text-dark shadow-sm transition duration-200 ease-out hover:-translate-y-px hover:border-NAVY hover:bg-sand/80 hover:shadow"
              >
                <Image
                  src={student.image}
                  alt={student.name}
                  width={26}
                  height={26}
                  unoptimized
                  className="h-7 w-7 shrink-0 rounded-full object-cover ring-2 ring-cream"
                />

                <span className="truncate">{student.name}</span>
              </div>
            ))}
          </div>

          <footer className="mt-6">
            <button
              type="button"
              aria-label="View Graduates"
              className="group cohort-card-button flex w-full cursor-pointer items-center justify-between border-t border-b border-sand bg-white/90 px-4 py-3 text-left transition duration-300 ease-out hover:translate-y-[-0.05rem] hover:border-b-NAVY hover:bg-sand hover:text-dark shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:ring-offset-2 sm:py-4"
            >
              <span className="text-sm font-semibold text-dark transition-colors duration-300 group-hover:text-NAVY sm:text-base">
                View Graduates
              </span>

              <div className="flex items-center gap-2 text-dark/60 transition-colors duration-300 group-hover:text-NAVY">
                <span className="h-1.5 w-1.5 rounded-full bg-dark/40 transition-colors duration-300 group-hover:bg-NAVY"></span>
                <ArrowRight
                  size={16}
                  className="text-dark/60 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-NAVY"
                />
              </div>
            </button>
          </footer>
        </div>
      </section>
    </article>
  );
}
