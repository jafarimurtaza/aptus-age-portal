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
  searchText,
  setActiveTechnology,
  setSearchText,
  clearAll,
}) {
  function submitSearch(event) {
    event.preventDefault();
  }

  return (
    <section className="rounded-2xl border border-white/70 bg-white/85 p-4 shadow-xl shadow-slate-900/10 backdrop-blur sm:p-6">
      <form
        className="flex flex-col gap-3 lg:flex-row lg:items-center"
        onSubmit={submitSearch}
      >
        <input
          className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-emerald-600 lg:h-14 lg:flex-1"
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="Search by title..."
          type="search"
          value={searchText}
        />

        <select
          className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-900 shadow-sm outline-none focus:border-emerald-600 lg:h-14 lg:w-44"
          onChange={(event) => setActiveTechnology(event.target.value)}
          value={activeTechnology}
        >
          {technologies.map((technology) => (
            <option key={technology} value={technology}>
              {technology === "All" ? "All Categories" : technology}
            </option>
          ))}
        </select>

        <select className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-900 shadow-sm outline-none focus:border-emerald-600 lg:h-14 lg:w-36">
          <option>All Types</option>
          <option>Frontend</option>
          <option>Backend</option>
          <option>Full Stack</option>
        </select>

        <select className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-900 shadow-sm outline-none focus:border-emerald-600 lg:h-14 lg:w-40">
          <option>Featured First</option>
          <option>Newest First</option>
          <option>Most Viewed</option>
        </select>

        <button
          type="button"
          onClick={clearAll}
          className="h-12 rounded-2xl bg-slate-900 px-6 text-sm font-bold text-white transition hover:bg-red-600 lg:h-14"
        >
          Clear
        </button>
      </form>
    </section>
  );
}