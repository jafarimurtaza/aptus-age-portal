import React from "react";
import HomeGraduates from "../components/home/HomeGraduates";
import HomeIntro from "../components/home/HomeIntro";

export default function page() {
  return (
    <main className="w-full bg-[#f8fafc]">
      <HomeIntro />
      <HomeGraduates />
    </main>
  );
}
