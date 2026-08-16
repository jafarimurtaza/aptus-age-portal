"use client";

import Link from "next/link";
import {GraduationCap, Mail, Laptop, Globe, ArrowRight, Phone,} from "lucide-react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
export default function Footer() {
  const quickLinks = [
    { name: "Graduates", href: "/graduates" },
    { name: "Projects", href: "/projects" },
    { name: "Aptus", href: "/aptus" },
    { name: "Impact", href: "/impact" },
    { name: "Cohorts", href: "/cohorts" },
    { name: "Skills", href: "/skills" },
    { name: "About", href: "/about" },
  ];

  return (
    <footer className="bg-base-300 text-base-100">
      <div className="h-1 bg-primary" />
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center">
                <GraduationCap size={25} className="text-base-300"/>
              </div>
              <div className="flex flex-col">
                <h2 className="text-xl font-bold text-base-100">
                  Afghan <span className="text-primary">Geeks</span>
                </h2>
                <span className="text-primary text-[10px] mt-1">
                  EDUCATION
                </span>
              </div>
            </div>
            <p className="mt-5 text-white/70 leading-7 max-w-md">
              Empowering Afghan women through technology education, innovation,
              and career opportunities in tech.
            </p>

            <div className="flex gap-3 mt-7">
              <a href="https://www.facebook.com/people/Afghan-Geeks/61575217270004/" target="_blank" rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-[#152D52] border border-white/10 flex items-center justify-center hover:bg-[#C8955A] hover:text-[#1B3A6B] hover:-translate-y-1 transition-all">
                <FaFacebook size={20} />
              </a>

              <a href="https://www.linkedin.com/company/afghan-geeks-education/posts/?feedView=all" target="_blank" rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-[#152D52] border border-white/10 flex items-center justify-center hover:bg-[#C8955A] hover:text-[#1B3A6B] hover:-translate-y-1 transition-all">
                <FaLinkedin size={20} />
              </a>

              <a href="https://www.youtube.com/@afghangeeks" target="_blank" rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-[#152D52] border border-white/10 flex items-center justify-center hover:bg-[#C8955A] hover:text-[#1B3A6B] hover:-translate-y-1 transition-all">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-base-100 text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center text-white/70 hover:text-primary transition">
                    <ArrowRight size={14} className="mr-2 text-primary opacity-0 group-hover:opacity-100 transition"/>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-base-100 font-semibold mb-6">Contact</h3>
            <div className="space-y-6">
              <div className="flex gap-3">
                <Mail size={21} className="text-primary mt-1" />
                <div>
                  <a href="mailto:info@afghangeeks.com">info@afghangeeks.com</a>
                  <p className="text-sm text-white/50">General inquiries</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone size={21} className="text-primary mt-1" />
                <div>
                  <a href="tel:+306947717531">+30 694 771 7531</a>
                  <p className="text-sm text-white/50">Support line</p>
                </div>
              </div>
                <div className="flex gap-3">
                <Laptop size={21} className="text-primary mt-1" />
                <div>
                  <p>Remote Learning</p>
                  <p className="text-sm text-white/50">Online technology education</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Globe size={21} className="text-primary mt-1" />
                <div>
                  <p>Worldwide Access</p>
                  <p className="text-sm text-white/50">Learning without border</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-sm text-white/60">
            © 2026 Afghan Geeks. All rights reserved.
          </p>
            <div className="flex gap-6 text-sm text-white/60">
            <Link href="https://www.afghangeeksedu.org/en/legal/privacy-policy" className="hover:text-primary transition">
              Privacy Policy
            </Link>
            <Link href="https://www.afghangeeksedu.org/en/legal/terms-of-service" className="hover:text-primary transition">
              Terms of Service
            </Link>
            <Link href="https://www.afghangeeksedu.org/en/legal/cookie-policy" className="hover:text-primary transition">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
