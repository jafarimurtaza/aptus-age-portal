// CohortCards.tsx
import { cohorts } from "./data/cohorts";
import CohortCard from "./CohortCard";

export default function CohortCards({
  selectedYear,
  selectedCategory,
}) {
  const filteredCohorts = cohorts.filter((cohort) => {
    const yearMatch =
      selectedYear === "all" ||
      cohort.year === selectedYear;

    const categoryMatch =
      selectedCategory === "all" ||
      cohort.category === selectedCategory;

    return yearMatch && categoryMatch;
  });

  if (!filteredCohorts.length) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-xl rounded-2xl border border-gold/15 bg-sand/50 p-10 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
            <span className="text-2xl">🔍</span>
          </div>
          <h3 className="text-2xl font-bold text-navy">
            No Cohorts Found
          </h3>
          <p className="mt-3 text-dark/60">
            We couldn&apos;t find any cohorts matching your selected filters.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredCohorts.map((cohort) => (
        <CohortCard
          key={cohort.id}
          cohort={cohort}
        />
      ))}
    </section>
  );
}