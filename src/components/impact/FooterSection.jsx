import React from "react";
import { GraduationCap } from "lucide-react";
export default function Footer() {
  return (
        <footer className="bg-green-700 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-green-100" />
            <h2 className="text-2xl font-bold">
            Afghan Geeks
            </h2>
            </div>
            <p className="mt-4 text-green-100 leading-7">
            Empowering Afghan women through technology education</p>
            </div>
            <div>
            <h3 className="text-lg font-semibold mb-4">
            Quick Links
            </h3>
            <ul className="space-y-3 text-green-100">
              <li className="hover:text-white cursor-pointer">
              Graduates
              </li>
              <li className="hover:text-white cursor-pointer">
                Projects
              </li>
              <li className="hover:text-white cursor-pointer">
              Aptus AI 
              </li>
                <li className="hover:text-white cursor-pointer">
                About
                </li>
              </ul>
            </div>
            <div>
            <h3 className="text-lg font-semibold mb-4">
            Connect
            </h3>
            <p className="text-green-100">
            Email: info@afghangeeks.com
            </p>
            <p className="mt-2 text-green-100">
            Follow us on social media
            </p>
          </div>
        </div>
        <div className="border-t border-green-500 mt-10 pt-6 text-left text-green-100 text-sm">
        © 2026 Afghan Geeks. All rights reserved.
        </div>
        </div>
    </footer>
  );
}