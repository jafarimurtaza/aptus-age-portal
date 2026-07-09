import React from "react";

export default function CohortProgressSection() {
  const cohorts = [
    {
      name: "Cohort 1",
      year: "2022",
      graduates: "4 graduates",
      progress: "40%",
    },
    {
      name: "Cohort 2",
      year: "2023",
      graduates: "4 graduates",
      progress: "50%",
    },
    {
      name: "Cohort 3",
      year: "2024",
      graduates: "6 graduates",
      progress: "70%",
    },
    {
      name: "Cohort 4",
      year: "2025",
      graduates: "8 graduates",
      progress: "85%",
    },
    {
      name: "Cohort 5",
      year: "2026",
      graduates: "10 graduates",
      progress: "100%",
    },
    {
      name: "Cohort 6",
      year: "2026",
      graduates: "12 graduates",
      progress: "100%",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-white via-green-50 to-green-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <span className="inline-flex px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold uppercase tracking-wide">
              Cohort Progress
          </span>
         <p className="mt-4 text-lg text-gray-600">
            Graduate count by cohort
          </p>
          </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {cohorts.map((cohort, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                border
                border-green-100
                p-6
                shadow-md
                hover:shadow-xl
                transition-all
              "
            >

              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-900">
                  {cohort.name} ({cohort.year})
                </h3>

                <span className="text-green-600 font-semibold">
                  {cohort.graduates}
                </span>
              </div>
              <div className="h-3 bg-green-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-600 rounded-full"
                  style={{ width: cohort.progress }}
                ></div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}