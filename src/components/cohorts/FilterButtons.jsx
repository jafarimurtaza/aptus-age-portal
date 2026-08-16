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
    <div className="space-y-5 sm:space-y-6">
      {/* Year Filters */}
      <div className="flex flex-wrap gap-2 sm:gap-3" role="group" aria-label="Filter by year or status">
        {yearFilters.map((filter) => {
          const isActive = selectedYear === filter.value;
          
          return (
            <button
              key={filter.id}
              onClick={() => setSelectedYear(filter.value)}
              aria-pressed={isActive}
              className={`
                min-h-11 cursor-pointer rounded-none px-4 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:min-h-12 sm:px-6
                ${
                  isActive
                    ? "border border-neutral bg-neutral text-base-100 shadow-sm"
                    : "border border-base-300/30 bg-base-100 text-base-content/70 hover:border-primary/60 hover:bg-base-200 hover:text-base-content"
                }
              `}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 sm:gap-3" role="group" aria-label="Filter by category">
        {categoryFilters.map((filter) => {
          const Icon = filter.icon;
          const isActive = selectedCategory === filter.value;

          return (
            <button
              key={filter.id}
              onClick={() => setSelectedCategory(filter.value)}
              aria-pressed={isActive}
              className={`
                min-h-11 cursor-pointer flex items-center gap-2 rounded-none px-3.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:min-h-12 sm:px-5
                ${
                  isActive
                    ? "border border-neutral bg-neutral text-base-100 shadow-sm"
                    : "border border-base-300/30 bg-base-100 text-base-content/70 hover:border-primary/60 hover:bg-base-200 hover:text-base-content"
                }
              `}
            >
              <Icon 
                size={18} 
                strokeWidth={2} 
                aria-hidden="true"
                className={isActive ? "text-primary" : "text-base-content/50"}
              />
              <span>{filter.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}