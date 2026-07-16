import { notFound } from "next/navigation";

import { projects } from "../data";

import ProjectHeader from "@/components/projects/details/ProjectHeader";
import ProjectStory from "@/components/projects/details/ProjectStory";
import ProjectInfo from "@/components/projects/details/ProjectInfo";
import ProjectResults from "@/components/projects/details/ProjectResults";

export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white py-10">
      <div className="mx-auto max-w-3xl rounded-xl bg-white px-8 py-6 shadow-sm">
        <h1 className="mb-8 text-lg font-semibold text-slate-700">
          Project Details
        </h1>

        <ProjectHeader project={project} />

        <ProjectStory project={project} />

        <ProjectInfo project={project} />

        <ProjectResults project={project} />
      </div>
    </main>
  );
}