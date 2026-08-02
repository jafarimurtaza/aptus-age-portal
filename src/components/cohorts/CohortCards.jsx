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
        <div className="mx-auto max-w-xl rounded-none border border-base-300 bg-base-200 p-10 text-center">
          <h3 className="text-3xl font-bold">
            No Cohorts Found
          </h3>

          <p className="mt-3 text-base-content/60">
            We couldn&apos;t find any cohorts matching your selected filters.
          </p>

        </div>
      </section>
    );
  }

  return (
    <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">

      {filteredCohorts.map((cohort) => (
        <CohortCard
          key={cohort.id}
          cohort={cohort}
        />
      ))}

    </section>
  );
}