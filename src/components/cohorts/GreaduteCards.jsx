
import { cohorts } from "./data/cohorts";
import CohortCard from "./GraduteCrad";

export default function CohortCards({
  selectedYear,
  selectedCategory,
}) {
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
      <p className="sr-only" aria-live="polite">
        {filteredCohorts.length} {filteredCohorts.length === 1 ? "cohort" : "cohorts"} shown
      </p>
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" aria-label="Cohorts">
      {filteredCohorts.map((cohort) => (
        <CohortCard
          key={cohort.id}
          cohort={cohort}
        />
      ))}
      </section>
    </>
  );
}