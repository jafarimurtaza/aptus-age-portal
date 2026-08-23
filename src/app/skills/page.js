import SkillsGraph from "../../components/skills/SkillsGraph";
export const metadata = {
  title: "Skills & Technologies | Afghan Geeks",
  description: "Explore my technical skills and proficiency levels across frontend, backend, DevOps, and data engineering. Interactive skill graph visualization.",
  keywords: ["skills", "technologies", "frontend", "backend", "devops", "data engineering", "proficiency", "developer skills"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Skills & Technologies | Afghan Geeks",
    description: "Interactive visualization of my technical skills and proficiency levels across multiple domains.",
    images: [
      {
        url: "/Images/skills-image.png",
        width: 1200,
        height: 630,
        alt: "Skills Graph Visualization",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default function SkillPage() {
  return (
  <main className="h-screen w-full overflow-hidden bg-base-200 text-base-content">
 

      <div className="h-[calc(100vh-100px)] w-full">
        <SkillsGraph />
      </div>
    </main>
  );
}
