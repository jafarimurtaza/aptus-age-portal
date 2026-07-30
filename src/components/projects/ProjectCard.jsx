import ProjectGalleryCard from "./ProjectGalleryCard";

export default function ProjectCard({ projects }) {
  if (projects.length === 0) {
    return (
      <div className="mt-8 border border-[#D6A04A]/30 bg-[#101827] p-6 text-center shadow-xl">
        <p className="text-lg font-black text-[#F8F5EE]">
          No projects found
        </p>

        <p className="mt-2 text-sm font-medium text-[#A8B1C2]">
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