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
    <section className="md:px-10 lg:px-30">
       <div className="text-center mb-10">
        <h2 className=" text-cream font-bold text-3xl px-40  pt-6">
          Graduate Stories
        </h2>
        <p className="mt-3 max-w-3xl mx-auto text-base md:text-lg text-gold leading-8">
          In their own words
        </p>
      </div>
        {/*first row*/}
        <div className="relative overflow-hidden mb-6 mr-20 ml-20">
        {/* Left fade */}
        <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"/>
        {/* Right fade */}
        <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"/>
        <div className="flex gap-6 animate-scroll-right px-10">
          {animatedRowOne.map((graduate, index) => (
            <Card key={index} graduate={graduate} />
          ))}
        </div>
      </div>
      
       {/* Second Row */}
        <div className="relative overflow-hidden mb-6 mr-20 ml-20">
        {/* Left fade */}
        <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        <div className="flex gap-10 animate-scroll-left px-10">
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
    <div className="min-w-[260px] max-w-[260px] h-[220px] rounded-3xl bg-sand/90 text-dark border border-white/20 rounded-2xl p-5 border border-emerald-100 cursor-pointer 
      shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">

      {/* Quote */}
      <div>
        <div className="text-4xl text-gold font-serif leading-none ">
          “
        </div>
        <p className="mt-2 text-dark text-sm leading-5 line-clamp-3">
          {graduate.quote}
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800"></div>

     {/* Graduate Info */}
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-gold flex items-center justify-center font-bold text-lg">
          </div>
          <div>
          <h4 className="text-sm font-semibold text-navy">
            {graduate.name}
          </h4>
          <p className="text-xs text-navy mt-1">
            {cohort} - {year}
          </p>
        </div>
      </div>
    </div>
  );
}