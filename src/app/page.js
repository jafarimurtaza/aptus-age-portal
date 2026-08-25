import React from "react";
import AptusFeaturesslider from "../components/home/AptusFeaturesslider";
import AptusSection from "../components/home/AptusSection";
import FeaturedGraduates from "../components/home/FeaturedGraduates";
import HomeIntro from "../components/home/HomeIntro";

export const metadata = {
  title: "Home",
  description:
    "Explore Afghan Geeks graduates, featured profiles, Aptus AI, and project-ready talent for modern teams.",
  openGraph: {
    title: "Afghan Geeks Graduate Portal",
    description:
      "Meet trained Afghan tech graduates with verified skills, practical projects, and role-ready experience.",
    images: ["/Images/card1.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Afghan Geeks Graduate Portal",
    description:
      "Discover skilled Afghan Geeks graduates and the projects they are ready to build.",
    images: ["/Images/card1.jpg"],
  },
};

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
