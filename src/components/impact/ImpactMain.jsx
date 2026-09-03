"use client";

import ImpactHeroSection from "./ImpactHeroSection";
import GraduateSection from "./GraduateSection";
import CohortProgressSection from "./CohortProgressSection";
import SkillsSection from "./SkillsSection";

export default function ImpactMain({ data }) {
  return (
    <div>
      <ImpactHeroSection totals={data.totals} openToWork={data.openToWork} />
      <GraduateSection />
      <CohortProgressSection />
      <SkillsSection />
    </div>
  );
}