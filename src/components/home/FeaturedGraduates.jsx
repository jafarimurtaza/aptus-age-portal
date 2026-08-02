import Link from "next/link";
import GraduateCards from "./GraduateCards";

export function LocationIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 text-slate-400"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        clipRule="evenodd"
        d="M10 18s6-5.25 6-10A6 6 0 1 0 4 8c0 4.75 6 10 6 10Zm0-7.5A2.5 2.5 0 1 0 10 5a2.5 2.5 0 0 0 0 5.5Z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export const graduates = [
  {
    name: "Azadeh Ahmadi",
    location: "Kabul, Afghanistan",
    initials: "AA",
    avatar: "bg-sky-100 text-sky-800",
    verified: "Verified Graduate",
    bio: "Frontend Developer passionate about creating clean and user-friendly web applications. Skilled in React and Next.js with a focus on building modern digital experiences",
    photoPlaceholders: [
      "from-slate-950 to-sky-800",
      "from-blue-900 to-cyan-500",
      "from-slate-800 to-emerald-500",
    ],
  },
  {
    name: "Sahar Karimi",
    location: "Herat, Afghanistan",
    initials: "SK",
    avatar: "bg-emerald-100 text-emerald-800",
    verified: "Verified Graduate",
    bio: "Creative web developer who enjoys turning ideas into interactive websites. Experienced with responsive design, React components, and building smooth user interfaces.",
    photoPlaceholders: [
      "from-indigo-900 to-blue-500",
      "from-emerald-700 to-lime-300",
      "from-slate-900 to-slate-500",
    ],
  },
  {
    name: "Maryam Rasa",
    location: "Mazar, Afghanistan",
    initials: "MR",
    avatar: "bg-amber-100 text-amber-800",
    verified: "Verified Graduate",
    bio: "Motivated software developer focused on learning new technologies and solving real-world problems through code. Passionate about frontend development and teamwork.",
    photoPlaceholders: [
      "from-orange-100 to-amber-400",
      "from-yellow-200 to-orange-500",
      "from-stone-900 to-amber-500",
    ],
  },
  {
    name: "Lina Orya",
    location: "Bamyan, Afghanistan",
    initials: "LO",
    avatar: "bg-violet-100 text-violet-800",
    verified: "Verified Graduate",
    bio: "Detail-oriented frontend engineer dedicated to creating beautiful and accessible web solutions. Loves working with modern tools like Next.js and Tailwind CSS.",
    photoPlaceholders: [
      "from-cyan-500 to-blue-800",
      "from-green-100 to-emerald-500",
      "from-slate-800 to-violet-500",
    ],
  },
  {
    name: "Nargis Fetrat",
    location: "Kandahar, Afghanistan",
    initials: "NF",
    avatar: "bg-rose-100 text-rose-800",
    verified: "Verified Graduate",
    bio: "Frontend learner focused on building responsive landing pages and simple dashboards. Enjoys turning clean layouts into practical web interfaces.",
    photoPlaceholders: [
      "from-rose-900 to-pink-500",
      "from-slate-800 to-rose-400",
      "from-pink-100 to-rose-500",
    ],
  },
  {
    name: "Farida Noori",
    location: "Kunduz, Afghanistan",
    initials: "FN",
    avatar: "bg-cyan-100 text-cyan-800",
    verified: "Verified Graduate",
    bio: "Creative developer with strong attention to visual details and user-friendly flows. Builds interactive pages and keeps improving through real projects.",
    photoPlaceholders: [
      "from-cyan-800 to-sky-400",
      "from-blue-100 to-cyan-500",
      "from-slate-900 to-blue-500",
    ],
  },
  {
    name: "Homa Sadat",
    location: "Ghazni, Afghanistan",
    initials: "HS",
    avatar: "bg-lime-100 text-lime-800",
    verified: "Verified Graduate",
    bio: "Backend-minded graduate who enjoys organizing data and building reliable APIs. Interested in connecting clean interfaces with strong server logic.",
    photoPlaceholders: [
      "from-lime-700 to-emerald-400",
      "from-stone-900 to-lime-500",
      "from-green-100 to-lime-500",
    ],
  },
  {
    name: "Roya Mehr",
    location: "Nangarhar, Afghanistan",
    initials: "RM",
    avatar: "bg-indigo-100 text-indigo-800",
    verified: "Verified Graduate",
    bio: "Full-stack graduate building practical tools with modern frameworks. Comfortable creating polished pages and connecting them to useful data.",
    photoPlaceholders: [
      "from-indigo-900 to-blue-500",
      "from-violet-100 to-indigo-500",
      "from-slate-800 to-purple-500",
    ],
  },
];

export default function FeaturedGraduates() {
  return (
    <section className="w-full bg-white px-4 pb-12 pt-4 text-slate-950 sm:px-8 sm:pb-16 sm:pt-6 lg:px-16 xl:px-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
        <div>
          <h2 className="text-2xl font-bold leading-tight text-slate-950 sm:text-3xl lg:text-4xl">
            Meet Our Graduates
          </h2>
          <p className="mt-3 text-base text-slate-500 sm:mt-4 sm:text-lg lg:text-xl">
            Talented engineers and designers across three cohorts
          </p>
        </div>

        <Link
          className="text-base font-bold text-emerald-800 transition hover:text-emerald-600 sm:mt-4 sm:text-lg"
          href="/graduates"
        >
          View All Graduates →
        </Link>
      </div>
      <GraduateCards />
      <div className="mt-8 flex justify-center sm:mt-10">
        <Link
          className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-6 py-3 text-sm font-bold text-emerald-800 shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-900 sm:text-base"
          href="/graduates"
        >
          <span>View Graduates</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
