"use client";

import { useMemo, useState } from "react";

import ProjectHero from "./ProjectHero";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";
import { projects } from "./data";

export default function ProjectsMain() {
  const [searchText, setSearchText] = useState("");
  const [activeTechnology, setActiveTechnology] = useState("All");
  const [activeType, setActiveType] = useState("All Types");
  const [sortBy, setSortBy] = useState("Featured First");

  const filteredProjects = useMemo(() => {
    const search = searchText.trim().toLowerCase();

    let result = projects.filter((project) => {
      const author = (project.graduate || project.author || "").toLowerCase();

      const matchSearch =
        search === "" ||
        project.title.toLowerCase().includes(search) ||
        author.includes(search) ||
        project.description.toLowerCase().includes(search) ||
        (project.tags || []).some((tag) => tag.toLowerCase().includes(search));

      const matchTechnology =
        activeTechnology === "All" ||
        (project.tags || []).includes(activeTechnology);

      const projectType = project.type || "All Types";

      const matchType =
        activeType === "All Types" || projectType === activeType;

      return matchSearch && matchTechnology && matchType;
    });

    if (sortBy === "Most Viewed") {
      result = [...result].sort((a, b) => Number(b.views) - Number(a.views));
    }

    if (sortBy === "Newest First") {
      result = [...result].sort(
        (a, b) => Number(b.year || 0) - Number(a.year || 0),
      );
    }

    return result;
  }, [searchText, activeTechnology, activeType, sortBy]);

  function clearAll() {
    setSearchText("");
    setActiveTechnology("All");
    setActiveType("All Types");
    setSortBy("Featured First");
  }

  return (
    <main className="min-h-screen">
      <ProjectHero />

      <section className="relative overflow-hidden bg-base-100 py-12">
        {/* Decorative Blur */}
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-base-300/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-Primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProjectFilter
            searchText={searchText}
            setSearchText={setSearchText}
            activeTechnology={activeTechnology}
            setActiveTechnology={setActiveTechnology}
            activeType={activeType}
            setActiveType={setActiveType}
            sortBy={sortBy}
            setSortBy={setSortBy}
            clearAll={clearAll}
          />

          <div className="mt-10">
            <ProjectCard projects={filteredProjects} />
          </div>
        </div>
      </section>
    </main>
  );
}
