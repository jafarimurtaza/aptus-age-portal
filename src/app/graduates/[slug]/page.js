import { notFound } from "next/navigation";
import GraduateDetail from "@/components/graduates/GraduateDetail";
import { graduates } from "@/components/graduates/data";

export async function generateStaticParams() {
  return graduates.map((graduate) => ({
    slug: graduate.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const graduate = graduates.find((item) => item.slug === slug);

  if (!graduate) {
    return {
      title: "Graduate Not Found | Afghan Geeks",
    };
  }

  return {
    title: graduate.name,
    description: `${graduate.name} is a verified Afghan Geeks graduate focused on ${graduate.role.toLowerCase()} with skills in ${graduate.skills.join(", ")}.`,
    openGraph: {
      title: `${graduate.name} | Afghan Geeks Graduate`,
      description: graduate.bio,
      images: [graduate.projectImage],
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: `${graduate.name} | Afghan Geeks Graduate`,
      description: graduate.bio,
      images: [graduate.projectImage],
    },
  };
}

export default async function GraduateDetailPage({ params }) {
  const { slug } = await params;
  const graduate = graduates.find((item) => item.slug === slug);

  if (!graduate) {
    notFound();
  }

  return <GraduateDetail graduate={graduate} />;
}
