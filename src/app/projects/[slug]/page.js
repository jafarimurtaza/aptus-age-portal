import { notFound } from "next/navigation";
import { projects } from "../data";
import ProjectHeader from "@/components/projects/details/ProjectHeader";
import ProjectDetailsGrid from "@/components/projects/details/ProjectDetailsGrid";
import ProjectStory from "@/components/projects/details/ProjectStory";
import ProjectInfo from "@/components/projects/details/ProjectInfo";

export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="mx-auto max-w-5xl rounded-xl bg-white px-8 py-10 shadow-sm">
        {/* ۱. هدر متنی بالای صفحه */}
        <ProjectHeader project={project} />

        {/* ۲. تصویر بزرگ پروژه (جایگزین ویدیو) */}
        <div className="my-8 overflow-hidden rounded-xl">
          <img
            alt={project.title}
            className="h-[300px] w-full object-cover sm:h-[400px] md:h-[500px]"
            src={project.heroImage}
          />
        </div>

        {/* ۳. کارت‌های اطلاعاتی ۴ تایی */}
        <ProjectDetailsGrid project={project} />

        {/* ۴. داستان پروژه و گالری دو عکسی */}
        <ProjectStory project={project} />

        {/* ۵. آخرین پروژه‌ها در انتهای صفحه */}
        <ProjectInfo project={project} />
      </div>
    </main>
  );
}
