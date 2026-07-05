export const CATEGORIES = [
  {
    id: "frontend",
    label: "Front-End",
    description: "Interfaces, state, and everything the user touches.",
    color: "#22d3ee", // cyan-400
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
    color: "#34d399", // emerald-400
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
    color: "#fbbf24", // amber-400
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
    color: "#c084fc", // purple-400
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