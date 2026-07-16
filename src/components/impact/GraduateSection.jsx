"use client";

export default function GraduateSection() {
  const rowOne = [
    {
      name: "Zainab Mohammadi",
      cohort: "Cohort 1 - 2022",
      quote: "Building this portal changed how I see myself as a developer.",
    },
    {
      name: "Nadia Ahmadi",
      cohort: "Cohort 1 - 2022",
      quote: "I learned how to create complete web applications.",
    },
    {
      name: "Farzana Rahimi",
      cohort: "Cohort 2 - 2023",
      quote: "I never imagined I could work on machine learning projects.",
    },
    {
      name: "Maryam Noor",
      cohort: "Cohort 2 - 2023",
      quote: "The program helped me become confident in technology.",
    },
    {
      name: "Laila Ahmad",
      cohort: "Cohort 3 - 2024",
      quote: "I discovered my passion for creating digital experiences.",
    },
  ];

  const rowTwo = [
    {
      name: "Shukria Rahimi",
      cohort: "Cohort 4 - 2025",
      quote: "Every line of code represents growth and confidence.",
    },
    {
      name: "Zari Gul",
      cohort: "Cohort 4 - 2025",
      quote: "Technology gave me the opportunity to build my future.",
    },
    {
      name: "Fatima Noor",
      cohort: "Cohort 5 - 2026",
      quote: "I learned how to transform designs into websites.",
    },
    {
      name: "Sahar Ahmad",
      cohort: "Cohort 5 - 2026",
      quote: "I gained confidence working with real projects.",
    },
    {
      name: "Roya Karim",
      cohort: "Cohort 6 - 2026",
      quote: "Coding became a skill that changed my career path.",
    },
  ];

  const animatedRowOne = [...rowOne, ...rowOne];
  const animatedRowTwo = [...rowTwo, ...rowTwo];

  return (
      <section className="bg-green-200 py-16 px-25">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Graduate Stories
        </h2>
        <p className="mt-3 text-lg text-gray-600">
          In their own words
        </p>
      </div>


      {/* First Row */}
      <div className="overflow-hidden mb-6 px-10">
      <div className="flex gap-6 animate-scroll-right">
          {animatedRowOne.map((graduate, index) => (
            <Card key={index} graduate={graduate} />
          ))}
        </div>
      </div>


      {/* Second Row */}
      <div className="overflow-hidden mb-6 px-10">
      <div className="flex gap-10 animate-scroll-left">
          {animatedRowTwo.map((graduate, index) => (
            <Card key={index} graduate={graduate} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ graduate }) {
  const [cohort, year] = graduate.cohort.split(" - ");
    return (
    <div className="min-w-[260px] max-w-[260px] h-[220px] rounded-3xl bg-white p-5 border border-emerald-100 cursor-pointer 
      shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">

      {/* Quote */}
      <div>
        <div className="text-4xl text-emerald-500 font-serif leading-none">
          “
        </div>
        <p className="mt-2 text-gray-600 text-sm leading-5 line-clamp-3">
          {graduate.quote}
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-4"></div>

     {/* Graduate Info */}
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center 
          justify-center text-white font-bold text-lg">
          {graduate.name.charAt(0)}
          </div>
          <div>
          <h4 className="text-sm font-semibold text-gray-900">
            {graduate.name}
          </h4>
          <p className="text-xs text-gray-500 mt-1">
            {cohort} - {year}
          </p>
        </div>
      </div>
    </div>
  );
}