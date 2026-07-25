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
    <section className=" hero py-8 md:py-12 lg:py-15">
      <div className="mx-auto px-5 sm:px-6 lg:px-8">
      <div className="text-center mb-12 md:mb-16">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-[#E8EDF5]">
          Impact
        </h1>
          <br />
          <p className="text-4xl font-bold text-center text-[#E8EDF5]">
          Measuring What  <span className="text-[#C8955A]">Matters</span>
          </p>
         {/* Description */}
        <p className="mt-8 max-w-4xl mx-auto text-center text-[#E8EDF5]">
          Afghan Geeks is more than an education programme —
          it is a statement about who gets to build the future.
        </p>

        {/* Cards */}
        <div className="mt-20 mb-10 max-w-2xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#234575] rounded-2xl p-6 text-center">
                <h2 className="text-3xl font-bold text-[#C8955A]">
                  {stat.number}
                </h2>

                <p className="mt-2 text-[#FAF7F2]">
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