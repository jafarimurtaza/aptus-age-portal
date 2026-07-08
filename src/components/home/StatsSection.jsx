import { stats } from "./HomeIntro";

export function StatsSection(){
    return(
        <div className="relative z-0 mx-auto mt-8 grid max-w-7xl gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm sm:grid-cols-2 sm:gap-4 sm:p-4 lg:mt-12 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            className="rounded-lg bg-slate-50 px-4 py-6 text-center sm:px-6 sm:py-8"
            key={stat.label}
          >
            <h2 className="text-4xl font-bold text-emerald-700 sm:text-5xl">
              {stat.value}
            </h2>
            <p className="mt-3 font-medium text-slate-600">{stat.label}</p>
          </div>
        ))}
      </div>
    )
}