"use client";

import { useState } from "react";

import Hero from "@/components/cohorts/Hero";
import FilterButtons from "@/components/cohorts/FilterButtons";
import CohortCards from "@/components/cohorts/CohortCards";

export default function CohortsMain() {
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <main className="min-h-screen bg-cream">
      <Hero />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 pb-16 sm:pb-20 lg:pb-24">
        <div className="pt-12 sm:pt-16 lg:pt-20">
          <FilterButtons
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        <div className="mt-8 sm:mt-10">
          <CohortCards
            selectedYear={selectedYear}
            selectedCategory={selectedCategory}
          />
        </div>
      </section>
    </main>
  );
}