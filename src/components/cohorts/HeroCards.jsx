import { hero } from "./data/hero";

export default function HeroCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 2xl:grid-cols-4">
      {hero.stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <article
            key={stat.id}
            className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl sm:p-6 lg:p-7"
          >
            {/* Top Accent */}
            <span className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />

            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="mb-5 flex items-center justify-between sm:mb-6 lg:mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cream text-NAVY transition-all duration-300 group-hover:bg-NAVY group-hover:text-white sm:h-14 sm:w-14">
                  <Icon
                    size={24}
                    strokeWidth={2}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="h-8 w-px bg-gray-200 transition-colors duration-300 group-hover:bg-gold/50 sm:h-10" />
              </div>

              {/* Value */}
              <h3 className="text-3xl font-extrabold tracking-tight text-dark sm:text-4xl lg:text-5xl">
                {stat.value}
                <span className="ml-1 text-gold">{stat.suffix}</span>
              </h3>

              {/* Label */}
              <p className="mt-2 text-sm leading-relaxed text-dark/65 sm:mt-3 sm:text-base">
                {stat.label}
              </p>

              {/* Bottom Divider */}
              <div className="mt-auto pt-5 sm:pt-6 lg:pt-8">
                <div className="h-px w-full bg-gray-200 transition-colors duration-300 group-hover:bg-gold/40" />
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}