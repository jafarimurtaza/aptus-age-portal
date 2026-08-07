import Image from "next/image";
import { graduateProfiles } from "./HomeIntro";

export function GraduateProfiles() {
    return (
        <div className="flex min-h-[430px] items-center justify-center overflow-hidden px-0 py-4 sm:min-h-[500px] sm:px-8 sm:py-8 xl:min-h-[540px] xl:px-10">
            <div className="graduate-card-stack relative h-[430px] w-full max-w-[360px] sm:h-[500px] sm:max-w-[460px] xl:h-[560px] xl:max-w-[560px]">
                {graduateProfiles.map((graduate, index) => (
                    <article
                        className="graduate-card absolute left-1/2 top-1/2 w-[min(82vw,280px)] overflow-hidden rounded-lg border border-primary/20 bg-base-100 shadow-xl shadow-primary/10 sm:w-[320px] xl:w-[360px]"
                        key={graduate.name}
                        style={{ "--card-index": index }}
                    >
                        <div className="relative flex h-48 items-end justify-center overflow-hidden bg-base-200 sm:h-60 xl:h-72">
                            <Image
                                alt={`${graduate.name} profile preview`}
                                className="object-cover"
                                fill
                                sizes="(max-width: 768px) 280px, 360px"
                                src={graduate.imageSrc}
                            />
                            <div className="absolute bottom-0 left-0 h-24 w-24 -translate-x-8 translate-y-10 rotate-45 bg-base-100"></div>
                        </div>

                        <div className="relative bg-base-100 p-5 sm:p-6 xl:p-7">
                            <h3 className="text-lg font-bold text-neutral sm:text-xl xl:text-2xl">
                                {graduate.name}
                            </h3>

                            <p className="mt-3 flex items-center gap-3 text-base font-semibold text-neutral sm:text-lg xl:text-xl">
                                <span className="flex h-6 w-6 items-center justify-center rounded bg-primary text-sm text-neutral">
                                    ✓
                                </span>
                                Verified Graduate
                            </p>

                            <p className="ml-9 mt-1 text-sm text-base-content/70 sm:text-base xl:text-lg">
                                in {graduate.skill}
                            </p>

                            <p className="mt-4 flex items-center gap-3 text-base text-base-content/70 sm:mt-5 sm:text-lg xl:text-xl">
                                <span className="flex h-6 w-6 items-center justify-center border border-primary/40 text-sm text-neutral">
                                    ✓
                                </span>
                                {graduate.title}
                            </p>

                            <p className="mt-5 text-xs font-semibold uppercase text-base-content/55 sm:mt-7 sm:text-sm xl:mt-9">
                                Previously at
                            </p>
                            <p className="mt-2 text-2xl font-black text-neutral sm:text-3xl xl:text-4xl">
                                {graduate.company}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}
