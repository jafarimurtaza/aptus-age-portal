import SkillsGraph from "../../components/skills/SkillsGraph";

export const metadata = {
  title: "Skill Map",
  description:
    "An interactive map of front-end, back-end, DevOps, and data/ML skills.",
};

export default function SkillPage() {
  return (
    <main className="h-screen w-screen bg-[#0b0a13]">
      <div className="px-6 pt-6">
        <h1 className="text-3xl font-bold text-slate-100">Skills Map</h1>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-400">
          Explore graduate students' skills, technical expertise, and areas of
          specialization through an interactive skill map.
        </p>
      </div>

      <div className="h-[calc(100vh-100px)] w-full">
        <SkillsGraph />
      </div>
    </main>
  );
}
