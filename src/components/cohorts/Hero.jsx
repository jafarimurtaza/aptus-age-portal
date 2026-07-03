import { Route } from "lucide-react";
import { hero } from "../../data/hero";
import HeroCards from "./HeroCards";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Left Glow */}
        <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-primary/15 blur-[120px]" />

        {/* Right Glow */}
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-secondary/15 blur-[140px]" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:28px_28px]" />
      </div>

      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="grid items-center gap-16 xl:grid-cols-[0.85fr_1.15fr]">
      

          <div className="text-center xl:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-sm font-medium text-primary backdrop-blur-md">
              <Route className="h-4 w-4" />

              <span>{hero.badge}</span>
            </div>

            <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight lg:text-6xl 2xl:text-7xl">
              {hero.title.first}

              <br />

              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                {hero.title.highlight}
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-base-content/65 xl:mx-0">
              {hero.description}
            </p>
          </div>

          <HeroCards />
        </div>
      </div>
    </section>
  );
}