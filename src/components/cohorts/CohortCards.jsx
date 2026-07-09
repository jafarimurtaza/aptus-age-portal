import { cohorts } from "@/data/cohorts";
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

  if (filteredCohorts.length === 0) {
    return (
      <section className="py-12 text-center">
        <h3 className="text-2xl font-semibold">
          No cohorts found
        </h3>

        <p className="mt-2 text-base-content/60">
          Try selecting a different filter.
        </p>
      </section>
    );
  }

  return (
    <section className="space-y-5 py-8">
      {filteredCohorts.map((cohort) => (
        <CohortCard
          key={cohort.id}
          cohort={cohort}
        />
      ))}
    </section>
  );
}