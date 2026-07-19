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
    <main className="min-h-screen bg-white antialiased py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        
        {/* کانتینر اصلی محتوای پروژه با پس‌زمینه کاملاً سفید و بدون کادر یا سایه */}
        <div className="bg-white p-0">
          
          {/* ۱. هدر متنی پروژه */}
          <div className="mb-8">
            <ProjectHeader project={project} />
          </div>

          {/* ۲. تصویر شاخص بزرگ با افکت زوم نرم */}
          <div className="group my-10 overflow-hidden rounded-2xl bg-white border border-slate-100">
            <img
              alt={project.title}
              className="h-[350px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-102 sm:h-[480px]"
              loading="eager"
              src={project.heroImage}
            />
          </div>

          {/* ۳. داستان پروژه و گالری تصاویر ارتقا یافته */}
          <div className="mt-6">
            <ProjectStory project={project} />
          </div>

        </div>

        {/* ۴. پروژه‌های پیشنهادی و آخرین پروژه‌ها در انتهای صفحه */}
        <div className="mt-16 border-t border-slate-200/60 pt-12">
          <ProjectInfo project={project} />
        </div>
        
      </div>
    </main>
  );
}
