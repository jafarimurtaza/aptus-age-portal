const projectImages = [
  "/Images/2.jpg",
  "/Images/3.png",
  "/Images/4.png",
  "/Images/5.png",
  "/Images/6.png",
  "/Images/7.jpg",
  "/Images/8.png",
  "/Images/9.png",
];

const profileImages = [
  "/Images/profile1.avif",
  "/Images/profile2.jpeg",
  "/Images/profile3.jpeg",
  "/Images/card1.jpg",
  "/Images/card2.jpg",
  "/Images/card3.avif",
];

function createSlug(name) {
  return name.toLowerCase().replaceAll(" ", "-");
}

export const graduates = [
  {
    name: "Azadeh Ahmadi",
    role: "Frontend Developer",
    location: "Kabul, Afghanistan",
    cohort: "Cohort 1",
    availability: "Available",
    skills: ["React", "Next.js", "Tailwind"],
    bio: "Frontend Developer passionate about creating clean and user-friendly web applications with practical project experience.",
  },
  {
    name: "Sahar Karimi",
    role: "UI UX Designer",
    location: "Herat, Afghanistan",
    cohort: "Cohort 2",
    availability: "Available",
    skills: ["Figma", "Prototyping", "Design Systems"],
    bio: "Creative web developer who enjoys turning ideas into interactive websites and clear digital experiences.",
  },
  {
    name: "Maryam Rasa",
    role: "Software Developer",
    location: "Mazar, Afghanistan",
    cohort: "Cohort 3",
    availability: "Interviewing",
    skills: ["JavaScript", "React", "CSS"],
    bio: "Motivated software developer focused on learning new technologies and solving real project challenges.",
  },
  {
    name: "Lina Orya",
    role: "Frontend Engineer",
    location: "Bamyan, Afghanistan",
    cohort: "Cohort 1",
    availability: "Available",
    skills: ["Next.js", "Accessibility", "Tailwind"],
    bio: "Detail-oriented frontend engineer dedicated to creating beautiful and accessible web solutions.",
  },
  {
    name: "Nargis Fetrat",
    role: "Web Developer",
    location: "Kandahar, Afghanistan",
    cohort: "Cohort 2",
    availability: "Open to Projects",
    skills: ["HTML", "CSS", "React"],
    bio: "Frontend learner focused on responsive landing pages, useful dashboards, and clean visual details.",
  },
  {
    name: "Farida Noori",
    role: "Full Stack Developer",
    location: "Kunduz, Afghanistan",
    cohort: "Cohort 3",
    availability: "Available",
    skills: ["Node.js", "APIs", "Next.js"],
    bio: "Developer who enjoys building practical tools and connecting polished interfaces with useful data.",
  },
  {
    name: "Homa Sadat",
    role: "Backend Developer",
    location: "Ghazni, Afghanistan",
    cohort: "Cohort 1",
    availability: "Interviewing",
    skills: ["Node.js", "Databases", "APIs"],
    bio: "Backend-minded graduate who enjoys organizing data and building reliable application logic.",
  },
  {
    name: "Roya Mehr",
    role: "Product Designer",
    location: "Nangarhar, Afghanistan",
    cohort: "Cohort 2",
    availability: "Available",
    skills: ["UI Design", "Research", "Figma"],
    bio: "Product-focused graduate creating thoughtful interfaces through research, structure, and visual clarity.",
  },
  {
    name: "Mariam Noori",
    role: "Frontend Developer",
    location: "Kabul, Afghanistan",
    cohort: "Cohort 3",
    availability: "Open to Projects",
    skills: ["React", "TypeScript", "Tailwind"],
    bio: "Builds responsive components and enjoys turning wireframes into smooth web experiences.",
  },
  {
    name: "Freshta Rahimi",
    role: "UI UX Designer",
    location: "Herat, Afghanistan",
    cohort: "Cohort 1",
    availability: "Available",
    skills: ["Figma", "Wireframes", "Branding"],
    bio: "Creates clean layouts and user flows for learning platforms, dashboards, and service websites.",
  },
  {
    name: "Zainab Akbari",
    role: "Frontend Engineer",
    location: "Balkh, Afghanistan",
    cohort: "Cohort 2",
    availability: "Interviewing",
    skills: ["React", "Next.js", "Git"],
    bio: "Passionate frontend engineer who built her first React application during Afghan Geeks training.",
  },
  {
    name: "Samira Danish",
    role: "Web Developer",
    location: "Kabul, Afghanistan",
    cohort: "Cohort 3",
    availability: "Available",
    skills: ["JavaScript", "CSS", "APIs"],
    bio: "Web developer focused on practical pages, interactive features, and steady improvement through projects.",
  },
  {
    name: "Shabnam Arya",
    role: "Full Stack Developer",
    location: "Takhar, Afghanistan",
    cohort: "Cohort 1",
    availability: "Open to Projects",
    skills: ["React", "Node.js", "Databases"],
    bio: "Full-stack graduate comfortable building interfaces and connecting them with structured data.",
  },
  {
    name: "Laila Wafa",
    role: "Product Designer",
    location: "Parwan, Afghanistan",
    cohort: "Cohort 2",
    availability: "Available",
    skills: ["Research", "Figma", "Prototyping"],
    bio: "Designer interested in human-centered products, clear information architecture, and elegant UI details.",
  },
].map((graduate, index) => ({
  ...graduate,
  slug: createSlug(graduate.name),
  projectImage: projectImages[index % projectImages.length],
  profileImage: profileImages[index % profileImages.length],
  experience:
    index % 3 === 0
      ? "Frontend interfaces, responsive layouts, and team collaboration"
      : index % 3 === 1
        ? "Product thinking, visual systems, and practical project delivery"
        : "Problem solving, clean implementation, and modern development tools",
  summary:
    `${graduate.name} is a trained Afghan Geeks graduate focused on ${graduate.role.toLowerCase()} work. ` +
    "Their profile highlights practical learning, project experience, and readiness to contribute to real teams.",
  strengths: [
    "Works with clear project goals and steady communication.",
    "Builds practical solutions using tools learned during cohort training.",
    "Comfortable improving work through feedback, iteration, and teamwork.",
  ],
  stats: [
    { label: "Projects", value: index % 2 === 0 ? 3 : 2 },
    { label: "Skills", value: graduate.skills.length },
    { label: "Cohort", value: graduate.cohort.replace("Cohort ", "") },
  ],
  socials: {
    github: `https://github.com/${graduate.slug}`,
    linkedin: `https://www.linkedin.com/in/${graduate.slug}`,
  },
  projects: [
    {
      title: `${graduate.role} Portfolio`,
      image: projectImages[index % projectImages.length],
      description:
        "A polished portfolio experience showing profile information, selected work, and a clean responsive layout.",
      tools: graduate.skills.slice(0, 3),
    },
    {
      title: "Team Project Dashboard",
      image: projectImages[(index + 2) % projectImages.length],
      description:
        "A practical project built during cohort work to organize information and present user-focused features.",
      tools: [graduate.skills[0], graduate.skills[1] || "Git", "Tailwind"],
    },
  ],
}));

export const skillFilters = [
  "All Skills",
  "React",
  "Next.js",
  "Tailwind",
  "Figma",
  "Node.js",
  "APIs",
];

export const availabilityFilters = [
  "All Availability",
  "Available",
  "Interviewing",
  "Open to Projects",
];
