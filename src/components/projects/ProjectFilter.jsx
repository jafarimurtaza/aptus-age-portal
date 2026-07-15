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

export default function ProjectFilter({
  activeTechnology,
  clearAll,
  searchText,
  setActiveTechnology,
  setSearchText,
}) {
  function submitSearch(event) {
    event.preventDefault();
  }

  return (
    <section className="rounded-2xl border border-white/70 bg-white/85 from-white/85 via-emerald-50/90 to-sky-50/90 p-4 shadow-2xl shadow-emerald-900/10 backdrop-blur sm:p-6">
      <form
        className="flex flex-col gap-3 lg:flex-row lg:items-center"
        onSubmit={submitSearch}
      >
        <input
          className="h-12 w-full rounded-2xl border border-white/80 bg-white/85 px-4 text-sm font-semibold text-slate-900 shadow-sm outline-none placeholder:text-slate-500 focus:border-emerald-600 lg:h-14 lg:flex-1"
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="Search by title..."
          type="search"
          value={searchText}
        />

        <select
          className="h-12 w-full rounded-2xl border border-white/80 bg-white px-4 text-sm font-bold text-slate-900 shadow-sm outline-none focus:border-emerald-600 lg:h-14 lg:w-44"
          onChange={(event) => setActiveTechnology(event.target.value)}
          value={activeTechnology}
        >
          {technologies.map((technology) => (
            <option key={technology} value={technology}>
              {technology === "All" ? "All Categories" : technology}
            </option>
          ))}
        </select>

        <select className="h-12 w-full rounded-2xl border border-white/80 bg-white px-4 text-sm font-bold text-slate-900 shadow-sm outline-none focus:border-emerald-600 lg:h-14 lg:w-36">
          <option>All Types</option>
          <option>Frontend</option>
          <option>Backend</option>
          <option>Full Stack</option>
        </select>

        <select className="h-12 w-full rounded-2xl border border-white/80 bg-white px-4 text-sm font-bold text-slate-900 shadow-sm outline-none focus:border-emerald-600 lg:h-14 lg:w-40">
          <option>Featured First</option>
          <option>Newest First</option>
          <option>Most Viewed</option>
        </select>
      </form>

      <div className="mt-6 flex gap-3 overflow-x-auto pb-1 lg:flex-wrap lg:overflow-visible lg:pb-0">
        {technologies.slice(0, 8).map((technology) => {
          const isActive = activeTechnology === technology;

          return (
            <button
              className={`shrink-0 rounded-full border px-5 py-3 text-sm font-bold transition ${
                isActive
                  ? "border-slate-950 bg-slate-950 text-white"
                  : "border-white/80 bg-white/80 text-slate-700 shadow-sm hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
              }`}
              key={technology}
              onClick={() => setActiveTechnology(technology)}
              type="button"
            >
              {technology === "All" ? "All Categories" : technology}
            </button>
          );
        })}

        <button
          className="shrink-0 rounded-full border border-white/80 bg-white/80 px-5 py-3 text-sm font-bold text-slate-700 shadow-sm hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
          onClick={clearAll}
          type="button"
        >
          Clear All
        </button>
      </div>
    </section>
  );
}
