import SkillsGraph from "../../components/skill-page/SkillsGraph";

export const metadata = {
  title: "Skill Map",
  description: "An interactive map of front-end, back-end, DevOps, and data/ML skills.",
};

export default function SkillPage() {
  return (
    <main className="h-screen w-screen bg-[#0b0a13]">
      <SkillsGraph />
    </main>
  );
}