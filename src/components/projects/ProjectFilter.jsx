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
    <section className="mt-8 rounded-2xl border border-emerald-100 bg-white p-5 shadow-[0_18px_45px_rgba(15,78,18,0.08)]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-black leading-tight text-slate-950">
            Filter by Technology
          </h2>
          <p className="mt-1 text-sm font-semibold text-slate-500">
            Browse projects by stack and tools.
          </p>
        </div>
        <div className="w-fit rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-black text-emerald-800">
          {activeTechnology}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <button
            className={`h-9 rounded-full border px-4 text-xs font-black transition-all ${
              activeTechnology === technology
                ? "border-green-900 bg-green-900 text-white shadow-lg shadow-emerald-900/15"
                : "border-slate-200 bg-slate-50 text-slate-700 hover:border-green-900 hover:bg-emerald-50 hover:text-green-900"
            }`}
            key={technology}
            onClick={() => setActiveTechnology(technology)}
            type="button"
          >
            {technology}
          </button>
        ))}
      </div>
    </section>
  );
}
