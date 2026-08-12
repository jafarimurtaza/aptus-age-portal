import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import Testimonials from "@/components/contact/Testimonials";
import SocialLinks from "@/components/contact/SocialLinks";
import FAQ from "@/components/contact/FAQ";
import ContactCTA from "@/components/contact/ContactCTA";

export const metadata = {
  title: "Contact Us | Afghan Geeks",
  description:
    "Get in touch with Afghan Geeks. We would love to hear from you.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />

      <ContactInfo />

      <Testimonials />

      <SocialLinks />

      <FAQ />

      <ContactCTA />
    </main>
  );
}
