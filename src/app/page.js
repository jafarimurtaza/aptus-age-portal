import React from "react";
import AptusFeaturesslider from "../components/home/AptusFeaturesslider";
import AptusSection from "../components/home/AptusSection";
import FeaturedGraduates from "../components/home/FeaturedGraduates";
import HomeIntro from "../components/home/HomeIntro";

export default function page() {
  return (
    <main className="w-full bg-base-100 text-base-content">
      <HomeIntro />
      <FeaturedGraduates />
      <AptusSection />
      <AptusFeaturesslider />
    </main>
  );
}
