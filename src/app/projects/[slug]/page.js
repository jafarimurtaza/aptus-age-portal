import { notFound } from "next/navigation";
import { projects } from "../data";

import ProjectIntro from "@/components/projects/details/ProjectIntro";
import ProjectStory from "@/components/projects/details/ProjectStory";
import ProjectInfo from "@/components/projects/details/ProjectInfo";

export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-white">
      <ProjectIntro project={project} />

      <ProjectStory project={project} />

      <ProjectInfo project={project} />
    </main>
  );
}
