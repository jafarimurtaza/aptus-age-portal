import Link from "next/link";
import { notFound } from "next/navigation";

const imageSlotStyles = [
  "from-emerald-100 via-teal-50 to-sky-100",
  "from-amber-100 via-orange-50 to-rose-100",
  "from-indigo-100 via-violet-50 to-fuchsia-100",
];

const projects = [
  {
    slug: "ngo-directory-platform",
    title: "NGO Directory Platform",
    category: "Community Platform",
    graduate: "Zainab Mohammadi",
    description:
      "A directory product for discovering trusted NGOs, comparing services, and reaching the right organization faster.",
    overview:
      "The page is designed around fast discovery. Visitors can scan verified organization cards, understand what each NGO offers, and move from search to contact without opening many unrelated pages.",
    problem:
      "People often hear about support organizations through word of mouth, so finding the correct NGO can take too much time.",
    solution:
      "The product groups NGOs by service area, keeps contact details visible, and makes profiles easy to compare before taking action.",
    impact:
      "Reduces search time for beneficiaries and gives NGOs a clearer digital presence for public outreach.",
    nextStep:
      "Add saved organizations, verified badges, and a simple admin panel for profile updates.",
    learningGoal:
      "Practice building a searchable public directory with clear information architecture and reusable React components.",
    outcome:
      "A responsive project page where users can search, compare, and open NGO profiles without losing context.",
    reviewFocus:
      "Search behavior, card hierarchy, accessible labels, and how clearly each organization is presented.",
    duration: "4 weeks",
    views: "124",
    tags: ["UI/UX", "React", "MongoDB"],
    features: [
      "Searchable NGO directory",
      "Trust-focused organization cards",
      "Service area and contact highlights",
      "Responsive discovery flow",
    ],
    skills: [
      "Component design",
      "Search filtering",
      "Data mapping",
      "UX writing",
    ],
  },
  {
    slug: "remote-workspace",
    title: "Remote Workspace",
    category: "Productivity Dashboard",
    graduate: "Ahmad Zia",
    description:
      "A focused team dashboard for planning remote work, reviewing priorities, and following weekly project movement.",
    overview:
      "This interface gives team leads a quick operational view before meetings. It separates urgent tasks, project health, upcoming conversations, and team capacity into sections that are easy to scan.",
    problem:
      "Remote teams lose time when updates live across different chats, spreadsheets, and meeting notes.",
    solution:
      "The dashboard collects daily focus, task counts, project progress, and meeting reminders into one quiet workspace.",
    impact:
      "Helps teams start the day with shared context and fewer repeated status questions.",
    nextStep:
      "Connect real task data, add role-based views, and support weekly progress reports.",
    learningGoal:
      "Learn how to organize dashboard content, design reusable summary cards, and present team data clearly.",
    outcome:
      "A clean productivity dashboard that shows project status, tasks, team workload, and meeting priorities.",
    reviewFocus:
      "Dashboard spacing, responsive layout, visual hierarchy, and clarity of project status information.",
    duration: "5 weeks",
    views: "98",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    features: [
      "Project overview dashboard",
      "Daily focus and priority panel",
      "Meeting and deadline reminders",
      "Team capacity summary",
    ],
    skills: [
      "Dashboard layout",
      "State planning",
      "Responsive UI",
      "Tailwind styling",
    ],
  },
  {
    slug: "clinic-queue-system",
    title: "Clinic Queue System",
    category: "Healthcare Tool",
    graduate: "Sahar Karimi",
    description:
      "A healthcare operations tool for organizing patient flow, appointment pressure, and service desk activity.",
    overview:
      "The system focuses on the front desk experience inside busy clinics. Staff can see who is waiting, what service is needed, and which appointments require attention next.",
    problem:
      "Manual queues make it hard for staff to explain waiting times and keep patient order accurate during busy hours.",
    solution:
      "The tool creates a shared queue view with appointment context, service labels, and clear patient status updates.",
    impact:
      "Supports faster patient handling and reduces confusion between reception, nurses, and doctors.",
    nextStep:
      "Add SMS notifications, doctor room assignment, and daily reporting for clinic managers.",
    learningGoal:
      "Practice designing a practical workflow tool that supports real clinic operations and staff decision making.",
    outcome:
      "A queue management interface that helps reception staff track patients, services, and appointment pressure.",
    reviewFocus:
      "Workflow accuracy, status labels, table/card readability, and how fast staff can understand the queue.",
    duration: "6 weeks",
    views: "156",
    tags: ["Python", "FastAPI", "PostgreSQL"],
    features: [
      "Patient queue management",
      "Service status tracking",
      "Appointment pressure view",
      "Reception workflow summary",
    ],
    skills: [
      "Workflow design",
      "Backend planning",
      "Database modeling",
      "Operational UX",
    ],
  },
];

