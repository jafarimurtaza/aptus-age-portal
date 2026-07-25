import SkillsGraph from "../../components/skills/SkillsGraph";

export default function SkillPage() {
  return (
   <main className="h-screen w-screen bg-sand">
  {/* <main
  className="h-screen w-screen"
  style={{ backgroundColor: "red" }}
> */}

      <div className="h-[calc(100vh-100px)] w-full">
        <SkillsGraph />
      </div>
    </main>
  );
}
