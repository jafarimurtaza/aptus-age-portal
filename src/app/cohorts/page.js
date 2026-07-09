"use client";

import { useState } from "react";

import Hero from "@/components/cohorts/Hero";
import FilterButtons from "@/components/cohorts/FilterButtons";
import CohortCards from "@/components/cohorts/CohortCards";

export default function CohortsMain() {
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <main className="min-h-screen">
      <Hero />

      <div className="container mx-auto px-6 lg:px-10">
        <FilterButtons
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div className="mt-8">
          <CohortCards
            selectedYear={selectedYear}
            selectedCategory={selectedCategory}
          />
        </div>
      </div>
    </main>
  );
}