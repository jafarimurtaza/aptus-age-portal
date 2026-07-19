
import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { FaGithub, FaLinkedin} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-transparent text-gray-700">

      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Afghan Geeks */}
        <div className="w-full">
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-green-100 p-3 rounded-xl">
              <GraduationCap className="text-green-600"size={18}/>
            </div>
            <h2 className="text-xl font-bold text-gray-900">
              Afghan Geeks
            </h2>
            </div>
            <p className="text-gray-600 leading-7 max-w-sm">
            Empowering Afghan women through technology education,
            innovation, and career opportunities.
            </p>

          {/* Icons */}
          <div className="flex gap-4 mt-4 ml-0">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-gray-200 hover:border-green-500 hover:text-green-600 transition">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com"target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-gray-200 hover:border-green-500 hover:text-green-600 transition">
              <FaLinkedin size={20} />
            </a>
            </div>
            </div>
         {/* Quick Links */}
          <div className="w-full mx-10">
            <h3 className="text-gray-900 text-lg font-semibold mb-5">
            Quick Links
            </h3>
            <ul className="space-y-3">
            <li>
              <Link href="/graduates" className="hover:text-green-600 transition">
                Graduates
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-green-600 transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/aptus-ai" className="hover:text-green-600 transition">
                Aptus
              </Link>
            </li>
            <li>
              <Link href="/impact" className="hover:text-green-600 transition">
                Impact
              </Link>
            </li>
            <li>
              <Link href="/cohorts" className="hover:text-green-600 transition">
                Cohorts
              </Link>
            </li>
            <li>
              <Link href="/skills" className="hover:text-green-600 transition">
                Skills
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-green-600 transition">
                About
              </Link>
            </li>
          </ul>
        </div>
       {/* Contact */}
        <div className="w-full">
          <h3 className="text-gray-900 text-lg font-semibold mb-5">
            Contact
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="mailto:info@afghangeeks.com" className="hover:text-green-600 transition">
                info@afghangeeks.com
              </a>
            </li>
            <li className="text-gray-500">
              Kabul, Afghanistan
            </li>
            <li className="text-gray-500">
              Community Support
            </li>
          </ul>
        </div>
      </div>
     {/* Bottom Section */}
      <div className="border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">
            © 2026 Afghan Geeks. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Real talent. Real projects. Ready to build.
          </p>
        </div>
      </div>
    </footer>
  );
}