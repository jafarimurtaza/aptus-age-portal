"use client";

import {
  yearFilters,
  categoryFilters,
} from "../../data/filter";

export default function FilterButtons({
  selectedYear,
  setSelectedYear,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="space-y-6">
      {/* Year Filters */}
      <div className="flex flex-wrap gap-3">
        {yearFilters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setSelectedYear(filter.value)}
            className={`
              h-12 rounded-xl border px-6 text-sm font-medium transition-all duration-300
              ${
                selectedYear === filter.value
                  ? "border-primary bg-primary text-primary-content shadow-lg shadow-primary/20"
                  : "border-base-300 bg-base-200 text-base-content hover:border-primary/40 hover:bg-base-300"
              }
            `}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3">
        {categoryFilters.map((filter) => {
          const Icon = filter.icon;

          return (
            <button
              key={filter.id}
              onClick={() => setSelectedCategory(filter.value)}
              className={`
                flex h-12 items-center gap-2 rounded-xl border px-5 text-sm font-medium transition-all duration-300
                ${
                  selectedCategory === filter.value
                    ? "border-primary bg-primary text-primary-content shadow-lg shadow-primary/20"
                    : "border-base-300 bg-base-200 text-base-content hover:border-primary/40 hover:bg-base-300"
                }
              `}
            >
              <Icon size={18} strokeWidth={2} />
              <span>{filter.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}