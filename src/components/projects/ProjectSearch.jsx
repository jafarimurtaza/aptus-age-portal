export default function ProjectSearch({ clearAll, searchText, setSearchText }) {
  function searchProjects(event) {
    event.preventDefault();
  }

  return (
    <form
      className="flex flex-col gap-3 sm:flex-row sm:items-center"
      onSubmit={searchProjects}
    >
      <label className="input input-bordered flex h-12 w-full items-center gap-3 rounded-full border-slate-300 bg-white text-slate-900 sm:h-14 sm:flex-1">
        <span className="relative h-5 w-5 rounded-full border-2 border-slate-700 after:absolute after:-bottom-1.5 after:-right-1 after:h-2 after:w-0.5 after:rotate-[-45deg] after:rounded-full after:bg-slate-700" />
        <input
          className="min-w-0 grow text-sm font-semibold placeholder:text-slate-500"
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="Search projects by title, technology, or graduate..."
          type="search"
          value={searchText}
        />
      </label>

      <button
        className="btn h-12 w-full rounded-full border-0 bg-green-900 px-6 text-base font-black text-white shadow-md shadow-emerald-900/15 hover:bg-green-950 sm:h-14 sm:w-auto sm:px-8 sm:text-lg"
        type="submit"
      >
        Search
      </button>

      <button
        className="btn h-12 w-full rounded-full border border-emerald-700 bg-white px-6 text-sm font-black text-emerald-700 shadow-md shadow-emerald-900/10 hover:bg-emerald-50 sm:h-14 sm:w-auto"
        onClick={clearAll}
        type="button"
      >
        Clear All
      </button>
    </form>
  );
}
