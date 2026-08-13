"use client";

import { useMemo, useState } from "react";
import GraduateCard from "./GraduateCard";
import GraduatesFilter from "./GraduatesFilter";
import { graduates } from "./data";

export default function GraduatesMain() {
  const [searchText, setSearchText] = useState("");
  const [activeSkill, setActiveSkill] = useState("All Skills");
  const [activeCohort, setActiveCohort] = useState("All Cohorts");
  const [activeAvailability, setActiveAvailability] =
    useState("All Availability");

  const filteredGraduates = useMemo(() => {
    const search = searchText.trim().toLowerCase();

    return graduates.filter((graduate) => {
      const matchesSearch =
        search === "" ||
        graduate.name.toLowerCase().includes(search) ||
        graduate.role.toLowerCase().includes(search) ||
        graduate.location.toLowerCase().includes(search) ||
        graduate.cohort.toLowerCase().includes(search) ||
        graduate.availability.toLowerCase().includes(search) ||
        graduate.bio.toLowerCase().includes(search) ||
        graduate.skills.some((skill) => skill.toLowerCase().includes(search));

      const matchesSkill =
        activeSkill === "All Skills" || graduate.skills.includes(activeSkill);
      const matchesCohort =
        activeCohort === "All Cohorts" || graduate.cohort === activeCohort;
      const matchesAvailability =
        activeAvailability === "All Availability" ||
        graduate.availability === activeAvailability;

      return (
        matchesSearch &&
        matchesSkill &&
        matchesCohort &&
        matchesAvailability
      );
    });
  }, [activeAvailability, activeCohort, activeSkill, searchText]);

  return (
    <main className="min-h-screen bg-base-100 text-base-content">
      <section className="px-4 py-12 sm:px-8 sm:py-16 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-[1700px]">
          <header>
            <h1 className="text-4xl font-semibold leading-tight text-neutral sm:text-5xl">
              Graduates
            </h1>
            <p className="mt-4 text-lg text-base-content/55 sm:text-xl">
              {filteredGraduates.length} of {graduates.length} graduates
            </p>
          </header>

          <div className="mt-12">
            <GraduatesFilter
              activeAvailability={activeAvailability}
              activeCohort={activeCohort}
              activeSkill={activeSkill}
              searchText={searchText}
              setActiveAvailability={setActiveAvailability}
              setActiveCohort={setActiveCohort}
              setActiveSkill={setActiveSkill}
              setSearchText={setSearchText}
            />
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
            {filteredGraduates.map((graduate) => (
              <GraduateCard graduate={graduate} key={graduate.name} />
            ))}
          </div>

          {filteredGraduates.length === 0 && (
            <div className="mt-10 rounded-2xl border border-primary/20 bg-base-100 p-10 text-center shadow-sm shadow-primary/10">
              <h2 className="text-xl font-semibold text-neutral">
                No graduates found
              </h2>
              <p className="mt-2 text-base text-base-content/60">
                Try another name, skill, cohort, or availability filter.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
