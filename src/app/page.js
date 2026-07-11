import React from "react";
import AptusFeatures from "../components/home/AptusFeatures";
import AptusSection from "../components/home/AptusSection";
import FeaturedGraduates from "../components/home/FeaturedGraduates";
import HomeIntro from "../components/home/HomeIntro";

export default function page() {
  return (
    <main className="w-full bg-[#f8fafc]">
      <HomeIntro />
      <FeaturedGraduates />
      <AptusSection />
      <AptusFeatures />
    </main>
  );
}
