"use client";

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

const projectTypes = ["All Types", "Frontend", "Backend", "Full Stack"];

const sortOptions = ["Featured First", "Newest First", "Most Viewed"];

export default function ProjectFilter({
  searchText,
  setSearchText,
  activeTechnology,
  setActiveTechnology,
  activeType,
  setActiveType,
  sortBy,
  setSortBy,
  clearAll,
}) {
  function submitSearch(event) {
    event.preventDefault();
  }

  return (
    <section className="border border-base-100 bg-base-100 p-6 rounded-lg shadow-[0_0_25px_5px_rgba(0,0,0,0.12)]">
      <form
        onSubmit={submitSearch}
        className="flex flex-col gap-4 lg:flex-row lg:items-center"
      >
        {/* Search */}
        <input
          type="search"
          placeholder="Search by title..."
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          className="h-12 w-full rounded-2xl border border-natural bg-white px-4 text-sm font-semibold text-base-300 outline-none placeholder:text-base-300 focus:border-primary lg:h-14 lg:flex-1"
        />

        {/* Technology */}
        <select
          value={activeTechnology}
          onChange={(event) => setActiveTechnology(event.target.value)}
          className="h-12 w-full rounded-2xl border border-natural bg-white px-4 text-sm font-bold text-base-300 outline-none focus:border-primary lg:h-14 lg:w-44"
        >
          {technologies.map((technology) => (
            <option key={technology} value={technology}>
              {technology === "All" ? "All Categories" : technology}
            </option>
          ))}
        </select>

        {/* Type */}
        <select
          value={activeType}
          onChange={(event) => setActiveType(event.target.value)}
          className="h-12 w-full rounded-2xl border border-natural bg-white px-4 text-sm font-bold text-base-300 outline-none focus:border-primary lg:h-14 lg:w-36"
        >
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
          className="h-12 w-full rounded-2xl border border-natural bg-white px-4 text-sm font-bold text-base-300 outline-none focus:border-primary lg:h-14 lg:w-40"
        >
          {sortOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        {/* Clear */}
        <button
          type="button"
          onClick={clearAll}
          className="h-12 rounded-2xl bg-primary px-6 text-sm font-bold text-white transition hover:bg-base-300 lg:h-14"
        >
          Clear
        </button>
      </form>
    </section>
  );
}
