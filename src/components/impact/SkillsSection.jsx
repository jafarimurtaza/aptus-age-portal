  "use client";

  import {FaReact,FaPython,FaJs,FaHtml5,FaCss3Alt,FaNodeJs,} from "react-icons/fa";
  import {SiNextdotjs,SiPostgresql,} from "react-icons/si";
  export default function SkillsSection() {
  const skills = [
    {
      name: "HTML",
      percent: 95,
      icon: FaHtml5,
      color: "text-orange-500",
    },
    {
      name: "CSS",
      percent: 90,
      icon: FaCss3Alt,
      color: "text-blue-500",
    },
    {
      name: "JavaScript",
      percent: 95,
      icon: FaJs,
      color: "text-yellow-500",
    },
    {
      name: "React",
      percent: 90,
      icon: FaReact,
      color: "text-cyan-500",
    },
    {
      name: "Next.js",
      percent: 85,
      icon: SiNextdotjs,
      color: "text-gray-900",
    },
    {
      name: "Python",
      percent: 80,
      icon: FaPython,
      color: "text-blue-600",
    },
    {
      name: "Node.js",
      percent: 85,
      icon: FaNodeJs,
      color: "text-green-600",
    },
    {
      name: "PostgreSQL",
      percent: 80,
      icon: SiPostgresql,
      color: "text-blue-700",
    },
  ];
  return (
      <section className="bg-[#1B3A6B] py-16 md:py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
      Skills <span className="text-[#C8955A]">Breakdown</span>
      </h2>
      <div className="mx-auto mt-5 w-40 h-1 bg-gradient-to-r from-transparent via-[#C8955A] to-transparent"/>
      </div>
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-8">
      {skills.map((skill)=>{const Icon = skill.icon;
          return (
            <div key={skill.name}
                className="bg-[#F3F4F6] rounded-2xl py-5 px-5 flex flex-col items-center shadow-md hover:border-dark  hover:-translate-y-1 cursor-pointer transition duration-300">
              {/* Circle */}
              <div className="relative w-24 h-24">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" stroke="#E8E1D6" strokeWidth="5" fill="none"/>
              <circle cx="50" cy="50" r="42"stroke="#C8955A" strokeWidth="5" fill="none" strokeLinecap="round"
                strokeDasharray="264" strokeDashoffset={264 - (264 * skill.percent) / 100}/>
                </svg>
                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                <Icon className={`text-5xl ${skill.color}`}/>
                </div>
                </div>
                <p className="mt-4 text-lg font-bold text-[#1B3A6B]">
                {skill.percent}%
                </p>
                <h3 className="mt-1 text-sm font-semibold">
                {skill.name}
                </h3>
              </div>
              );
            })}
          </div>
          </div>
        </section>
      );
    }