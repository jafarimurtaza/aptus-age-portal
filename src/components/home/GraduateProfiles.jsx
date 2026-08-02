import Image from "next/image";
import { graduateProfiles } from "./HomeIntro";

export function GraduateProfiles() {
    return (
        <div className="flex min-h-[430px] items-center justify-center overflow-hidden px-0 py-4 sm:min-h-[500px] sm:px-8 sm:py-8 xl:min-h-[540px] xl:px-10">
            <div className="graduate-card-stack relative h-[430px] w-full max-w-[360px] sm:h-[500px] sm:max-w-[460px] xl:h-[560px] xl:max-w-[560px]">
                {graduateProfiles.map((graduate, index) => (
                    <article
                        className="graduate-card absolute left-1/2 top-1/2 w-[min(82vw,280px)] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl shadow-slate-200/70 sm:w-[320px] xl:w-[360px]"
                        key={graduate.name}
                        style={{ "--card-index": index }}
                    >
                        <div className="relative flex h-48 items-end justify-center overflow-hidden bg-slate-100 sm:h-60 xl:h-72">
                            <Image
                                alt={`${graduate.name} profile preview`}
                                className="object-cover"
                                fill
                                sizes="(max-width: 768px) 280px, 360px"
                                src={graduate.imageSrc}
                            />
                            <div className="absolute bottom-0 left-0 h-24 w-24 -translate-x-8 translate-y-10 rotate-45 bg-white"></div>
                        </div>

                        <div className="relative bg-white p-5 sm:p-6 xl:p-7">
                            <h3 className="text-lg font-bold text-[#1d4ed8] sm:text-xl xl:text-2xl">
                                {graduate.name}
                            </h3>

                            <p className="mt-3 flex items-center gap-3 text-base font-bold text-emerald-700 sm:text-lg xl:text-xl">
                                <span className="flex h-6 w-6 items-center justify-center rounded bg-emerald-600 text-sm text-white">
                                    ✓
                                </span>
                                Verified Graduate
                            </p>

                            <p className="ml-9 mt-1 text-sm text-emerald-700 sm:text-base xl:text-lg">
                                in {graduate.skill}
                            </p>

                            <p className="mt-4 flex items-center gap-3 text-base text-slate-600 sm:mt-5 sm:text-lg xl:text-xl">
                                <span className="flex h-6 w-6 items-center justify-center border border-slate-400 text-sm text-slate-500">
                                    ✓
                                </span>
                                {graduate.title}
                            </p>

                            <p className="mt-5 text-xs font-semibold uppercase text-slate-500 sm:mt-7 sm:text-sm xl:mt-9">
                                Previously at
                            </p>
                            <p className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl xl:text-4xl">
                                {graduate.company}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}
