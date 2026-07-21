"use client";

import CohortCard from "./CohortCard";
export default function CohortProgressSection() {

  const cohorts = [
    {
      name: "Cohort 1",
      year: "2022",
      graduates: "4 Graduates",
      progress: 40,
    },
    {
      name: "Cohort 2",
      year: "2023",
      graduates: "4 Graduates",
      progress: 55,
    },
    {
      name: "Cohort 3",
      year: "2024",
      graduates: "6 Graduates",
      progress: 70,
    },
    {
      name: "Cohort 4",
      year: "2025",
      graduates: "8 Graduates",
      progress: 82,
    },
    {
      name: "Cohort 5",
      year: "2026",
      graduates: "10 Graduates",
      progress: 95,
    },
    {
      name: "Cohort 6",
      year: "2026",
      graduates: "12 Graduates",
      progress: 100,
    },
  ];

  return (
    <section className="md:px-10 lg:px-30 ">
       {/* Heading */}
        <div className="text-center mb-14">
        <h2 className="text-3xl md:text-3xl font-bold text-cream px-40 pt-6">
          Cohort Progress
        </h2>
        <p className="mt-3 text-gold text-lg">
          graduate count by cohort
        </p>
        </div>

       {/* Cards */}
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {cohorts.map((cohort) => (
          <CohortCard key={cohort.name} name={cohort.name} year={cohort.year}
            graduates={cohort.graduates} progress={cohort.progress}/>
            ))}
          </div>
      </section>
  );
}