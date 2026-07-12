"use client";

import Link from "next/link";
import { GraduationCap } from "lucide-react";
export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-green-700">
        <GraduationCap className="w-8 h-8 text-green-600" />
        <span>
        Afghan Geeks
        </span>
        </Link>
        <div className="flex gap-8 text-gray-700">
        <Link  href="/"className="hover:text-green-600" >
          Graduates
        </Link>
        <Link  href="/impact" className="hover:text-green-600">
          Projects
        </Link>
        <Link href="/projects" className="hover:text-green-600">
          Aptus
        </Link>
        <Link href="/contact" className="hover:text-green-600">
          Impact
        </Link>
        <Link href="/contact" className="hover:text-green-600">
          Cohorts
        </Link>
        <Link href="/contact" className="hover:text-green-600">
          Skills
        </Link>
        <Link href="/contact" className="hover:text-green-600">
          About
        </Link>
        </div>
        </nav>
      </header>
  );
}