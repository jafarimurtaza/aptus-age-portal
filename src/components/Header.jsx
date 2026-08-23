"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, GraduationCap } from "lucide-react";
export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Graduates", href: "/graduates" },
    { name: "Projects", href: "/projects" },
    { name: "Aptus", href: "/aptus" },
    { name: "Impact", href: "/impact" },
    { name: "Cohorts", href: "/cohorts" },
    { name: "Skills", href: "/skills" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="bg-base-300 text-cream sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 lg:px-12 py-3 sm:py-4">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-11 h-11 sm:w-10 sm:h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
            <GraduationCap size={25} className="text-[#1B3A6B]"/>
          </div>

          <div className="flex flex-col leading-tight min-w-0">
            <span className="text-xl sm:text-xl lg:text-2xl font-bold text-base-100">
              Afghan <span className="text-primary">Geeks</span>
            </span>
            <span className="text-primary text-[10px] mt-1">
              EDUCATION
            </span>
          </div>
        </Link>
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm xl:text-base font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="text-base-100 hover:text-primary transition-colors duration-200">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      <Link href="/contact" className="hidden lg:block px-4 xl:px-5 py-2 rounded-lg bg-primary text-[#1B3A6B] font-semibold hover:bg-[#d9a56b] transition">
          Get Started
        </Link>
        <button className="lg:hidden text-base-100" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu size={26}/>
        </button>
      </nav>
      <div className={`fixed inset-0 bg-base-content z-40 lg:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          onClick={() => setOpen(false)}  aria-hidden="true"/>
      <div className={`fixed top-0 right-0 h-full w-64 sm:w-72 bg-base-300 text-cream z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"}`}>

        <div className="flex items-center justify-between px-6 md:px-8 lg:px-12 py-4 border-b border-white/10">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={26} className="text-base-200" />
          </button>
        </div>
      <ul className="flex flex-col gap-5 px-6 md:px-8 lg:px-12 py-6 text-base">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="text-white/80 hover:text-primary active:text-[#C8955A] transition" onClick={() => setOpen(false)} >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      <div className="px-6 md:px-8 lg:px-12">
          <Link href="/login" className="block w-full text-center px-5 py-2 rounded-lg bg-primary text-[#1B3A6B] font-semibold hover:bg-[#d9a56b] transition" onClick={() => setOpen(false)}>
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
