import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactItems = [
  {
    icon: MapPin,
    title: "Our Location",
    text: "Afghanistan",
  },
  {
    icon: Phone,
    title: "Phone",
    text: "+93 700 000 000",
  },
  {
    icon: Mail,
    title: "Email",
    text: "info@afghangeeks.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    text: "Saturday - Thursday",
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-base-200 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Contact Information
          </span>

          <h2 className="mt-3 text-4xl font-extrabold text-base-300">
            We&apos;re Here to Help
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group border border-base-300/15 bg-base-100 p-7 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-base-300 text-primary">
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-base-300">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-base-content/60">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
