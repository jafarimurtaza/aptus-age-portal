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
    <section className="home-hero relative isolate w-full overflow-hidden px-4 py-12 text-base-content sm:px-8 sm:py-16 lg:px-16 lg:py-20 xl:px-20 xl:py-24">
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center text-center">
        <div className="home-hero-content max-w-2xl">
          <h1 className="inline-flex rounded-full border border-base-300 bg-base-100/90 px-4 py-2 text-sm font-bold shadow-sm sm:px-5 sm:py-2.5 sm:text-base">
            Afghan Geeks Graduate Portal
          </h1>

          <h2 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl xl:mt-8">
            Find skilled Afghan tech graduates
          </h2>

          <p className="mt-4 min-h-8 text-lg font-semibold text-primary sm:mt-5 sm:text-xl">
            <span className="typing-loop">Verified skills. Real projects.</span>
          </p>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 sm:text-lg sm:leading-8 xl:mt-6">
            Explore Afghan Geeks graduates through clear profiles, practical
            project experience, and the technical skills they can bring to
            professional teams.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 xl:mt-10">
            <button className="btn btn-primary min-w-36 px-5 text-sm shadow-md transition duration-200 hover:-translate-y-0.5 hover:shadow-lg sm:min-w-52 sm:px-8 sm:text-base">
              Browse Graduates
            </button>

            <button className="btn btn-outline min-w-32 border-base-300 bg-base-100/90 px-5 text-sm transition duration-200 hover:-translate-y-0.5 sm:min-w-44 sm:px-8 sm:text-base">
              Try Aptus AI
            </button>
          </div>
        </div>

        <StatsSection />
      </div>
    </section>
  );
}
