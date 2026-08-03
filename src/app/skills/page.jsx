import SkillsGraph from "../../components/skills/SkillsGraph";

export default function SkillPage() {
  return (
  <main className="h-screen w-full overflow-hidden bg-primary">
 

      <div className="h-[calc(100vh-100px)] w-full">
        <SkillsGraph />
      </div>
    </main>
  );
}
