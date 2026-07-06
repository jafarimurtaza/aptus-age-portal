const technologies = [
  "All",
  "Docker",
  "FastAPI",
  "Figma",
  "GraphQL",
  "Machine Learning",
  "MongoDB",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Python",
  "React",
  "Rust",
  "Tailwind CSS",
  "TypeScript",
];

export default function ProjectFilter({ activeTechnology, setActiveTechnology }) {
  return (
    <div className="mt-7 px-4">
      <h2 className="text-3xl font-black text-slate-950">
        Filter by Technology
      </h2>

      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <button
            className={`btn h-8 min-h-0 rounded-full border border-[#166534] px-4 text-xs font-black ${
              activeTechnology === technology
                ? "bg-[#0f4e12] text-white hover:bg-[#0b3d0e]"
                : "bg-slate-200 text-slate-950 hover:bg-emerald-100"
            }`}
            key={technology}
            onClick={() => setActiveTechnology(technology)}
            type="button"
          >
            {technology}
          </button>
        ))}
      </div>
    </div>
  );
}
