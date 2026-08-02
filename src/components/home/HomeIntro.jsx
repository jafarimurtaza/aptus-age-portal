import { GraduateProfiles } from "./GraduateProfiles";
import { StatsSection } from "./StatsSection";

export const graduateProfiles = [
  {
    name: "Azadeh Ahmadi",
    title: "Full Stack Developer",
    skill: "Web Development",
    company: "AFGHAN GEEKS",
    imageSrc: "/Images/card1.jpg",
  },
  {
    name: "Sahar Karimi",
    title: "UI UX Designer",
    skill: "Product Design",
    company: "APTUS AGE",
    imageSrc: "/Images/card2.jpg",
  },
  {
    name: "Maryam Rasa",
    title: "Frontend Engineer",
    skill: "React Development",
    company: "TECH STUDIO",
    imageSrc: "/Images/card3.avif",
  },
];

export const stats = [
  {
    value: 14,
    label: "Total Graduates",
  },
  {
    value: 20,
    label: "Projects Built",
  },
  {
    value: 3,
    label: "Cohorts Completed",
  },
  {
    value: 14,
    label: "Skills Taught",
  },
];

export default function HomeIntro() {
  return (
    <section className="w-full bg-[#f8fafc] px-4 pb-12 pt-12 text-slate-950 sm:px-8 sm:py-16 lg:px-16 xl:px-20 xl:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 xl:min-h-[560px] xl:grid-cols-[0.95fr_1.05fr] xl:gap-12">
        <div className="mx-auto max-w-xl text-center xl:mx-0 xl:text-left">
          <h1 className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700 shadow-sm shadow-emerald-100 sm:px-5 sm:py-2.5 sm:text-base">
            Afghan Geeks Graduate Portal
          </h1>

          <h2 className="mt-6 text-2xl font-semibold leading-snug text-slate-950 sm:text-3xl lg:text-4xl xl:mt-8">
            Find skilled Afghan tech graduates
          </h2>

          <p className="mt-4 min-h-8 text-lg font-semibold text-[#1d4ed8] sm:mt-5 sm:text-xl">
            <span className="typing-loop">Verified skills. Real projects.</span>
          </p>

          <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 xl:mx-0 xl:mt-6">
            Explore Afghan Geeks graduates through clear profiles, practical
            project experience, and the technical skills they can bring to
            professional teams.
          </p>

          <div className="mt-8 flex flex-row flex-wrap justify-center gap-3 sm:gap-5 xl:mt-12 xl:justify-start">
            <button className="btn min-w-36 border-0 bg-[#071022] px-5 text-sm text-white hover:bg-[#111827] sm:min-w-52 sm:px-8 sm:text-base">
              Browse Graduates
            </button>

            <button className="btn min-w-32 border-[#1d4ed8] bg-white px-5 text-sm text-[#1d4ed8] hover:border-[#1d4ed8] hover:bg-blue-50 sm:min-w-44 sm:px-8 sm:text-base">
              Try Aptus AI
            </button>
          </div>
        </div>

        <GraduateProfiles />
      </div>

      <StatsSection />
    </section>
  );
}
