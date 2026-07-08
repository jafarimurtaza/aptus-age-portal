import Link from "next/link";
import { graduates, LocationIcon, skillStyles } from "./FeaturedGraduates";

export default function GraduateCards() {
    return (
        <div className="mx-auto mt-8 grid max-w-[1700px] gap-4 sm:mt-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
            {graduates.map((graduate) => (
                <Link
                    aria-label={`View ${graduate.name} profile`}
                    className="mx-auto block w-full max-w-[430px] overflow-hidden rounded-lg border border-slate-200 bg-white text-inherit shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200 md:max-w-none"
                    href="/graduates"
                    key={graduate.name}
                >
                    <div className="grid h-24 grid-cols-3 gap-1 p-2 sm:h-28 xl:h-24">
                        {graduate.photoPlaceholders.map((placeholder, index) => (
                            <div
                                aria-label={`Photo placeholder ${index + 1}`}
                                className={`rounded bg-gradient-to-br ${placeholder}`}
                                key={placeholder}
                            ></div>
                        ))}
                    </div>

                    <div className="-mt-7 flex justify-center sm:-mt-8 xl:-mt-7">
                        <div
                            className={`flex h-16 w-16 items-center justify-center rounded-full border-4 border-white text-lg font-black shadow-md sm:h-[72px] sm:w-[72px] sm:text-xl ${graduate.avatar}`}
                        >
                            {graduate.initials}
                        </div>
                    </div>

                    <div className="px-4 pb-4 pt-2 text-center sm:px-5">
                        <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                            {graduate.name}
                        </h3>
                        <p className="mt-1 flex items-center justify-center gap-1.5 text-sm text-slate-500 sm:text-base">
                            <LocationIcon />
                            {graduate.location}
                        </p>

                        <div className="mx-auto mt-2 inline-flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700 sm:text-sm">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 text-xs">
                                ✓
                            </span>
                            {graduate.verified}
                        </div>

                        <p className="mt-3 line-clamp-2 min-h-11 text-left text-sm leading-[22px] text-slate-500 sm:min-h-12 sm:leading-6">
                            {graduate.bio}
                        </p>

                        <div className="mt-3 flex flex-wrap justify-center gap-1.5 min-[420px]:flex-nowrap">
                            {graduate.skills.map((skill, index) => (
                                <span
                                    className={`whitespace-nowrap rounded-full border px-2 py-1 text-[10px] font-bold shadow-sm sm:px-2.5 sm:text-[11px] ${skillStyles[index]}`}
                                    key={skill}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <span className="btn mt-4 min-h-0 min-w-44 rounded-full border-slate-200 bg-white px-6 py-2 text-sm font-bold text-slate-900 hover:border-emerald-200 hover:bg-emerald-50 sm:min-w-52 sm:text-base">
                            Message {graduate.name.split(" ")[0]}
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    )
}