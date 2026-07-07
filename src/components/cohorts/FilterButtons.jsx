"use client";

import { useState } from "react";
import {
  yearFilters,
  categoryFilters,
} from "../../data/filter";

export default function FilterButtons() {
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="space-y-6">
      {/* filter for yearr*/}
      <div className="flex flex-wrap gap-3">
        {yearFilters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setSelectedYear(filter.value)}
            className={`
              h-12 rounded-xl border px-6 text-sm font-medium transition-all duration-300
              ${
                selectedYear === filter.value
                  ? "bg-primary text-primary-content border-primary shadow-lg shadow-primary/20"
                  : "bg-base-200 border-base-300 text-base-content hover:bg-base-300 hover:border-primary/40"
              }
            `}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Filter for catagory part */}
      <div className="flex flex-wrap gap-3">
        {categoryFilters.map((filter) => {
          const Icon = filter.icon;

          return (
            <button
              key={filter.id}
              onClick={() => setSelectedCategory(filter.value)}
              className={`
                h-12 rounded-xl border px-5 flex items-center gap-2 text-sm font-medium transition-all duration-300
                ${
                  selectedCategory === filter.value
                    ? "bg-primary text-primary-content border-primary shadow-lg shadow-primary/20"
                    : "bg-base-200 border-base-300 text-base-content hover:bg-base-300 hover:border-primary/40"
                }
              `}
            >
              <Icon size={18} strokeWidth={2} />
              <span>{filter.label}</span>
            </button>
          );
        })}
      </div>

      {/* its just for test */}
      <div className="text-sm text-base-content/60">
        <p>
          <strong>Year:</strong> {selectedYear}
        </p>

        <p>
          <strong>Category:</strong> {selectedCategory}
        </p>
      </div>
    </div>
  );
}