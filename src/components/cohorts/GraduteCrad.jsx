
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowRight, Users } from "lucide-react";

const students = [
  { name: "Nadia", image: "https://i.pravatar.cc/100?img=32" },
  { name: "Roya", image: "https://i.pravatar.cc/100?img=47" },
  { name: "Parisa", image: "https://i.pravatar.cc/100?img=25" },
];

export default function CohortCard({ cohort }) {
  const isCompleted = cohort.graduates === "completed";

  return (
    <article className="cohort-card group flex h-full flex-col overflow-hidden shadow-sm transition-all duration-300">
      
      {/* Header */}
      <header className="cohort-card-header border-b border-sand/60 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h2 className="text-xl font-bold tracking-tight text-navy sm:text-2xl">
              {cohort.title}
            </h2>
            <div className="mt-3 flex items-center gap-2 text-navy/70">
              <div className="flex h-6 w-6 items-center justify-center bg-gold/10">
                <CalendarDays size={13} className="text-gold" aria-hidden="true" />
              </div>
              <span className="text-sm font-medium">
                {cohort.startDate} — {cohort.endDate}
              </span>
            </div>
          </div>

          <span
            className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap px-3 py-1.5 text-xs font-semibold transition-all duration-200 group-hover:scale-105 ${
              isCompleted
                ? "bg-gold/15 text-gold ring-1 ring-gold/30"
                : "bg-navy/10 text-navy ring-1 ring-navy/20"
            }`}
          >
            <Users size={12} aria-hidden="true" />
            {cohort.graduates}
          </span>
        </div>
      </header>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-sm leading-relaxed text-dark/70">
          {cohort.description}
        </p>

        {/* Students & Action Section */}
        <div className="cohort-card-graduates mt-6 border border-sand/60 p-4">
          {/* Single line, no scroll bar, no wrapping */}
          <div className="flex flex-nowrap items-center gap-2.5 overflow-hidden">
            {students.map((student) => (
              <div
                key={student.name}
                role="button"
                tabIndex={0}
                className="group/student flex shrink-0 cursor-pointer items-center gap-2 border border-sand bg-white px-3 py-1.5 text-sm font-medium text-dark shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2"
              >
                <Image
                  src={student.image}
                  alt={student.name}
                  width={24}
                  height={24}
                  unoptimized
                  className="h-6 w-6 shrink-0 object-cover ring-2 ring-gold/15 transition-all duration-200 group-hover/student:ring-gold/40"
                />
                <span className="whitespace-nowrap transition-colors duration-200 group-hover/student:text-gold">
                  {student.name}
                </span>
              </div>
            ))}
          </div>

          {/* Button */}
          <Link
            href="/graduates"
            aria-label="View Graduates"
            className="group/btn mt-4 flex w-full cursor-pointer items-center justify-between bg-navy px-4 py-3.5 transition-all duration-200 hover:bg-navy/90 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2"
          >
            <span className="flex items-center gap-2 text-sm font-semibold text-cream transition-colors duration-200 group-hover/btn:text-gold-light">
              <Users size={14} className="text-cream/60 transition-colors duration-200 group-hover/btn:text-gold" />
              View Graduates
            </span>
            <ArrowRight
              size={16}
              className="text-cream/60 transition-all duration-200 group-hover/btn:translate-x-1 group-hover/btn:text-gold"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}