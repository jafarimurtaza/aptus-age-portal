"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});
const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-jbmono",
  display: "swap",
});


const graduates = [
  { name: "Zainab Mohammadi", cohort: 1, year: 2022, status: "Employed", bio: "Zainab is a passionate frontend engineer who built her first React application during Cohort 1 and never looked back.", tags: ["React", "TypeScript", "Tailwind CSS", "Figma"] },
  { name: "Fatima Ahmadi", cohort: 1, year: 2022, status: "Available", bio: "Fatima discovered her love for backend systems through Cohort 1, diving deep into APIs and databases.", tags: ["Node.js", "PostgreSQL", "Python", "Docker"] },
  { name: "Mariam Karimi", cohort: 1, year: 2022, status: "Open", bio: "Mariam combines her background in graphic design with newly acquired coding skills to craft accessible interfaces.", tags: ["Figma", "React", "Tailwind CSS", "TypeScript"] },
  { name: "Layla Rahimi", cohort: 1, year: 2022, status: "Employed", bio: "Layla is a full-stack developer with a keen interest in data engineering. During Cohort 1 she built her first pipeline.", tags: ["Python", "React", "MongoDB", "FastAPI"] },
  { name: "Nadia Sultani", cohort: 2, year: 2023, status: "Available", bio: "Nadia joined Afghan Geeks in 2023 and quickly emerged as a machine learning specialist.", tags: ["Python", "Machine Learning", "FastAPI", "Docker"] },
  { name: "Roya Waziri", cohort: 2, year: 2023, status: "Open", bio: "Roya is a DevOps-focused engineer who containerised the entire Afghan Geeks learning platform.", tags: ["Docker", "Node.js", "PostgreSQL", "TypeScript"] },
  { name: "Parisa Noori", cohort: 2, year: 2023, status: "Employed", bio: "Parisa excels at building GraphQL APIs and real-time applications. Her capstone was a peer-mentorship tool.", tags: ["GraphQL", "Node.js", "React", "TypeScript"] },
  { name: "Sahar Hashimi", cohort: 2, year: 2023, status: "Available", bio: "Sahar is a full-stack developer with a particular talent for product thinking and roadmap planning.", tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"] },
  { name: "Maryam Yousafzai", cohort: 3, year: 2024, status: "Available", bio: "Maryam is the youngest member of Cohort 3 and already building impressively ambitious ML projects.", tags: ["Python", "React", "Machine Learning", "TypeScript"] },
  { name: "Leila Mansouri", cohort: 3, year: 2024, status: "Open", bio: "Leila brings a background in mathematics to her software engineering work, with a natural eye for systems.", tags: ["Rust", "Python", "FastAPI", "TypeScript"] },
  { name: "Freshta Safi", cohort: 3, year: 2024, status: "Available", bio: "Freshta is a natural communicator who channels that energy into her work as a frontend lead.", tags: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"] },
  { name: "Shaista Barakzai", cohort: 3, year: 2024, status: "Employed", bio: "Shaista is a backend engineer drawn to distributed systems and API design. She built the portal's core API.", tags: ["Node.js", "MongoDB", "Docker", "GraphQL"] },
  { name: "Azita Kohistani", cohort: 3, year: 2024, status: "Available", bio: "Azita bridges the gap between data science and software engineering with ease and curiosity.", tags: ["Python", "Machine Learning", "FastAPI", "PostgreSQL"] },
  { name: "Nafisa Omar", cohort: 3, year: 2024, status: "Open", bio: "Nafisa is a versatile full-stack developer who loves tackling ambiguous problems head-on.", tags: ["React", "Node.js", "PostgreSQL", "TypeScript"] },
];

const statusLabel = { Employed: "Employed", Available: "Available", Open: "Open to Offers" };
const statusClasses = {
  Employed: "bg-base-300/10 text-base-300",
  Available: "bg-success/10 text-[#178a45]",
  Open: "bg-primary/15 text-primary-dim",
};
const avatarColors = ["#1B3A6B", "#C8955A", "#22C55E", "#3B82F6", "#B07F45"];
const values = [
  { name: "Excellence", desc: "We hold ourselves to the highest technical standards." },
  { name: "Community", desc: "We build for each other and for the world." },
  { name: "Openness", desc: "Knowledge is most powerful when freely shared." },
  { name: "Resilience", desc: "We turn obstacles into engineering problems." },
];
const partners = [
  {
    mark: "AG",
    markBg: "bg-base-300",
    markText: "text-base-100",
    name: "Afghan Geeks Education",
    desc: "Afghan Geeks Education is the non-profit organisation behind the programme. Founded in 2021, it has trained graduates across three cohorts, partnering with diaspora mentors, international NGOs, and technology companies to deliver a curriculum that competes with the world's best.",
  },
  {
    mark: "A",
    markBg: "bg-primary",
    markText: "text-neutral",
    name: "Aftelos",
    desc: "Aftelos is the technology consultancy that partnered with Afghan Geeks to design and build the graduate portal. Aftelos specialises in mission-driven digital products and provided mentorship, code review, and infrastructure support throughout the Cohort 3 capstone project.",
  },
];
const stats = [
  { value: "14", label: "Graduates" },
  { value: "3", label: "Cohorts trained" },
  { value: "2021", label: "Founded" },
  { value: "100%", label: "Remote, worldwide faculty" },
];

function StarIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0l2.6 7.2L22 9l-7.4 1.8L12 18l-2.6-7.2L2 9l7.4-1.8z" />
    </svg>
  );
}

