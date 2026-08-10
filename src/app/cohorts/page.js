"use client";

import { useState } from "react";

import Hero from "@/components/cohorts/GraduateHeroSection";
import FilterButtons from "@/components/cohorts/FilterButtons";
import CohortCards from "@/components/cohorts/GreaduteCards";

export default function CohortsMain() {
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <main className="min-h-screen bg-base-100 text-base-content">
      <Hero />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 pb-16 sm:pb-20 lg:pb-24">
        <div className="border-b border-navy/10 pb-8 pt-12 sm:pt-16 lg:pt-20">
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