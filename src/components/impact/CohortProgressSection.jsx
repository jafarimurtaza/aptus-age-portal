"use client";

import CohortCard from "./CohortCard";
export default function CohortProgressSection() {
  const cohorts = [
    { name: "Cohort 1", year: "2022", graduates: "4 Graduates", progress: 40 },
    { name: "Cohort 2", year: "2023", graduates: "4 Graduates", progress: 55 },
    { name: "Cohort 3", year: "2024", graduates: "6 Graduates", progress: 70 },
    { name: "Cohort 4", year: "2025", graduates: "8 Graduates", progress: 82 },
    { name: "Cohort 5", year: "2026", graduates: "10 Graduates", progress: 95 },
    { name: "Cohort 6", year: "2026", graduates: "12 Graduates", progress: 100 },
  ];

  return (
    <section className="bg-base-100 px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-base-300 font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight">
            Cohort <span className="text-primary">Progress</span>
          </h2>
          <p className="mt-4 text-base-content text-lg sm:text-xl font-medium leading-8">
            Graduate count by cohort
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {cohorts.map((cohort) => (
            <CohortCard
              key={cohort.name}
              name={cohort.name}
              year={cohort.year}
              graduates={cohort.graduates}
              progress={cohort.progress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}