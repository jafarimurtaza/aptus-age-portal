"use client";

import useCohorts from "./useCohorts";
import GraduateCard from "./GraduateCard";

export default function GraduateCards({
  selectedYear,
  selectedCategory,
}) {
  const { cohorts, isLoading, error } = useCohorts();

  if (isLoading) {
    return (
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" aria-busy="true">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-80 animate-pulse bg-base-200/50" />
        ))}
      </section>
    );
  }

  const filteredCohorts = cohorts.filter((cohort) => {
    const yearMatch =
      selectedYear === "all" ||
      (selectedYear === "ongoing" ? cohort.status === "ongoing" : cohort.year === selectedYear);

    const categoryMatch =
      selectedCategory === "all" ||
      cohort.category === selectedCategory;

    return yearMatch && categoryMatch;
  });

  // Empty State
  if (!filteredCohorts.length) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-xl border border-base-300/30 bg-base-100 p-6 text-center shadow-sm sm:p-10">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center bg-primary/10">
            <span className="text-2xl" role="img" aria-label="Search">🔍</span>
          </div>
          <h3 className="text-xl font-bold tracking-tight text-base-content sm:text-2xl">
            No Cohorts Found
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-base-content/60">
            We couldn&apos;t find any cohorts matching your selected filters. Try adjusting your search criteria.
          </p>
        </div>
      </section>
    );
  }

  // Grid State
  return (
    <>
      {error && (
        <p role="alert" className="mb-4 text-center text-sm text-error">
          Live data unavailable — showing saved data
        </p>
      )}
      <p className="sr-only" aria-live="polite">
        {filteredCohorts.length} {filteredCohorts.length === 1 ? "cohort" : "cohorts"} shown
      </p>
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" aria-label="Cohorts">
      {filteredCohorts.map((cohort) => (
        <GraduateCard
          key={cohort.id}
          cohort={cohort}
        />
      ))}
      </section>
    </>
  );
}