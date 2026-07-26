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

const projectTypes = [
  "All Types",
  "Frontend",
  "Backend",
  "Full Stack",
];

const sortOptions = [
  "Featured First",
  "Newest First",
  "Most Viewed",
];

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
    <section
      className="
     
        border
        border-[#E6D7C3]
        bg-[#F8F4EE]
        p-5
        shadow-xl
        shadow-black/10
        sm:p-6
      "
    >
      <form
        onSubmit={submitSearch}
        className="
          flex
          flex-col
          gap-3
          lg:flex-row
          lg:items-center
        "
      >
        {/* Search */}

        <input
          type="search"
          placeholder="Search by title..."
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          className="
            h-12
            w-full
            rounded-2xl
            border
            border-[#D8C8B4]
            bg-white
            px-4
            text-sm
            font-semibold
            text-[#17396C]
            outline-none
            placeholder:text-[#8A8176]
            focus:border-[#D6A04A]
            lg:h-14
            lg:flex-1
          "
        />

        {/* Technology */}

        <select
          value={activeTechnology}
          onChange={(event) =>
            setActiveTechnology(event.target.value)
          }
          className="
            h-12
            w-full
            rounded-2xl
            border
            border-[#D8C8B4]
            bg-white
            px-4
            text-sm
            font-bold
            text-[#17396C]
            outline-none
            focus:border-[#D6A04A]
            lg:h-14
            lg:w-44
          "
        >
          {technologies.map((technology) => (
            <option
              key={technology}
              value={technology}
            >
              {technology === "All"
                ? "All Categories"
                : technology}
            </option>
          ))}
        </select>

        {/* Type */}

        <select
          value={activeType}
          onChange={(event) =>
            setActiveType(event.target.value)
          }
          className="
            h-12
            w-full
            rounded-2xl
            border
            border-[#D8C8B4]
            bg-white
            px-4
            text-sm
            font-bold
            text-[#17396C]
            outline-none
            focus:border-[#D6A04A]
            lg:h-14
            lg:w-36
          "
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
          onChange={(event) =>
            setSortBy(event.target.value)
          }
          className="
            h-12
            w-full
            rounded-2xl
            border
            border-[#D8C8B4]
            bg-white
            px-4
            text-sm
            font-bold
            text-[#17396C]
            outline-none
            focus:border-[#D6A04A]
            lg:h-14
            lg:w-40
          "
        >
          {sortOptions.map((option) => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>

        {/* Clear */}

        <button
          type="button"
          onClick={clearAll}
          className="
            h-12
            rounded-2xl
            bg-[#D6A04A]
            px-6
            text-sm
            font-bold
            text-white
            transition
            hover:bg-[#C98B2F]
            lg:h-14
          "
        >
          Clear
        </button>
      </form>
    </section>
  );
}