"use client";

import { useState } from "react";

export default function ProjectsMain() {
  const [searchText, setSearchText] = useState("");

  function searchProjects(event) {
    event.preventDefault();
  }

  function clearSearch() {
    setSearchText("");
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
              className="btn h-14 rounded-full border-0 bg-[#0f4e12] px-8 text-lg font-black text-white shadow-md shadow-emerald-900/15 hover:bg-[#0b3d0e]"
              type="submit"
            >
              Search
            </button>

            <button
              className="btn h-14 rounded-full border border-[#188046] bg-white px-6 text-sm font-black text-[#188046] shadow-md shadow-emerald-900/10 hover:bg-emerald-50"
              onClick={clearSearch}
              type="button"
            >
              Clear All
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
