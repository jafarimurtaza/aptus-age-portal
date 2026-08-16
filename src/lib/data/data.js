export function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-3.5 h-3.5"
    >
      <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export const graduates = [
  {
    name: "Zainab Mohammadi",
    cohort: 1,
    year: 2022,
    status: "Employed",
    location: "Kabul, Afghanistan",
    verified: "Verified Graduate",
    bio: "Zainab is a passionate frontend engineer who built her first React application during Cohort 1 and never looked back.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Figma"],
  },
  {
    name: "Fatima Ahmadi",
    cohort: 1,
    year: 2022,
    status: "Available",
    location: "Herat, Afghanistan",
    verified: "Verified Graduate",
    bio: "Fatima discovered her love for backend systems through Cohort 1, diving deep into APIs and databases.",
    tags: ["Node.js", "PostgreSQL", "Python", "Docker"],
  },

  // ... add the rest of your 14 graduates here, each with a `verified` field
];

export const statusLabel = { Employed: "Employed", Available: "Available", Open: "Open to Offers" };

export const statusClasses = {
  Employed: "bg-base-300/10 text-base-300",
  Available: "bg-success/10 text-[#178a45]",
  Open: "bg-primary/15 text-primary-dim",
};

export const avatarColors = ["#1B3A6B", "#C8955A", "#22C55E", "#3B82F6", "#B07F45"];
export const journey = [
  {
    year: "2021",
    heading: "Afghan Geeks is Founded",
    description:
      "Afghan Geeks is founded to provide technology education to Afghan women, with a mission to turn opportunity into a right, not a privilege.",
    tag: { top: "2021", icon: "✦", bottom: "FOUNDED" },
  },
  {
    year: "2022",
    heading: "First Cohort Graduates",
    description:
      "The first cohort completes the programme, marking the beginning of a growing community of Afghan women technologists.",
    tag: { top: "01", icon: "◆", bottom: "COHORT" },
  },
  {
    year: "2023",
    heading: "Community Grows",
    description:
      "The community grows and graduates begin building real-world projects, taking on freelance work and full-time roles across the industry.",
    tag: null,
  },
  {
    year: "2024",
    heading: "The Graduate Portal Launches",
    description:
      "Cohort 3 launches the graduate portal as their capstone project — a platform built by graduates, for graduates, to showcase their work to the world.",
    tag: { top: "03", icon: "◆", bottom: "COHORT" },
  },
];
export const CATEGORIES = [
  {
    id: "frontend",
    label: "Front-End",
    description: "Interfaces, state, and everything the user touches.",
    color: "#C8955A",
    icon: "frontend",
    skills: [
      { id: "fe-react", name: "React", level: 90 },
      { id: "fe-next", name: "Next.js", level: 85 },
      { id: "fe-ts", name: "TypeScript", level: 80 },
      { id: "fe-tailwind", name: "Tailwind CSS", level: 88 },
      { id: "fe-state", name: "Zustand / Redux", level: 70 },
    ],
  },
  {
    id: "backend",
    label: "Back-End",
    description: "APIs, servers, and the logic behind the scenes.",
    color: "#C8955A",
    icon: "backend",
    skills: [
      { id: "be-node", name: "Node.js", level: 85 },
      { id: "be-express", name: "Express", level: 80 },
      { id: "be-graphql", name: "GraphQL / REST", level: 75 },
      { id: "be-auth", name: "Auth (JWT/OAuth)", level: 70 },
      { id: "be-microservices", name: "Microservices", level: 60 },
    ],
  },
  {
    id: "devops-tools",
    label: "DevOps & Tools",
    description: "Shipping, automating, and keeping things running.",
    color: "#C8955A",
    icon: "devops",
    skills: [
      { id: "do-docker", name: "Docker", level: 80 },
      { id: "do-k8s", name: "Kubernetes", level: 55 },
      { id: "do-ci", name: "CI/CD (GitHub Actions)", level: 75 },
      { id: "do-aws", name: "AWS", level: 65 },
      { id: "do-git", name: "Git", level: 90 },
    ],
  },
  {
    id: "data-ml",
    label: "Data & ML",
    description: "Pipelines, models, and turning data into signal.",
    color: "#C8955A",
    icon: "data",
    skills: [
      { id: "dm-python", name: "Python", level: 85 },
      { id: "dm-pandas", name: "Pandas / NumPy", level: 75 },
      { id: "dm-ml", name: "TensorFlow / PyTorch", level: 55 },
      { id: "dm-sql", name: "SQL", level: 80 },
      { id: "dm-pipelines", name: "Data Pipelines", level: 60 },
    ],
  },
];