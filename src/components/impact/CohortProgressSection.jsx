"use client";
export default function CohortProgressSection() {
  const cohorts = [
    {
      name: "Cohort 1",
      year: "2022",
      graduates: "4 graduates",
    },
    {
      name: "Cohort 2",
      year: "2023",
      graduates: "4 graduates",
    },
    {
      name: "Cohort 3",
      year: "2024",
      graduates: "6 graduates",
    },
    {
      name: "Cohort 4",
      year: "2025",
      graduates: "8 graduates",
    },
    {
      name: "Cohort 5",
      year: "2026",
      graduates: "10 graduates",
    },
  ];

  return (
    <section className="bg-green-200 py-16 px-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Cohort Growth
            </h2>
            <p className="mt-2 text-gray-600">
            Growing community of Afghan developers
            </p>
            </div>
            <div className="relative flex flex-col md:flex-row justify-between gap-10">

           {/* Connecting line */}
            <div className="hidden md:block absolute top-7 left-10 right-10 h-[2px] bg-green-400">
            </div>
              {cohorts.map((cohort) => (
              <div key={cohort.name} className="relative flex flex-col items-center group">

              {/* Year circle */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-green-700 text-white flex items-center justify-center
                font-bold text-sm shadow-md z-10 group-hover:scale-110 transition duration-30">
                {cohort.year}
                </div>
                <h3 className="mt-4 text-sm font-bold text-gray-900">
                {cohort.name}
                </h3>
                <p className="mt-1 text-sm text-black">
                {cohort.graduates}
                </p>
                </div>
              ))}
                </div>
                </div>
              </section>
            );
        }