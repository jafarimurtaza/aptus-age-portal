import ProjectGalleryCard from "./ProjectGalleryCard";


export default function ProjectCard({ projects }) {

  if (projects.length === 0) {
    return (
      <div className="mt-8 rounded-xl border border-dashed border-emerald-300 bg-white p-10 text-center shadow-sm">

        <p className="text-lg font-black text-slate-950">
          No projects found
        </p>

        <p className="mt-2 text-sm font-semibold text-slate-600">
          Try another search or choose All from the filters.
        </p>

      </div>
    );
  }


  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {projects.map((project) => (
        <ProjectGalleryCard
          key={project.slug}
          project={project}
        />
      ))}

    </div>
  );
}