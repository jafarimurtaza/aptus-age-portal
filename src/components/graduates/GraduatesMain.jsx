"use client";

import { useState } from "react";
import GraduateCard from "./GraduateCard";
import GraduatesFilter from "./GraduatesFilter";
import { graduates } from "./data";

function normalizeText(value) {
  return value.toLowerCase().trim();
}

export default function GraduatesMain() {
  const [searchText, setSearchText] = useState("");
  const [activeSkill, setActiveSkill] = useState("All Skills");
  const [activeAvailability, setActiveAvailability] =
    useState("All Availability");

  const search = normalizeText(searchText);
  const selectedSkill = normalizeText(activeSkill);
  const selectedAvailability = normalizeText(activeAvailability);

  const filteredGraduates = graduates.filter((graduate) => {
    const graduateSkills = graduate.skills.map((skill) => normalizeText(skill));
    const searchableText = normalizeText(
      [graduate.name, graduate.availability, ...graduate.skills].join(" "),
    );

    const matchesSearch = search === "" || searchableText.includes(search);
    const matchesSkill =
      activeSkill === "All Skills" || graduateSkills.includes(selectedSkill);
    const matchesAvailability =
      activeAvailability === "All Availability" ||
      normalizeText(graduate.availability) === selectedAvailability;

    return matchesSearch && matchesSkill && matchesAvailability;
  });
  const hasActiveFilters =
    searchText.trim() !== "" ||
    activeSkill !== "All Skills" ||
    activeAvailability !== "All Availability";

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
              {hasActiveFilters && (
                <span className="ml-2 text-primary">matched</span>
              )}
            </p>
          </header>

          <div className="mt-12">
            <GraduatesFilter
              activeAvailability={activeAvailability}
              activeSkill={activeSkill}
              searchText={searchText}
              setActiveAvailability={setActiveAvailability}
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
                Try another name, skill, or availability filter.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
