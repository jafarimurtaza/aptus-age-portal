"use client";
export default function ImpactHeroSection() {
  const stats = [
    { number: "100+", label: "Graduates" },
    { number: "20+", label: "Projects Shipped" },
    { number: "5", label: "Cohorts" },
    { number: "14", label: "Skills Taught" },
    { number: "6", label: "Currently Available" },
    { number: "4", label: "Employed" },
  ];

  return (
    <section className="hero px-6 md:px-8 lg:px-12 py-6 md:py-8 lg:py-12">
      <div className="mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl font-bold text-center text-base-100 pb-4">
            Impact
          </h1>
          <p className="text-4xl font-bold text-center text-base-100">
            Measuring What <span className="text-primary">Matters</span>
          </p>
          <p className="mt-8 max-w-4xl mx-auto text-center text-base-200">
            Afghan Geeks is more than an education programme —
            it is a statement about who gets to build the future.
          </p>
          <div className="mt-20 mb-10 max-w-2xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {stats.map((stat) => (
                <div key={stat.label} className="bg-base-300 rounded-2xl p-6 text-center">
                  <h2 className="text-3xl font-bold text-primary">
                    {stat.number}
                  </h2>
                  <p className="mt-2 text-base-200">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}