function ProjectImagePlaceholder({ imageIndex }) {
  return (
    <div
      className={`relative h-full overflow-hidden rounded-2xl bg-gradient-to-br sm:rounded-3xl ${imageSlotStyles[imageIndex]}`}
    >
      <div className="absolute inset-4 rounded-2xl border border-white/70 bg-white/35 shadow-inner sm:inset-5" />
      <div className="absolute left-6 top-6 h-3 w-24 rounded-full bg-white/80 sm:left-8 sm:top-8 sm:w-28" />
      <div className="absolute left-6 top-14 h-3 w-36 rounded-full bg-white/65 sm:left-8 sm:top-16 sm:w-44" />
      <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-2 sm:bottom-8 sm:left-8 sm:right-8 sm:gap-3">
        <span className="h-14 rounded-xl bg-white/60 shadow-sm sm:h-20 sm:rounded-2xl" />
        <span className="h-14 rounded-xl bg-white/45 shadow-sm sm:h-20 sm:rounded-2xl" />
        <span className="h-14 rounded-xl bg-white/55 shadow-sm sm:h-20 sm:rounded-2xl" />
      </div>
    </div>
  );
}

export default async function ProjectDetailsPage({ params, searchParams }) {
  const { slug } = await params;
  const query = await searchParams;
  const project = projects.find((item) => item.slug === slug);
  const imageIndex = Math.min(
    Math.max(Number(query?.image ?? 0), 0),
    imageSlotStyles.length - 1,
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-sky-50 text-slate-950">
      <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <Link
            className="w-fit rounded-full border border-emerald-100 bg-white px-4 py-2 text-sm font-black text-emerald-800 shadow-sm hover:bg-emerald-50"
            href="/projects"
          >
            Back to projects
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/10 sm:rounded-3xl sm:p-4">
            <div className="h-64 sm:h-80 lg:h-full lg:min-h-[430px]">
              <ProjectImagePlaceholder imageIndex={imageIndex} />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/10 sm:rounded-3xl sm:p-8">
            <p className="text-xs font-black uppercase tracking-wider text-emerald-700">
              {project.category}
            </p>
            <h1 className="mt-3 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-base font-medium leading-7 text-slate-600">
              {project.description}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-emerald-50 p-4">
                <p className="text-[11px] font-black uppercase text-emerald-700">
                  Views
                </p>
                <p className="mt-1 text-2xl font-black text-slate-950">
                  {project.views}
                </p>
              </div>
              <div className="rounded-2xl bg-sky-50 p-4">
                <p className="text-[11px] font-black uppercase text-sky-700">
                  Duration
                </p>
                <p className="mt-1 text-lg font-black text-slate-950">
                  {project.duration}
                </p>
              </div>
              <div className="rounded-2xl bg-amber-50 p-4">
                <p className="text-[11px] font-black uppercase text-amber-700">
                  Level
                </p>
                <p className="mt-1 text-sm font-black text-slate-950">
                  Graduate
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  className="rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-800"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:mt-8 lg:grid-cols-3">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/5 sm:rounded-3xl sm:p-8 lg:col-span-2">
            <h2 className="text-xl font-black text-slate-950 sm:text-2xl">
              Learning case study
            </h2>
            <p className="mt-4 text-base font-medium leading-8 text-slate-600">
              {project.overview}
            </p>

            <div className="mt-6 rounded-2xl bg-emerald-50 p-4 sm:p-5">
              <p className="text-xs font-black uppercase text-emerald-700">
                Learning goal
              </p>
              <p className="mt-2 text-sm font-bold leading-6 text-slate-800">
                {project.learningGoal}
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-rose-50 p-4 sm:p-5">
                <p className="text-xs font-black uppercase text-rose-700">
                  Project challenge
                </p>
                <p className="mt-2 text-sm font-bold leading-6 text-slate-800">
                  {project.problem}
                </p>
              </div>

              <div className="rounded-2xl bg-emerald-50 p-4 sm:p-5">
                <p className="text-xs font-black uppercase text-emerald-700">
                  Student solution
                </p>
                <p className="mt-2 text-sm font-bold leading-6 text-slate-800">
                  {project.solution}
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-slate-50 p-4 sm:p-5">
              <p className="text-xs font-black uppercase text-slate-500">
                Final outcome
              </p>
              <p className="mt-2 text-sm font-bold leading-6 text-slate-800">
                {project.outcome}
              </p>
            </div>

            <div className="mt-4 rounded-2xl bg-amber-50 p-4 sm:p-5">
              <p className="text-xs font-black uppercase text-amber-700">
                Next improvement
              </p>
              <p className="mt-2 text-sm font-bold leading-6 text-slate-800">
                {project.nextStep}
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/5 sm:rounded-3xl sm:p-8">
            <h2 className="text-xl font-black text-slate-950 sm:text-2xl">
              Project skills
            </h2>
            <div className="mt-5 space-y-3">
              <div className="rounded-2xl bg-violet-50 p-4">
                <p className="text-xs font-black uppercase text-violet-700">
                  Mentor review focus
                </p>
                <p className="mt-2 text-sm font-bold leading-6 text-slate-800">
                  {project.reviewFocus}
                </p>
              </div>

              <div className="rounded-2xl bg-sky-50 p-4">
                <p className="text-xs font-black uppercase text-sky-700">
                  Expected impact
                </p>
                <p className="mt-2 text-sm font-bold leading-6 text-slate-800">
                  {project.impact}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-black text-slate-700"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {project.features.map((feature) => (
                <div
                  className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3"
                  key={feature}
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-green-900" />
                  <p className="text-sm font-bold text-slate-700">{feature}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
