import React from "react";
import ImpactHeroSection from "./ImpactHeroSection";
import GraduateSection from "./GraduateSection";
import CohortProgressSection from "./CohortProgressSection";
import SkillsSection from "./SkillsSection";
export default function ImpactMain() {
  return (
    <div>
      <ImpactHeroSection />
      <GraduateSection />  
      <CohortProgressSection />
      <SkillsSection/>
    </div>
  );
}