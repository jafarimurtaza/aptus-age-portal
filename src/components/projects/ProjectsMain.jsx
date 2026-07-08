"use client";

import { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";

const projects = [
  {
    slug: "ngo-directory-platform",
    title: "NGO Directory Platform",
    graduate: "Zainab Mohammadi",
    description:
      "A platform that connects NGOs with volunteers, donors.",
    views: "124",
    tags: ["UI/UX", "React", "MongoDB"],
  },
  {
    slug: "remote-workspace",
    title: "Remote Workspace",
    graduate: "Ahmad Zia",
    description:
      "A workspace that helps remote teams manage projects, assign tasks.",
    views: "98",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    slug: "clinic-queue-system",
    title: "Clinic Queue System",
    graduate: "Sahar Karimi",
    description:
      "A clinic system that organizes patient queues, appointments, staff workload.",
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
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-100 via-sky-50 to-amber-50 text-slate-950">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-300/40 blur-3xl" />
      <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-sky-300/35 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-amber-200/50 blur-3xl" />

      <section className="relative mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="text-center lg:text-left">
            <div className="badge badge-success mb-5 border-0 bg-green-900 px-3 py-3 text-xs font-medium text-white sm:text-sm">
              Showcasing Graduate Excellence
            </div>

            <h1 className="mx-auto max-w-3xl text-3xl font-black leading-tight sm:text-4xl md:text-5xl lg:mx-0">
              Explore Innovative Projects Built by{" "}
              <span className="text-emerald-800">Afghan Geeks</span>
            </h1>

            <button className="btn mt-6 border-0 bg-green-900 px-6 text-base font-extrabold text-white hover:bg-green-950 sm:text-lg">
              Meet Our Graduates
            </button>
          </div>

          <div className="mx-auto w-full max-w-md">
            <div className="rounded-2xl border border-emerald-100 bg-white p-3 shadow-xl shadow-emerald-900/10 sm:p-4">
              <div className="aspect-video overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                <div className="h-full bg-gradient-to-br from-slate-50 via-emerald-50 to-slate-200" />
              </div>
            </div>
          </div>
        </div>

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
