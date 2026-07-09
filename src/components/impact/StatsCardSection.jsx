import React from "react";

export default function StatsCardSection() {
  const stats = [
    {
      number: "100+",
      label: "Graduates",
    },
    {
      number: "20+",
      label: "Projects Shipped",
    },
    {
      number: "3",
      label: "Cohorts",
    },
    {
      number: "14",
      label: "Skills Taught",
    },
    {
      number: "6",
      label: "Currently Available",
    },
    {
      number: "4",
      label: "Employed",
    },
  ];

  return (
  <section className="-mt-16 px-6 pb-32 relative z-10 bg-gradient-to-r from-white via-green-50 to-green-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                border
                border-green-100
                shadow-md
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
                p-8
                text-center
              "
            >
              <h2 className="text-5xl font-extrabold text-green-600">
                {stat.number}
              </h2>

              <p className="mt-3 text-gray-600 font-medium text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}