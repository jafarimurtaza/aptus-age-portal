import Hero from "../../components/cohorts/Hero";
import FilterButtons from "@/components/cohorts/FilterButtons";
export default function CohortsMain() {
  return (
    <main className="min-h-screen">
      <Hero />

      <div className="container mx-auto px-6 lg:px-10">
        <FilterButtons />
      </div>
    </main>
  );
}