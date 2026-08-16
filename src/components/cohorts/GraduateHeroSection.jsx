import { Route } from "lucide-react";
import { hero } from "./data/hero";
import HeroCards from "./HeroSectionCards";

export default function Hero() {
  return (
    <section
      className="home-hero relative min-h-screen w-full overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* ── Quiet overlay keeps the image present without competing with the content ── */}
      <div
        className="absolute inset-0 z-1 bg-neutral/55"
        aria-hidden="true"
      />

      {/* ── Subtle navy wash for readable text ── */}
      <div
        className="absolute inset-0 z-2 bg-linear-to-r from-neutral/70 via-neutral/35 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 py-20 sm:px-8 lg:py-24">
        {/* ── Text Block ── */}
        <div className="home-hero-content max-w-3xl text-left">

          <div
            className="inline-flex items-center gap-2 border border-primary/50 bg-neutral/40 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-base-100 backdrop-blur-sm"
          >
            <Route className="h-4 w-4 text-primary" aria-hidden="true" />
            Afghan Geeks cohorts
          </div>

          <h1
            id="hero-heading"
            className="mt-7 max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-base-100 sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {hero.title.first}
            <br />
            <span className="text-primary">
              {hero.title.highlight}
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-base-100/80 sm:text-lg sm:leading-8">
            {hero.description}
          </p>

          <div className="mt-8 h-1 w-16 bg-primary" aria-hidden="true" />
        </div>

        {/* ── Stat Cards ── */}
        <div className="mt-14 w-full sm:mt-16 lg:mt-20">
          <HeroCards />
        </div>
      </div>

      {/* Clean transition into the page background */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 h-16 bg-linear-to-t from-base-100/90 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}