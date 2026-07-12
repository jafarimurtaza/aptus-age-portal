import React from "react";
import StatsCardSection from "./StatsCardSection";

export default function ImpactHeroSection() {
  return (
    <section className="bg-gradient-to-r from-white via-green-50 to-green-100 py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-flex px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold uppercase tracking-wide">
        Impact
        </span>
        <h1 className="mt-6 text-5xl md:text-7xl font-extrabold text-gray-900">
          Measuring What Matters
        </h1>
        <p className="mt-8 text-lg md:text-xl text-gray-600 leading-8 max-w-3xl mx-auto">
          Afghan Geeks is more than an education programme—it is a statement
          about who gets to build the future.
        </p>
      </div>
    </section>
  );
}