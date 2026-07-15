import { hero } from "../../data/hero";

export default function HeroCards() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {hero.stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.id}
            className="group relative flex min-h-[220px] flex-col  hover:cursor-pointer overflow-hidden border border-base-300 border-b-2 border-t-2 border-b-primary/40 bg-base-100/80 p-6 text-center backdrop-blur-xl transition-all duration-300 ease-out lg:min-h-[260px] lg:p-8 xl:items-start xl:text-left hover:-translate-y-1 hover:border-primary/20 hover:border-b-primary hover:bg-base-100 active:translate-y-0"
>
            {/* Hover Glow */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

            {/* Icon */}
            <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/10 text-primary ring ring-primary/10">
              <Icon size={30} strokeWidth={2} />
            </div>

            {/* Value */}
            <h3 className="text-4xl font-black tracking-tight lg:text-5xl">
              {stat.value} {stat.suffix}
            </h3>
            {/* Label */}
            <p className="mt-3 text-base font-medium text-base-content/65">
              {stat.label}
            </p>
            <div className="mt-auto hidden w-full pt-8 xl:block">
              <div className="h-px bg-gradient-to-r from-primary/30 via-base-300 to-transparent" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
