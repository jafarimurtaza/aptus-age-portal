import {
  availabilityFilters,
  skillFilters,
} from "./data";

export default function GraduatesFilter({
  activeAvailability,
  activeSkill,
  searchText,
  setActiveAvailability,
  setActiveSkill,
  setSearchText,
}) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  function resetFilters() {
    setSearchText("");
    setActiveSkill("All Skills");
    setActiveAvailability("All Availability");
  }

  return (
    <form
      className="rounded-2xl border border-primary/20 bg-base-100 p-4 shadow-sm shadow-primary/10 sm:p-5"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_200px_220px_120px]">
        <input
          className="input h-14 w-full rounded-xl border-base-content/10 bg-base-100 px-5 text-base text-base-content placeholder:text-base-content/45 focus:border-primary focus:outline-none"
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="Search by name, skill, or availability..."
          type="search"
          value={searchText}
        />

        <select
          className="select h-14 w-full rounded-xl border-base-content/10 bg-base-100 px-4 text-base text-base-content focus:border-primary"
          onChange={(event) => setActiveSkill(event.target.value)}
          value={activeSkill}
        >
          {skillFilters.map((skill) => (
            <option key={skill} value={skill}>
              {skill}
            </option>
          ))}
        </select>

        <select
          className="select h-14 w-full rounded-xl border-base-content/10 bg-base-100 px-4 text-base text-base-content focus:border-primary"
          onChange={(event) => setActiveAvailability(event.target.value)}
          value={activeAvailability}
        >
          {availabilityFilters.map((availability) => (
            <option key={availability} value={availability}>
              {availability}
            </option>
          ))}
        </select>

        <button
          className="btn h-14 rounded-xl border-primary/30 bg-base-200 px-5 text-base font-semibold text-neutral hover:border-primary hover:bg-primary"
          onClick={resetFilters}
          type="button"
        >
          Reset
        </button>
      </div>
    </form>
  );
}
