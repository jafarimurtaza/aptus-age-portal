import React from "react";
import HeaderSection from "./HeaderSection"
import ImpactHeroSection from "./ImpactHeroSection";
import GraduateSection from "./GraduateSection";
import CohortProgressSection from "./CohortProgressSection";
import SkillsSection from "./SkillsSection";
import FooterSection from "./FooterSection"

export default function ImpactMain() {
  return (
    <div>
      <HeaderSection/>
      <ImpactHeroSection />
      <GraduateSection />  
      <CohortProgressSection />
      <SkillsSection/>
      <FooterSection/>
    </div>
  );
}