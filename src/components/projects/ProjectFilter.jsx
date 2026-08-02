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
    <section
      className="
        rounded-3xl
        border
        border-[#243B63]
        bg-[#101827]
        p-5
        shadow-xl
        shadow-black/20
        backdrop-blur
        sm:p-6
      "
    >

      <form
        className="
          flex
          flex-col
          gap-3
          lg:flex-row
          lg:items-center
        "
        onSubmit={submitSearch}
      >


        {/* Search */}

        <input
          className="
            h-12
            w-full
            rounded-2xl
            border
            border-[#243B63]
            bg-[#080D1A]
            px-4
            text-sm
            font-semibold
            text-[#F8F5EE]
            shadow-sm
            outline-none
            placeholder:text-[#A8B1C2]
            focus:border-[#D6A04A]
            lg:h-14
            lg:flex-1
          "
          onChange={(event)=>setSearchText(event.target.value)}
          placeholder="Search by title..."
          type="search"
          value={searchText}
        />



        {/* Technology */}

        <select
          className="
            h-12
            w-full
            rounded-2xl
            border
            border-[#243B63]
            bg-[#080D1A]
            px-4
            text-sm
            font-bold
            text-[#F8F5EE]
            outline-none
            focus:border-[#D6A04A]
            lg:h-14
            lg:w-44
          "
          onChange={(event)=>setActiveTechnology(event.target.value)}
          value={activeTechnology}
        >

          {technologies.map((technology)=>(
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
          className="
            h-12
            w-full
            rounded-2xl
            border
            border-[#243B63]
            bg-[#080D1A]
            px-4
            text-sm
            font-bold
            text-[#F8F5EE]
            outline-none
            focus:border-[#D6A04A]
            lg:h-14
            lg:w-36
          "
        >

          <option>
            All Types
          </option>

          <option>
            Frontend
          </option>

          <option>
            Backend
          </option>

          <option>
            Full Stack
          </option>

        </select>



        {/* Sort */}

        <select
          className="
            h-12
            w-full
            rounded-2xl
            border
            border-[#243B63]
            bg-[#080D1A]
            px-4
            text-sm
            font-bold
            text-[#F8F5EE]
            outline-none
            focus:border-[#D6A04A]
            lg:h-14
            lg:w-40
          "
        >

          <option>
            Featured First
          </option>

          <option>
            Newest First
          </option>

          <option>
            Most Viewed
          </option>

        </select>



        {/* Clear Button */}

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
            text-[#080D1A]
            transition
            hover:bg-[#e5b968]
            lg:h-14
          "
        >
          Clear
        </button>


      </form>

    </section>
  );
}