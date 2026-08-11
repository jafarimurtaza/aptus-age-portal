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
        {yearFilters.map((filter) => {
          const isActive = selectedYear === filter.value;
          
          return (
            <button
              key={filter.id}
              onClick={() => setSelectedYear(filter.value)}
              aria-pressed={isActive}
              className={`
                cursor-pointer h-12 rounded-none px-6 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2
                ${
                  isActive
                    ? "border border-navy bg-navy text-cream shadow-[0_12px_32px_rgba(11,15,25,0.15)]"
                    : "border border-sand/80 bg-white text-navy/70 hover:border-gold/60 hover:bg-sand/40 hover:text-navy hover:shadow-sm"
                }
              `}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3">
        {categoryFilters.map((filter) => {
          const Icon = filter.icon;
          const isActive = selectedCategory === filter.value;

          return (
            <button
              key={filter.id}
              onClick={() => setSelectedCategory(filter.value)}
              aria-pressed={isActive}
              className={`
                cursor-pointer flex h-12 items-center gap-2 rounded-none px-5 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2
                ${
                  isActive
                    ? "border border-navy bg-navy text-cream shadow-[0_12px_32px_rgba(11,15,25,0.15)]"
                    : "border border-sand/80 bg-white text-navy/70 hover:border-gold/60 hover:bg-sand/40 hover:text-navy hover:shadow-sm"
                }
              `}
            >
              <Icon 
                size={18} 
                strokeWidth={2} 
                className={isActive ? "text-gold" : "text-navy/50 transition-colors duration-300 group-hover:text-gold"} 
              />
              <span>{filter.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}