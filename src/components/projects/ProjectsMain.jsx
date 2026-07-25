"use client";

import { useMemo, useState } from "react";

import ProjectHero from "./ProjectHero";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";
import { projects } from "./data";



export default function ProjectsMain() {

  const [searchText, setSearchText] = useState("");
  const [activeTechnology, setActiveTechnology] = useState("All");


  const filteredProjects = useMemo(() => {

    const search = searchText.trim().toLowerCase();


    return projects.filter((project) => {

      const matchSearch =
        search === "" ||
        project.title.toLowerCase().includes(search) ||
        project.graduate.toLowerCase().includes(search) ||
        project.description.toLowerCase().includes(search) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(search)
        );


      const matchTechnology =
        activeTechnology === "All" ||
        project.tags.includes(activeTechnology);


      return matchSearch && matchTechnology;

    });

  }, [activeTechnology, searchText]);



  function clearAll() {
    setSearchText("");
    setActiveTechnology("All");
  }



  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-slate-950">

      <section className="relative mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">

        <ProjectHero />


        <div className="mt-8">

          <ProjectFilter
            activeTechnology={activeTechnology}
            clearAll={clearAll}
            searchText={searchText}
            setActiveTechnology={setActiveTechnology}
            setSearchText={setSearchText}
          />


          <ProjectCard projects={filteredProjects} />

        </div>

      </section>

    </main>
  );
}
