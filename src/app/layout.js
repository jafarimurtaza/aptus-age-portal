
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: {
    default: "Afghan Geeks Graduate Portal",
    template: "%s | Afghan Geeks Graduate Portal",
  },
  description:
    "Discover trained Afghan Geeks graduates, their practical skills, and real project experience.",
  keywords: [
    "Afghan Geeks",
    "graduate portal",
    "Afghan tech talent",
    "software graduates",
    "web developers",
    "Aptus AI",
  ],
  authors: [{ name: "Afghan Geeks Education" }],
  openGraph: {
    title: "Afghan Geeks Graduate Portal",
    description:
      "A focused portal for discovering trained graduates, project evidence, and role-ready Afghan tech talent.",
    images: ["/Images/card1.jpg"],
    siteName: "Afghan Geeks Graduate Portal",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Afghan Geeks Graduate Portal",
    description:
      "Discover Afghan Geeks graduates through skills, projects, and verified learning experience.",
    images: ["/Images/card1.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="my-theme" lang="en">
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
