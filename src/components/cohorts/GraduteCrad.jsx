import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Users } from "lucide-react";

const students = [
  { name: "Nadia", image: "https://i.pravatar.cc/100?img=32" },
  { name: "Roya", image: "https://i.pravatar.cc/100?img=47" },
  { name: "Parisa", image: "https://i.pravatar.cc/100?img=25" },
];

export default function CohortCard({ cohort }) {
  const isCompleted = cohort.status === "completed";

  return (
    <article className="cohort-card group flex h-full flex-col overflow-hidden shadow-sm transition-all duration-200">
      <header className="cohort-card-header border-b border-base-300/30 p-5 sm:p-6">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:justify-between sm:gap-4">
          <div className="min-w-0">
            <h2 className="text-xl font-bold tracking-tight text-base-content sm:text-2xl">
              {cohort.title}
            </h2>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-base-content/70">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center bg-primary/10">
                <CalendarDays size={13} className="text-primary" aria-hidden="true" />
              </div>
              <span className="text-sm font-medium">
                {cohort.startDate} — {cohort.endDate}
              </span>
            </div>
          </div>
          <span className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap px-3 py-1.5 text-xs font-semibold ${isCompleted ? "bg-primary/15 text-primary ring-1 ring-primary/30" : "bg-neutral/10 text-base-content ring-1 ring-neutral/20"}`}>
            <Users size={12} aria-hidden="true" />
            {cohort.graduates}
          </span>
        </div>
      </header>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-sm leading-relaxed text-base-content/70">{cohort.description}</p>
        <div className="cohort-card-graduates mt-6 border border-base-300/30 p-4">
          <div className="grid grid-cols-1 gap-2 min-[420px]:grid-cols-3">
            {students.map((student) => (
              <div key={student.name} className="flex min-w-0 items-center gap-2 border border-base-300/30 bg-base-100 px-3 py-2 text-sm font-medium text-base-content shadow-sm">
                <Image src={student.image} alt={student.name} width={24} height={24} unoptimized className="h-6 w-6 shrink-0 object-cover ring-2 ring-primary/15" />
                <span className="whitespace-nowrap">{student.name}</span>
              </div>
            ))}
          </div>
          <Link href="/graduates" aria-label="View Graduates" className="group/btn mt-4 flex min-h-12 w-full items-center justify-between bg-neutral px-4 py-3.5 transition-colors duration-200 hover:bg-neutral/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
            <span className="flex items-center gap-2 text-sm font-semibold text-base-100">
              <Users size={14} className="text-base-100/60" />
              View Graduates
            </span>
            <ArrowRight size={16} className="text-base-100/60 transition-transform duration-200 group-hover/btn:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}