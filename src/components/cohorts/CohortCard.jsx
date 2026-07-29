// CohortCard.tsx
import Image from "next/image";
import { CalendarDays, ArrowRight, Users } from "lucide-react";

const students = [
  { name: "Nadia", image: "https://i.pravatar.cc/100?img=32" },
  { name: "Roya", image: "https://i.pravatar.cc/100?img=47" },
  { name: "Parisa", image: "https://i.pravatar.cc/100?img=25" },
];

export default function CohortCard({ cohort }) {
  const isCompleted = cohort.graduates === "completed";

  return (
    <article className="cohort-card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_64px_rgba(11,15,25,0.14)]">
      {/* Header */}
      <header className="cohort-card-header p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h2 className="text-xl font-bold text-navy sm:text-2xl">
              {cohort.title}
            </h2>
            <div className="mt-2.5 flex items-center gap-2 text-dark/50">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gold/10">
                <CalendarDays size={13} className="text-gold" aria-hidden="true" />
              </div>
              <span className="text-sm">
                {cohort.startDate} — {cohort.endDate}
              </span>
            </div>
          </div>

          <span
            className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 group-hover:scale-105 ${
              isCompleted
                ? "bg-gold/15 text-gold ring-1 ring-gold/20"
                : "bg-navy/10 text-navy ring-1 ring-navy/15"
            }`}
          >
            <Users size={12} aria-hidden="true" />
            {cohort.graduates}
          </span>
        </div>
      </header>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6 pt-0 sm:pt-0">
        <p className="text-sm leading-relaxed text-dark/55">
          {cohort.description}
        </p>

        {/* Students */}
        <div className="cohort-card-graduates mt-5 p-4">
          <div className="scrollbar-hide flex items-center gap-2.5 overflow-x-auto pb-1">
            {students.map((student) => (
              <div
                key={student.name}
                className="group/student flex shrink-0 cursor-pointer items-center gap-2 rounded-full border border-sand bg-white px-3 py-1.5 text-sm font-medium text-dark shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-md"
              >
                <Image
                  src={student.image}
                  alt={student.name}
                  width={24}
                  height={24}
                  unoptimized
                  className="h-6 w-6 shrink-0 rounded-full object-cover ring-2 ring-gold/15 transition-all duration-200 group-hover/student:ring-gold/40"
                />
                <span className="transition-colors duration-200 group-hover/student:text-gold">
                  {student.name}
                </span>
              </div>
            ))}
          </div>

          {/* Button */}
          <button
            type="button"
            aria-label="View Graduates"
            className="group/btn mt-4 flex w-full cursor-pointer items-center justify-between rounded-xl bg-navy px-4 py-3 transition-all duration-200 hover:bg-navy/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
          >
            <span className="flex items-center gap-2 text-sm font-semibold text-cream transition-colors duration-200 group-hover/btn:text-gold-light">
              <Users size={14} className="text-cream/60 transition-colors duration-200 group-hover/btn:text-gold" />
              View Graduates
            </span>
            <ArrowRight
              size={14}
              className="text-cream/60 transition-all duration-200 group-hover/btn:translate-x-1 group-hover/btn:text-gold"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </article>
  );
}