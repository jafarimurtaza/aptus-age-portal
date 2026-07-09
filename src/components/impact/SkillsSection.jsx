import React from "react";

export default function SkillsBreakdownSection() {
  const skills = [
    { name: "React", level: "60%" },
    { name: "TypeScript", level: "15%" },
    { name: "Python", level: "50%" },
    { name: "Figma", level: "35%" },
    { name: "Next.js", level: "90%" },
    { name: "Tailwind CSS", level: "90%" },
    { name: "Node.js", level: "75%" },
    { name: "PostgreSQL", level: "10%" },
  ];

  return (
    <section className="bg-gradient-to-r from-white via-green-50 to-green-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <span className="inline-flex px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold uppercase tracking-wide">
            Technologies
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
            Skills Breakdown
          </h2>

          <p className="mt-4 text-lg text-gray-600">
           Top 8 skills across all graduates
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                border
                border-green-100
                p-6
                shadow-md
                hover:shadow-xl
                transition-all
              "
            >

              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-900">
                  {skill.name}
                </h3>

                <span className="text-green-600 font-semibold">
                  {skill.level}
                </span>
              </div>


              <div className="h-3 bg-green-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-600 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}