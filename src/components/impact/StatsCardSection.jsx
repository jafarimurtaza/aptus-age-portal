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
      <section className=" py-10 px-50">
      <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {stats.map((stat) => (<div key={stat.label}
          className="bg-sand/90 text-dark border border-white/20 rounded-2xl p-6 text-center shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
          <h2 className="text-3xl font-bold text-gold">
            {stat.number}
            </h2>
            <p className="mt-1 text-sm text-dark-600">
              {stat.label}
            </p>
            </div>
          ))}
          </div>
          </div>
        </section>
      );
    }