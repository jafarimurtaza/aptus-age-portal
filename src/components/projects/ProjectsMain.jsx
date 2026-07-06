"use client";

import { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import ProjectSearch from "./ProjectSearch";

const projects = [
  {
    title: "NGO Directory Platform",
    graduate: "Zainab Mohammadi",
    description:
      "A platform that connects NGOs with volunteers, donors, and beneficiaries for social impact projects across local communities.",
    views: "124",
    tags: ["UI/UX", "React", "MongoDB"],
  },
  {
    title: "Remote Workspace",
    graduate: "Ahmad Zia",
    description:
      "A workspace that helps remote teams manage projects, assign tasks, plan meetings, and track daily progress in one place.",
    views: "98",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Clinic Queue System",
    graduate: "Sahar Karimi",
    description:
      "A clinic system that organizes patient queues, appointments, staff workload, and service updates for faster healthcare support.",
    views: "156",
    tags: ["Python", "FastAPI", "PostgreSQL"],
  },
];

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
        project.tags.some((tag) => tag.toLowerCase().includes(search));

      const matchTechnology =
        activeTechnology === "All" || project.tags.includes(activeTechnology);

      return matchSearch && matchTechnology;
    });
  }, [activeTechnology, searchText]);

  function clearAll() {
    setSearchText("");
    setActiveTechnology("All");
  }

  return (
    <main className="min-h-screen bg-[#edf8ef] text-slate-950">
      <section className="mx-auto w-full max-w-7xl px-5 py-7 sm:px-8 lg:px-10">
        <div className="grid min-h-[315px] items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="max-w-2xl">
            <div className="badge badge-success mb-6 border-0 bg-[#0f4e12] px-3 py-3 text-xs font-medium text-white">
              Showcasing Graduate Excellence
            </div>

            <h1 className="max-w-[680px] text-4xl font-black leading-tight tracking-normal sm:text-5xl lg:text-[52px]">
              Explore Innovative Projects Built by{" "}
              <span className="text-[#096226]">Afghan Geeks</span>
            </h1>

            <button className="btn mt-8 border-0 bg-[#0f4e12] px-7 text-lg font-extrabold text-white hover:bg-[#0b3d0e]">
              Meet Our Graduates
            </button>
          </div>

          <div className="mx-auto hidden w-full max-w-[430px] lg:block">
            <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-2xl shadow-emerald-900/15">
              <div className="aspect-[16/10] overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                <div className="h-full bg-gradient-to-br from-slate-50 via-emerald-50 to-slate-200" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <ProjectSearch
            clearAll={clearAll}
            searchText={searchText}
            setSearchText={setSearchText}
          />
          <ProjectFilter
            activeTechnology={activeTechnology}
            setActiveTechnology={setActiveTechnology}
          />
          <ProjectCard projects={filteredProjects} />
        </div>
      </section>
    </main>
  );
}
