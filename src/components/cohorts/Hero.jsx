import { Route } from "lucide-react";
import { hero } from "./data/hero";
import HeroCards from "./HeroCards";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Left Glow */}
        <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-none bg-[rgba(200,149,90,0.14)] blur-[120px]" />

        {/* Right Glow */}
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-none bg-[rgba(27,58,107,0.12)] blur-[140px]" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(11,15,25,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />
      </div>

      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="grid items-center gap-16 xl:grid-cols-[0.85fr_1.15fr]">
      

          <div className="text-center xl:text-left text-[var(--color-dark)]">
            <div className="inline-flex items-center gap-2 rounded-none border border-[var(--color-gold)]/20 bg-[var(--color-gold)]/10 px-5 py-2 text-sm font-medium text-[var(--color-dark)] shadow-sm backdrop-blur-md">
              <Route className="h-4 w-4 text-[var(--color-NAVY)]" />

              <span>{hero.badge}</span>
            </div>
            <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight lg:text-6xl 2xl:text-7xl">
              {hero.title.first}
              <br />
              <span className="bg-gradient-to-r from-[var(--color-gold)] via-[var(--color-NAVY)] to-[var(--color-gold)] bg-clip-text text-transparent">
                {hero.title.highlight}
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-[var(--color-dark)]/75 xl:mx-0">
              {hero.description}
            </p>
          </div>
          <HeroCards />
        </div>
      </div>
    </section>
  );
}