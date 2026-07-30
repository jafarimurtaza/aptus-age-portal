"use client";

import Link from "next/link";
import { FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const skills = [
  { name: "HTML", percent: 95, icon: FaHtml5, color: "#F97316" },
  { name: "CSS", percent: 90, icon: FaCss3Alt, color: "#3B82F6" },
  { name: "JavaScript", percent: 95, icon: FaJs, color: "#EAB308" },
  { name: "Next.js", percent: 85, icon: SiNextdotjs, color: "#E5E7EB" },
];

export default function SkillsPreview() {
  return (
    <section className="bg-[#0F2551] py-4 md:py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-base-100 pb-6">
            Skills <span className="text-[#C8955A]">Breakdown</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <Link key={skill.name} href="/skills" className="group bg-[#16305F] border border-white/5 rounded-xl px-4 py-5 sm:px-5 sm:py-6 flex flex-col items-center motion-safe:transition-colors motion-safe:duration-300 hover:border-[#C8955A]/40 hover:bg-[#183A6B]">
                <Icon className="text-3xl sm:text-4xl" style={{ color: skill.color }} />
                <h3 className="mt-3 text-sm font-semibold text-base-100">
                  {skill.name}
                </h3>
                <div className="mt-3 w-full h-1.5 bg-base-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#C8955A] rounded-full motion-safe:transition-all motion-safe:duration-500" style={{ width: `${skill.percent}%` }}/>
                </div>
                <span className="mt-1.5 text-xs font-mono text-base-100">
                  {skill.percent}%
                </span>
              </Link>
            );
          })}
        </div>

        <div className="flex justify-center items-center gap-2 mt-8">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C8955A]/40" />
          <span className="h-2 w-2 rounded-full bg-[#C8955A]/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#C8955A]/40" />
        </div>

        <div className="text-center pt-4">
          <Link href="/skills" className="inline-flex items-center gap-2 text-sm font-semibold text-[#C8955A] hover:text-white motion-safe:transition-colors">
            View All →
          </Link>
        </div>
      </div>
    </section>
  );
}
