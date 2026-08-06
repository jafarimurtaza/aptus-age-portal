import { hero } from "./data/hero";

export default function HeroCards() {
  return (
    <div
      className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4"
      role="list"
      aria-label="Key statistics"
    >
      {hero.stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <article
            key={stat.id}
            className="group relative overflow-hidden border border-white/5 bg-navy/80 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:bg-navy/90 sm:p-6"
            role="listitem"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            {/* Subtle top gradient */}
            <div
              className="absolute inset-0 bg-gradient-to-b from-gold/[0.06] to-transparent"
              aria-hidden="true"
            />

            {/* Centered Content */}
            <div className="relative flex h-full flex-col items-center text-center">
              {/* Icon - removed rounded-lg to match straight aesthetic */}
              <div className="mb-3 flex h-11 w-11 items-center justify-center bg-gold/10 sm:h-12 sm:w-12">
                <Icon
                  size={20}
                  strokeWidth={1.5}
                  className="text-gold-light"
                  aria-hidden="true"
                />
              </div>

              {/* Value */}
              <h3 className="text-2xl font-bold tracking-tight text-cream sm:text-3xl lg:text-4xl">
                {stat.value}
                {stat.suffix && (
                  <span className="ml-0.5 text-gold">{stat.suffix}</span>
                )}
              </h3>

              {/* Label */}
              <p className="mt-1.5 text-xs font-medium text-cream/50 sm:text-sm">
                {stat.label}
              </p>

              {/* Bottom line - adjusted to center nicely */}
              <div
                className="mt-auto pt-4 w-full"
                aria-hidden="true"
              >
                <div className="mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}