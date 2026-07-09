import {
  GraduationCap,
  Rocket,
  Star,
} from "lucide-react";

export const cohorts = [
  {
    id: 1,
    title: "Cohort 1",
    status: "completed",
    startDate: "Jan 2022",
    endDate: "Dec 2022",
    description:
      "The pioneering first cohort of Afghan Geeks, establishing the foundation of a powerhouse community of future leaders.",
    graduates: 4,
    projects: 4,
    months: 12,
    category: "web",
    year: "2022",
    button: "View Cohort",
    icon: GraduationCap,
    skills: ["React", "Node.js", "Express", "MongoDB"],
  },

  {
    id: 2,
    title: "Cohort 2",
    status: "completed",
    startDate: "Feb 2023",
    endDate: "Nov 2023",
    description:
      "Empowered more learners, diving deeper into full-stack development and modern technologies.",
    graduates: 4,
    projects: 5,
    months: 10,
    category: "ai",
    year: "2023",
    button: "View Cohort",
    icon: Rocket,
    skills: [
      "Next.js",
      "TypeScript",
      "DevOps",
      "PostgreSQL",
    ],
  },

  {
    id: 3,
    title: "Cohort 3",
    status: "ongoing",
    startDate: "Jan 2024",
    endDate: "Dec 2024",
    description:
      "Our most diverse cohort yet, building solutions that solve real-world problems.",
    graduates: 6,
    projects: 8,
    months: 12,
    category: "data",
    year: "2024",
    button: "Explore Cohort",
    icon: Star,
    skills: [
      "Data Engineering",
      "AI / ML",
      "Web3",
    ],
  },
];