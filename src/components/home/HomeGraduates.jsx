import Link from "next/link";

function LocationIcon() {
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

const graduates = [
  {
    name: "Azadeh Ahmadi",
    location: "Kabul, Afghanistan",
    initials: "AA",
    avatar: "bg-sky-100 text-sky-800",
    skills: ["React", "TypeScript", "Next.js", "Tailwind"],
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
    skills: ["Figma", "UI Design", "Research"],
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
    skills: ["JavaScript", "React", "Git", "API"],
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
    skills: ["Node.js", "MongoDB", "Express", "Vercel"],
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
    skills: ["HTML", "CSS", "React", "Firebase"],
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
    skills: ["Vue", "JavaScript", "CSS", "GitHub"],
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
    skills: ["Python", "Django", "SQL", "REST"],
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
    skills: ["Next.js", "Prisma", "Postgres", "Vercel"],
    verified: "Verified Graduate",
    bio: "Full-stack graduate building practical tools with modern frameworks. Comfortable creating polished pages and connecting them to useful data.",
    photoPlaceholders: [
      "from-indigo-900 to-blue-500",
      "from-violet-100 to-indigo-500",
      "from-slate-800 to-purple-500",
    ],
  },
];

const skillStyles = [
  "border-sky-100 bg-sky-50 text-sky-700",
  "border-emerald-100 bg-emerald-50 text-emerald-700",
  "border-amber-100 bg-amber-50 text-amber-700",
  "border-rose-100 bg-rose-50 text-rose-700",
];

export default function HomeGraduates() {
  return (
    <section className="w-full bg-[#f8fafc] px-4 pb-12 pt-4 text-slate-950 sm:px-8 sm:pb-16 sm:pt-6 lg:px-16 xl:px-20">
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

      <div className="mx-auto mt-8 grid max-w-[1700px] gap-4 sm:mt-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
        {graduates.map((graduate) => (
          <Link
            aria-label={`View ${graduate.name} profile`}
            className="mx-auto block w-full max-w-[430px] overflow-hidden rounded-lg border border-slate-200 bg-white text-inherit shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200 md:max-w-none"
            href="/graduates"
            key={graduate.name}
          >
            <div className="grid h-24 grid-cols-3 gap-1 p-2 sm:h-28 xl:h-24">
              {graduate.photoPlaceholders.map((placeholder, index) => (
                <div
                  aria-label={`Photo placeholder ${index + 1}`}
                  className={`rounded bg-gradient-to-br ${placeholder}`}
                  key={placeholder}
                ></div>
              ))}
            </div>

            <div className="-mt-7 flex justify-center sm:-mt-8 xl:-mt-7">
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-full border-4 border-white text-lg font-black shadow-md sm:h-[72px] sm:w-[72px] sm:text-xl ${graduate.avatar}`}
              >
                {graduate.initials}
              </div>
            </div>

            <div className="px-4 pb-4 pt-2 text-center sm:px-5">
              <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                {graduate.name}
              </h3>
              <p className="mt-1 flex items-center justify-center gap-1.5 text-sm text-slate-500 sm:text-base">
                <LocationIcon />
                {graduate.location}
              </p>

              <div className="mx-auto mt-2 inline-flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700 sm:text-sm">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 text-xs">
                  ✓
                </span>
                {graduate.verified}
              </div>

              <p className="mt-3 line-clamp-2 min-h-11 text-left text-sm leading-[22px] text-slate-500 sm:min-h-12 sm:leading-6">
                {graduate.bio}
              </p>

              <div className="mt-3 flex flex-wrap justify-center gap-1.5 min-[420px]:flex-nowrap">
                {graduate.skills.map((skill, index) => (
                  <span
                    className={`whitespace-nowrap rounded-full border px-2 py-1 text-[10px] font-bold shadow-sm sm:px-2.5 sm:text-[11px] ${skillStyles[index]}`}
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <span className="btn mt-4 min-h-0 min-w-44 rounded-full border-slate-200 bg-white px-6 py-2 text-sm font-bold text-slate-900 hover:border-emerald-200 hover:bg-emerald-50 sm:min-w-52 sm:text-base">
                Message {graduate.name.split(" ")[0]}
              </span>
            </div>
          </Link>
        ))}
      </div>

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
