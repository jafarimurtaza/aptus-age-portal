import ImpactMain from "@/components/impact/ImpactMain";

export const metadata = {
  title: "Impact | Afghan Geeks",
  description:
    "Afghan Geeks trains the next generation of tech talent through hands-on education, mentorship, and real-world project experience.",
};

async function getImpactData() {
  const res = await fetch(process.env.IMPACT_API_URL, { cache: "no-store" });
  return res.json();
}

export default async function Impact() {
  const data = await getImpactData();
  return <ImpactMain data={data} />;
}