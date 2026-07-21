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
      <section className="md:px-10 lg:px-30">
      <h2 className="text-3xl font-bold text-center mb-12 text-cream pt-8">
      Skills Breakdown
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6 ">

          {skills.map((skill)=>{const Icon = skill.icon;
          return (
            <div key={skill.name}
              className="bg-sand/90 text-dark border border-white/20 rounded-2xl py-5 px-5 flex flex-col items-center shadow-md border border-dark-500 hover:border-dark  hover:-translate-y-1 cursor-pointer transition duration-300">

              {/* Circle */}
              <div className="relative w-24 h-24">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" stroke="#FAF7F2" strokeWidth="5" fill="none"/>
              <circle cx="50" cy="50" r="42"stroke="#1B3A6B" strokeWidth="5" fill="none" strokeLinecap="round"
                strokeDasharray="264" strokeDashoffset={264 - (264 * skill.percent) / 100}/>
                </svg>
                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                <Icon className={`text-5xl ${skill.color}`}/>
                </div>
                </div>
                <p className="mt-4 text-lg font-bold text-gold">
                {skill.percent}%
                </p>
                <h3 className="mt-1 text-sm font-semibold text-dark">
                {skill.name}
                </h3>
              </div>
              );
            })}
          </div>
        </section>
      );
    }