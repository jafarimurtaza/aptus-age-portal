import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="bg-base-100 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden bg-base-300 px-6 py-14 text-center shadow-2xl sm:px-12">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />

          <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Let&apos;s Connect
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
              Have Something to Share?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70">
              We are always interested in hearing new ideas, opportunities, and
              ways to make a positive impact.
            </p>

            <Link
              href="#"
              className="mt-8 inline-flex rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-white transition hover:bg-primary/90"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
