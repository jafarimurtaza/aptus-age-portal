import GraduatesMain from "@/components/graduates/GraduatesMain";

export const metadata = {
  title: "Graduates",
  description:
    "Search Afghan Geeks graduates by name, skill, and availability. Review verified profiles, skills, and project experience.",
  openGraph: {
    title: "Graduates | Afghan Geeks Graduate Portal",
    description:
      "Browse trained Afghan Geeks graduates with verified skills, availability, and practical project evidence.",
    images: ["/Images/2.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Graduates | Afghan Geeks Graduate Portal",
    description:
      "Find Afghan Geeks graduates by skills, availability, and practical experience.",
    images: ["/Images/2.jpg"],
  },
};

export default function GraduatesPage() {
  return <GraduatesMain />;
}
