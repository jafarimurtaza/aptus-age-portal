import { hero } from "./data/hero";

export default function HeroCards() {
  return (
    <div className="mx-auto grid w-full max-w-7xl auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4 lg:gap-5">
      {hero.stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <article
            key={stat.id}
            className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-4 shadow-sm transition duration-300 ease-out will-change-transform hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl sm:p-5"
          >
            {/* Top Accent */}
            <span className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />

            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="mb-4 flex items-center justify-between sm:mb-5 lg:mb-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cream text-NAVY shadow-sm transition duration-300 ease-out group-hover:bg-NAVY group-hover:text-white sm:h-12 sm:w-12">
                  <Icon
                    size={22}
                    strokeWidth={2}
                    className="transition-transform duration-300 ease-out group-hover:scale-110"
                  />
                </div>

                <div className="h-7 w-px bg-gray-200 transition-colors duration-300 group-hover:bg-gold/50 sm:h-8" />
              </div>

              {/* Value */}
              <h3 className="text-3xl font-extrabold tracking-tight text-dark sm:text-4xl lg:text-[2.75rem]">
                {stat.value}
                <span className="ml-1 text-gold">{stat.suffix}</span>
              </h3>

              <p className="mt-3 max-w-full text-sm leading-relaxed text-dark/65 sm:text-base">
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