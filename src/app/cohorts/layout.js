export const metadata = {
  title: "Cohorts | Afghan Geeks",
  description:
    "Explore Afghan Geeks cohorts and discover the graduates, projects, and community building the future of tech talent in Afghanistan.",
  keywords: [
    "Afghan Geeks cohorts",
    "graduate cohorts",
    "Afghanistan tech talent",
    "digital skills network",
    "career growth",
    "tech education",
  ],
  alternates: {
    canonical: "https://www.afghangeeksedu.org/cohorts",
  },
  openGraph: {
    title: "Afghan Geeks Cohorts",
    description:
      "Meet the communities and graduates behind Afghanistan's growing pipeline of digital talent, problem-solvers, and future leaders.",
    url: "https://www.afghangeeksedu.org/cohorts",
    siteName: "Afghan Geeks",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.afghangeeksedu.org/Images/ai-technology.avif",
        width: 1200,
        height: 630,
        alt: "Afghan Geeks cohorts showcasing graduates and future leaders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Afghan Geeks Cohorts",
    description:
      "Explore the cohorts powering a new generation of skilled, community-driven tech talent across Afghanistan.",
    images: ["https://www.afghangeeksedu.org/Images/ai-technology.avif"],
  },
};

export default function CohortsLayout({ children }) {
  return children;
}
