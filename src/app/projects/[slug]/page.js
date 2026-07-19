import { notFound } from "next/navigation";
import { projects } from "../data";
import ProjectHeader from "@/components/projects/details/ProjectHeader";
import ProjectStory from "@/components/projects/details/ProjectStory";
import ProjectInfo from "@/components/projects/details/ProjectInfo";

export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white antialiased py-8 sm:py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">

        <div className="bg-white p-0">

          <div className="mb-4">
            <ProjectHeader project={project} />
          </div>

          <div className="mt-6">
            <ProjectStory project={project} />
          </div>

        </div>

        <div className="mt-4 border-t border-slate-200/60 pt-4">
          <ProjectInfo project={project} />
        </div>

      </div>
    </main>
  );
}