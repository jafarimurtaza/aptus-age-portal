"use client";

export default function StatsCardSection() {
  const stats = [
    { number: "100+", label: "Graduates" },
    { number: "20+", label: "Projects Shipped" },
    { number: "5", label: "Cohorts" },
    { number: "14", label: "Skills Taught" },
    { number: "6", label: "Currently Available" },
    { number: "4", label: "Employed" },
  ];

  return (
      <section className="bg-green-200 py-16 px-6 mb-0">
      <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {stats.map((stat) => (<div key={stat.label}
          className="bg-white rounded-xl border border-green-100 px-4 py-4 text-center shadow-sm cursor-pointer hover:shadow-md transition">
          <h2 className="text-3xl font-bold text-green-600">
            {stat.number}
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              {stat.label}
            </p>
            </div>
          ))}
          </div>
          </div>
        </section>
      );
    }