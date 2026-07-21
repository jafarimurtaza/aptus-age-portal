
import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { FaGithub, FaLinkedin} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-cream text-dark border-t border-navy mt-10">

      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-10 py-10">

        {/* Afghan Geeks */}
        <div className="w-full">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-navy p-3 rounded-xl">
              <GraduationCap className="text-cream"size={18}/>
            </div>
            <h2 className="text-xl font-bold text-dark">
              Afghan Geeks
            </h2>
            </div>
            <p className="text-gray-800 leading-7 max-w-sm">
            Empowering Afghan women through technology education,
            innovation, and career opportunities.
            </p>

          {/* Icons */}
          <div className="flex gap-4 mt-4 ml-0">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-dark hover:border-gold hover:text-dark transition">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com"target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-dark hover:border-gold hover:text-navy transition">
              <FaLinkedin size={20} />
            </a>
            </div>
            </div>
         {/* Quick Links */}
          <div className="w-full">
            <h3 className="text-dark text-lg font-semibold mb-3">
            Quick Links
            </h3>
            <ul className="space-y-3 mb-3">
            <li>
              <Link href="/graduates" className=" text-gray-800 hover:text-navy transition">
                Graduates
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-gray-800 hover:text-navy transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/aptus-ai" className="text-gray-800 hover:text-navy transition">
                Aptus
              </Link>
            </li>
            <li>
              <Link href="/impact" className="text-gray-800 hover:text-navy transition">
                Impact
              </Link>
            </li>
            <li>
              <Link href="/cohorts" className="hover:text-navy text-gray-800 transition">
                Cohorts
              </Link>
            </li>
            <li>
              <Link href="/skills" className="text-gray-800 hover:text-navy transition">
                Skills
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-800 hover:text-navy transition">
                About
              </Link>
            </li>
          </ul>
        </div>
       {/* Contact */}
        <div className="w-full">
          <h3 className="text-gray-800 text-lg font-semibold mb-3">
            Contact
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="mailto:info@afghangeeks.com" className="hover:text-navy text-gray-800 transition">
                info@afghangeeks.com
              </a>
            </li>
            <li className="text-gray-800">
              Kabul, Afghanistan
            </li>
            <li className="text-gray-800">
              Community Support
            </li>
          </ul>
        </div>
      </div>
     {/* Bottom Section */}
      <div className="border-t border-navy">
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