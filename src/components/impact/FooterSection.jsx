"use client";

import { GraduationCap } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-emerald-700 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="w-8 h-8 text-white" />
            <h2 className="text-2xl font-bold">
              Afghan Geeks
            </h2>
            </div>
            <p className="text-emerald-100 leading-7">
            Empowering Afghan women through technology education.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Contact
          </h3>
          <a href="mailto:info@afghangeeks.com"
            className="text-emerald-100 hover:text-white transition">
            info@afghangeeks.com
          </a>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Follow Us
            </h3>
            <div className="flex gap-5">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
              className="text-emerald-100 hover:text-white transition">
              GitHub
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="text-emerald-100 hover:text-white transition">
              LinkedIn
            </a>

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="text-emerald-100 hover:text-white transition">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-emerald-600">
        <p className="text-sm text-emerald-100">
          © 2026 Afghan Geeks. All rights reserved.
        </p>
      </div>
    </footer>
  );
}