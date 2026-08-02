"use client";

import {
  yearFilters,
  categoryFilters,
} from "./data/filter";

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
              cursor-pointer h-12 rounded-none px-6 text-sm font-medium transition-all duration-300
              ${
                selectedYear === filter.value
                  ? "border-NAVY bg-NAVY text-cream shadow-[0_16px_40px_rgba(27,58,107,0.12)]"
                  : "border-sand bg-cream text-dark hover:border-gold/80 hover:bg-sand"
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
                cursor-pointer flex h-12 items-center gap-2 rounded-none px-5 text-sm font-medium transition-all duration-300
                ${
                  selectedCategory === filter.value
                    ? "border-NAVY bg-NAVY text-cream shadow-[0_16px_40px_rgba(27,58,107,0.12)]"
                    : "border-sand bg-cream text-dark hover:border-gold/80 hover:bg-sand"
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