"use client";

import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
    const navLink = (path) =>`pb-1 transition-all duration-300 ${pathname === path? "text-green-600 border-b-2 border-green-600": "text-gray-700 hover:text-green-600"}`;
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-10 py-5 flex items-center justify-between">
       {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-green-100 p-3 rounded-xl">
            <GraduationCap className="text-green-600" size={26}/>
          </div>
            <h1 className="text-xl font-bold text-gray-900">
            Afghan Geeks
            </h1>
          </div>
         {/* Navigation */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <Link href="/" className={navLink("/")}>
            Graduates
            </Link>
            <Link href="/projects" className={navLink("/projects")}>
            Projects
            </Link>
            <Link href="/aptus" className={navLink("/aptus")}>
            Aptus
            </Link>
            <Link href="/impact" className={navLink("/impact")}>
            Impact
            </Link>
            <Link href="/cohorts" className={navLink("/cohorts")}>
            Cohorts
            </Link>
            <Link href="/skills" className={navLink("/skills")}>
            Skills
            </Link>
            <Link href="/about" className={navLink("/about")}>
            About
            </Link>
          </div>
         {/* Button */}
            <Link href="/contact" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-md hover:shadow-lg">
              Get Started
            </Link>
            </nav>
          </header>
      );
    }