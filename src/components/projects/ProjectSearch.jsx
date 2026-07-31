export default function ProjectSearch({ clearAll, searchText, setSearchText }) {
  function searchProjects(event) {
    event.preventDefault();
  }

  return (
    <form
      className="flex flex-col gap-4 sm:flex-row sm:items-center"
      onSubmit={searchProjects}
    >
      {/* Search Input */}
      <label className="flex h-12 w-full items-center gap-3 rounded-full border border-[#243B63] bg-[#101827] px-4 text-[#F8F5EE] shadow-lg shadow-black/20 sm:h-14 sm:flex-1">
        {/* Search Icon */}
        <span className="relative h-5 w-5 rounded-full border-2 border-[#D6A04A] after:absolute after:-bottom-1.5 after:-right-1 after:h-2 after:w-0.5 after:rotate-[-45deg] after:rounded-full after:bg-[#D6A04A]" />

        <input
          className="min-w-0 grow bg-transparent text-sm font-semibold text-[#F8F5EE] outline-none placeholder:text-[#A8B1C2]"
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="Search projects by title, technology, or graduate..."
          type="search"
          value={searchText}
        />
      </label>

      {/* Search Button */}
      <button
        className="h-12 w-full rounded-full bg-[#D6A04A] px-6 text-base font-black text-[#080D1A] shadow-lg shadow-black/20 transition hover:bg-[#e5b968] sm:h-14 sm:w-auto"
        type="submit"
      >
        Search
      </button>

      {/* Clear Button */}
      <button
        className="h-12 w-full rounded-full border border-[#D6A04A] bg-transparent px-6 text-sm font-black text-[#D6A04A] transition hover:bg-[#D6A04A] hover:text-[#080D1A] sm:h-14 sm:w-auto"
        onClick={clearAll}
        type="button"
      >
        Clear All
      </button>
    </form>
  );
}
