import GraduatesMain from "@/components/graduates/GraduatesMain";
import {
  fallbackGraduates,
  GRADUATES_API_URL,
  normalizeGraduateProfiles,
} from "@/components/graduates/data";

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

async function getGraduateProfiles() {
  try {
    const response = await fetch(GRADUATES_API_URL, {
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      return normalizeGraduateProfiles(fallbackGraduates);
    }

    const result = await response.json();

    return normalizeGraduateProfiles(result.data);
  } catch {
    return normalizeGraduateProfiles(fallbackGraduates);
  }
}

export default async function GraduatesPage() {
  const graduates = await getGraduateProfiles();

  return <GraduatesMain graduates={graduates} />;
}