function StarDivider() {
  return (
    <div className="max-w-[1180px] mx-auto px-6 md:px-12">
      <div className="flex items-center gap-3.5 my-16 text-base-300">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-20" />
        <StarIcon className="w-[18px] h-[18px] text-primary shrink-0" />
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-20" />
      </div>
    </div>
  );
}

function Reveal({ children }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(14px)",
      }}
    >
      {children}
    </div>
  );
}

function initials(name) {
  return name.split(" ").map((w) => w[0]).slice(0, 2).join("");
}

export default function AboutPage() {
  const [activeCohort, setActiveCohort] = useState("all");

  const filteredGraduates = useMemo(
    () =>
      activeCohort === "all"
        ? graduates
        : graduates.filter((g) => String(g.cohort) === activeCohort),
    [activeCohort]
  );

  return (
    <main className={`${fraunces.variable} ${inter.variable} ${jbmono.variable} font-sans bg-base-100 text-base-content`}>


      <div
        id="top"
        className="relative overflow-hidden text-base-100 pt-[88px] pb-24"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 82% -10%, rgba(200,149,90,0.16), transparent 60%), linear-gradient(165deg, #0B0F19 0%, #1B3A6B 130%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.14] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50'%3E%3Cg fill='none' stroke='%23C8955A' stroke-width='1'%3E%3Cpath d='M25 4 L29 21 L46 25 L29 29 L25 46 L21 29 L4 25 L21 21 Z'/%3E%3C/g%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
          }}
        />
        <div className="relative max-w-[1180px] mx-auto px-6 md:px-12 pt-16 pb-8">
          <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.16em] uppercase text-primary mb-5 before:content-[''] before:inline-block before:w-5 before:h-px before:bg-primary">
            About Afghan Geeks
          </span>
          <h1 className="font-serif font-medium text-[2.3rem] md:text-6xl leading-[1.06] tracking-tight max-w-[16ch] mb-6">
            Technology as an <em className="text-primary italic">Act of Resistance</em>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-slate-200 max-w-[56ch]">
            Afghan Geeks exists because Afghan women&apos;s right to education is
            non-negotiable — and technology is a tool no border or decree can
            take away.
          </p>
          <div className="flex gap-9 flex-wrap mt-14 pt-7 border-t border-base-100/10">
            {stats.map((s) => (
              <div key={s.label}>
                <b className="block font-serif text-3xl font-medium text-base-100">{s.value}</b>
                <span className="text-xs text-slate-400 tracking-wide">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Reveal>
        <section id="mission" className="max-w-[1180px] mx-auto px-6 md:px-12 py-20">
          <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-14 items-start">
            <div>
              <span className="block font-mono text-[11.5px] tracking-[0.15em] uppercase text-primary-dim mb-2.5">
                Why we exist
              </span>
              <h2 className="font-serif font-medium text-3xl md:text-4xl tracking-tight text-base-300 mb-5">
                Our Mission
              </h2>
              <p className="text-base leading-[1.75] text-slate-600 mb-4">
                Afghan Geeks provides world-class technology education to Afghan
                women, equipping them with the skills to build careers, products,
                and futures on their own terms. We believe that access to
                technical education is a human right, and that Afghan women are
                among the most talented, resilient, and determined technologists
                in the world.
              </p>
              <p className="text-base leading-[1.75] text-slate-600">
                Our programme covers full-stack web development, machine
                learning, DevOps, and product design — all taught remotely by
                experienced practitioners from across the Afghan diaspora and
                international tech community.
              </p>
            </div>

            <div className="bg-base-200 border border-base-300/10 border-t-[3px] border-t-primary rounded p-8">
              <h3 className="font-serif font-semibold text-lg text-base-300 mb-5">Our Values</h3>
              <ul className="space-y-5">
                {values.map((v) => (
                  <li key={v.name} className="flex gap-3.5">
                    <StarIcon className="w-[15px] h-[15px] text-primary shrink-0 mt-1" />
                    <p className="text-sm leading-relaxed text-slate-600 m-0">
                      <b className="font-semibold text-base-content">{v.name}.</b> {v.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </Reveal>

      <StarDivider />

      <Reveal>
        <section id="story" className="max-w-[1180px] mx-auto px-6 md:px-12 py-16 md:py-20">
          <span className="block font-mono text-[11.5px] tracking-[0.15em] uppercase text-primary-dim mb-2.5">
            Built by graduates, for graduates
          </span>
          <h2 className="font-serif font-medium text-3xl md:text-4xl tracking-tight text-base-300 mb-8">
            The Portal Story
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
            <div className="pl-5 border-l-2 border-primary/40">
              <p className="text-base leading-[1.75] text-slate-600">
                This portal was built by the graduates themselves as their
                Cohort 3 capstone project. Freshta Safi led the frontend
                development in Next.js and Tailwind CSS, while Shaista Barakzai
                architected the backend API. Mariam Karimi handled UX design
                and accessibility, and Azita Kohistani built the data pipeline
                for the impact dashboard.
              </p>
              <div className="mt-4 font-mono text-[11.5px] text-base-300 tracking-wide">
                FRESHTA SAFI · SHAISTA BARAKZAI · MARIAM KARIMI · AZITA KOHISTANI
              </div>
            </div>

            <div className="pl-5 border-l-2 border-primary/40">
              <p className="text-base leading-[1.75] text-slate-600">
                The Aptus AI matching system was co-designed by all Cohort 3
                graduates, who iterated on the conversation flow until it felt
                genuinely helpful — not transactional. Every pixel and every
                line of code is a statement: Afghan women are here, they are
                building, and the world should pay attention.
              </p>
              <div className="mt-4 font-mono text-[11.5px] text-base-300 tracking-wide">
                COHORT 3 · 2024
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <StarDivider />
      <Reveal>
        <section id="partners" className="max-w-[1180px] mx-auto px-6 md:px-12 py-16 md:py-20">
          <span className="block font-mono text-[11.5px] tracking-[0.15em] uppercase text-primary-dim mb-2.5">
            Who makes this possible
          </span>
          <h2 className="font-serif font-medium text-3xl md:text-4xl tracking-tight text-base-300 mb-8">
            Partners
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {partners.map((p) => (
              <div key={p.name} className="bg-base-100 border border-neutral/10 rounded-md p-8 shadow-sm">
                <div className={`w-[34px] h-[34px] rounded-full flex items-center justify-center font-serif font-semibold text-sm mb-4 ${p.markBg} ${p.markText}`}>
                  {p.mark}
                </div>
                <h3 className="font-serif font-semibold text-xl mb-3">{p.name}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <StarDivider />
      <Reveal>
        <section id="graduates" className="max-w-[1180px] mx-auto px-6 md:px-12 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-9">
            <div>
              <span className="block font-mono text-[11.5px] tracking-[0.15em] uppercase text-primary-dim mb-2.5">
                The people behind the code
              </span>
              <h2 className="font-serif font-medium text-3xl md:text-4xl tracking-tight text-base-300 mb-1.5">
                All 14 Graduates
              </h2>
              <p className="text-sm text-slate-500 m-0">
                Three cohorts. Fourteen changemakers. One unstoppable community.
              </p>
            </div>

            <div className="flex gap-2 flex-wrap">
              {["all", "1", "2", "3"].map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveCohort(key)}
                  className={`text-sm font-semibold px-4 py-2 rounded-full border transition-colors ${
                    activeCohort === key
                      ? "bg-base-300 border-base-300 text-base-100"
                      : "bg-transparent border-base-300/20 text-base-300 hover:border-primary hover:text-primary-dim"
                  }`}
                >
                  {key === "all" ? "All" : `Cohort ${key}`}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
            {filteredGraduates.map((g, i) => (
              <div
                key={g.name}
                className="bg-base-100 border border-neutral/10 rounded-md p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-primary/40"
              >
                <div className="flex gap-3.5 items-start">
                  <div
                    className="w-[46px] h-[46px] rounded-full flex items-center justify-center font-serif font-semibold text-[15px] text-base-100 shrink-0"
                    style={{ background: avatarColors[i % avatarColors.length] }}
                  >
                    {initials(g.name)}
                  </div>
                  <div>
                    <p className="font-serif font-semibold text-base m-0">{g.name}</p>
                    <div className="text-xs text-slate-400 mt-0.5">
                      Cohort {g.cohort} · {g.year}
                    </div>
                    <span className={`inline-block text-[10.5px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full mt-2 ${statusClasses[g.status]}`}>
                      {statusLabel[g.status]}
                    </span>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-slate-500 my-4">{g.bio}</p>

                <div className="flex flex-wrap gap-1.5">
                  {g.tags.map((t) => (
                    <span key={t} className="font-mono text-[10.5px] px-2.5 py-1 rounded bg-base-200 text-slate-600 border border-neutral/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>
      
    </main>
  );
}