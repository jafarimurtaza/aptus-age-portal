export default function ProjectSearch({ clearAll, searchText, setSearchText }) {
  function searchProjects(event) {
    event.preventDefault();
  }

  return (
    <form
      className="flex flex-col gap-3 rounded-none sm:flex-row sm:items-center"
      onSubmit={searchProjects}
    >
      <label className="input input-bordered flex h-14 flex-1 items-center gap-3 rounded-full border-slate-400 bg-white text-slate-900">
        <span className="relative h-5 w-5 rounded-full border-2 border-slate-700 after:absolute after:-bottom-1.5 after:-right-1 after:h-2 after:w-0.5 after:rotate-[-45deg] after:rounded-full after:bg-slate-700" />
        <input
          className="grow text-sm font-semibold placeholder:text-slate-700"
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="Search projects by title, technology, or graduate..."
          type="search"
          value={searchText}
        />
      </label>

      <button
        className="btn h-14 rounded-full border-0 bg-green-900 px-8 text-lg font-black text-white shadow-md shadow-emerald-900/15 hover:bg-green-950"
        type="submit"
      >
        Search
      </button>

      <button
        className="btn h-14 rounded-full border border-emerald-700 bg-white px-6 text-sm font-black text-emerald-700 shadow-md shadow-emerald-900/10 hover:bg-emerald-50"
        onClick={clearAll}
        type="button"
      >
        Clear All
      </button>
    </form>
  );
}
