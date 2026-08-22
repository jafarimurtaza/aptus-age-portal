export const metadata = {
  title: "About Afghan Geeks | Technology as an Act of Resistance",
  description:
    "Learn about Afghan Geeks, our mission, values, journey, partners, and the graduates building a future through technology and education.",
  keywords: [
    "Afghan Geeks",
    "Afghan women in technology",
    "Afghanistan technology",
    "technology education",
    "Afghan women education",
    "software development",
    "Afghan developers",
  ],
  authors: [{ name: "Afghan Geeks" }],
  creator: "Afghan Geeks",
  publisher: "Afghan Geeks",
 openGraph: {
  title: "About Afghan Geeks | Technology as an Act of Resistance",
  description:
    "Discover the mission, values, journey, partners, and graduates of Afghan Geeks.",
  type: "website",
  locale: "en_US",
  siteName: "Afghan Geeks",
  images: [
    {
      url: "/Images/about.png",
      width: 1200,
      height: 630,
      alt: "Afghan Geeks",
    },
  ],
},

  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutLayout({ children }) {
  return children;
}