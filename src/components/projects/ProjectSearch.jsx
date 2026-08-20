export default function ProjectSearch({ clearAll, searchText, setSearchText }) {
  function searchProjects(event) {
    event.preventDefault();
  }

  return (
    <form
      className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3"
      onSubmit={searchProjects}
    >
      {/* Search Input */}
      <label className="flex h-12 w-full items-center gap-3 rounded-full border border-base-300 bg-neutral px-5 text-base-100 shadow-lg shadow-black/20 sm:h-14 sm:flex-1 sm:px-6">
        {/* Search Icon */}
        <span className="relative h-5 w-5 shrink-0 rounded-full border-2 border-primary after:absolute after:-bottom-1.5 after:-right-1 after:h-2 after:w-0.5 after:rotate-[-45deg] after:rounded-full after:bg-primary" />

        <input
          className="min-w-0 flex-1 bg-transparent px-0 text-sm font-semibold text-base-100 outline-none placeholder:text-base-100/50"
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="Search projects by title, technology, or graduate..."
          type="search"
          value={searchText}
        />
      </label>

      {/* Search Button */}
      <button
        className="h-12 w-full rounded-full bg-primary px-7 text-sm font-black text-neutral shadow-lg shadow-black/20 transition hover:bg-primary/90 sm:h-14 sm:w-auto sm:px-8"
        type="submit"
      >
        Search
      </button>

      {/* Clear Button */}
      <button
        className="h-12 w-full rounded-full border border-primary bg-transparent px-7 text-sm font-black text-primary transition hover:bg-primary hover:text-neutral sm:h-14 sm:w-auto sm:px-8"
        onClick={clearAll}
        type="button"
      >
        Clear All
      </button>
    </form>
  );
}
