// Hero.tsx
import { Route } from "lucide-react";
import { hero } from "./data/hero";
import HeroCards from "./HeroCards";

export default function Hero() {
  return (
    <section
      className="home-hero relative min-h-screen w-full overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Content sits ABOVE the ::before overlay */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-5 py-20 sm:px-8 lg:py-28">
        {/* ── Text Block ── */}
        <div className="home-hero-content text-center">
          {/* Badge - Removed rounded-full for straight edges */}
          <div
            className="inline-flex items-center gap-2 border border-gold/30 bg-navy/40 px-5 py-2 text-sm font-medium text-cream backdrop-blur-md"
            role="status"
          >
            <Route className="h-4 w-4 text-gold-light" aria-hidden="true" />
            <span>{hero.badge}</span>
          </div>

          {/* Heading - Increased desktop sizes & added drop-shadow for image readability */}
          <h1
            id="hero-heading"
            className="mx-auto mt-8 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-cream drop-shadow-[0_4px_16px_rgba(0,0,0,0.4)] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          >
            {hero.title.first}
            <br />
            <span className="bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
              {hero.title.highlight}
            </span>
          </h1>

          {/* Description - Increased desktop sizes & added drop-shadow */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-cream/90 drop-shadow-md sm:text-lg md:text-xl lg:text-2xl">
            {hero.description}
          </p>

          {/* Decorative divider - Removed rounded-[2px] for sharp edges */}
          <div
            className="mx-auto mt-8 flex items-center justify-center gap-3"
            aria-hidden="true"
          >
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/50" />
            <span className="h-2 w-2 rotate-45 bg-gold/60" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/50" />
          </div>
        </div>

        {/* ── Stat Cards ── */}
        <div className="mt-12 w-full sm:mt-14 lg:mt-16">
          <HeroCards />
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 h-32 bg-gradient-to-t from-base-100 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}