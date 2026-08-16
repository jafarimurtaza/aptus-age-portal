"use client";
export default function GraduateSection() {
  const rowOne = [
    { name: "Zainab Mohammadi", cohort: "Cohort 1 - 2022", quote: "Building this portal changed how I see myself as a developer." },
    { name: "Nadia Ahmadi", cohort: "Cohort 1 - 2022", quote: "I learned how to create complete web applications." },
    { name: "Farzana Rahimi", cohort: "Cohort 2 - 2023", quote: "I never imagined I could work on machine learning projects." },
    { name: "Maryam Noor", cohort: "Cohort 2 - 2023", quote: "The program helped me become confident in technology." },
    { name: "Laila Ahmad", cohort: "Cohort 3 - 2024", quote: "I discovered my passion for creating digital experiences." },
  ];

  const rowTwo = [
    { name: "Shukria Rahimi", cohort: "Cohort 4 - 2025", quote: "Every line of code represents growth and confidence." },
    { name: "Zari Gul", cohort: "Cohort 4 - 2025", quote: "Technology gave me the opportunity to build my future." },
    { name: "Fatima Noor", cohort: "Cohort 5 - 2026", quote: "I learned how to transform designs into websites." },
    { name: "Sahar Ahmad", cohort: "Cohort 5 - 2026", quote: "I gained confidence working with real projects." },
    { name: "Roya Karim", cohort: "Cohort 6 - 2026", quote: "Coding became a skill that changed my career path." },
  ];

  const animatedRowOne = [...rowOne, ...rowOne];
  const animatedRowTwo = [...rowTwo, ...rowTwo];

  return (
    <section className="bg-base-300 px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
      <div className="mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-base-100 font-bold text-3xl sm:text-3xl lg:text-4xl tracking-tight">
            Our Graduates
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-primary leading-8 font-medium">
            In their own words
          </p>
        </div>

        {/* Rows */}
        <div>
          <div className="relative overflow-hidden mb-6 mt-10">
            <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
            <div className="flex gap-6 sm:gap-10 animate-marquee-left px-6 sm:px-10">
              {animatedRowOne.map((graduate, index) => (
                <Card key={index} graduate={graduate} />
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden mb-6 mt-10">
            <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
            <div className="flex gap-6 sm:gap-10 animate-marquee-right px-6 sm:px-10">
              {animatedRowTwo.map((graduate, index) => (
                <Card key={index} graduate={graduate} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
function Card({ graduate }) {
  const [cohort, year] = graduate.cohort.split(" - ");
      return (
      <div className="min-w-[200px] sm:min-w-[240px] lg:min-w-[260px] max-w-[260px] h-[180px] sm:h-[200px] lg:h-[220px] rounded-2xl bg-base-200 p-4 sm:p-5 cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="text-3xl sm:text-4xl text-primary font-serif">
          “
        </div>
        <p className="mt-2 text-base-content text-xs sm:text-sm leading-5 line-clamp-3">
          {graduate.quote}
        </p>
      </div>
        <div className="border-t border-primary" />
        <div className="flex items-center gap-3">
        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-primary flex items-center justify-center font-bold text-lg"></div>
        <div>
          <h4 className="text-sm font-semibold text-base-300">
            {graduate.name}
          </h4>
          <p className="text-xs text-base-content mt-1">
            {cohort} - {year}
          </p>
        </div>
      </div>
    </div>
  );
}