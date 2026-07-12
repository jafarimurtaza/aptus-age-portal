import ProjectHeader from "@/components/projects/details/ProjectHeader";
import ProjectStory from "@/components/projects/details/ProjectStory";
import ProjectInfo from "@/components/projects/details/ProjectInfo";
import Link from "next/link";
import ProjectResults from "@/components/projects/details/ProjectResults";
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
   
        <ProjectHeader
  project={project}
  imageIndex={imageIndex}
/>

       
        <ProjectInfo project={project} />
   <ProjectStory project={project} />
   <ProjectResults project={project} />
    </main>
  );
}
