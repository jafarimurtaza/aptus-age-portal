"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, GraduationCap } from "lucide-react";

export default function HeaderSection() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Graduates", href: "/graduates" },
    { name: "Projects", href: "/projects" },
    { name: "Aptus", href: "/aptus-ai" },
    { name: "Impact", href: "/impact" },
    { name: "Cohorts", href: "/cohorts" },
    { name: "Skills", href: "/skills" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="bg-[#1B3A6B] text-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">

        {/* Logo with GraduationCap + Education */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#C8955A] flex items-center justify-center">
            <GraduationCap size={22} className="text-[#1B3A6B]" />
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-xl sm:text-2xl font-bold">
              Afghan <span className="text-[#C8955A]">Geeks</span>
            </span>
            <span className="text-sm text-white/80 -mt-1">Education</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-base font-medium text-white/80">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="hover:text-[#C8955A] transition">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/apply"
          className="hidden md:block px-4 lg:px-5 py-2 rounded-lg bg-[#C8955A] text-[#1B3A6B] font-semibold hover:bg-[#d9a56b] transition"
        >
          Get Started
        </Link>

        <button className="md:hidden text-white" onClick={() => setOpen(true)}>
          <Menu size={28} />
        </button>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full w-56 sm:w-64 bg-[#162F59] text-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={() => setOpen(false)}>
            <X size={28} className="text-white" />
          </button>
        </div>

        <ul className="flex flex-col gap-5 px-5 py-6 text-base">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-white/80 hover:text-[#C8955A] active:text-[#C8955A] transition"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="px-5">
          <Link
            href="/apply"
            className="block w-full text-center px-5 py-2 rounded-lg bg-[#C8955A] text-[#1B3A6B] font-semibold hover:bg-[#d9a56b] transition"
            onClick={() => setOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
