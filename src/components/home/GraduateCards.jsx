import Image from "next/image";
import Link from "next/link";
import { graduates, LocationIcon } from "./FeaturedGraduates";

const galleryImages = [
    "/Images/2.jpg",
    "/Images/3.png",
    "/Images/4.png",
    "/Images/5.png",
    "/Images/6.png",
    "/Images/7.jpg",
    "/Images/8.png",
    "/Images/9.png",
];

const profileImages = [
    "/Images/profile1.avif",
    "/Images/profile2.jpeg",
    "/Images/profile3.jpeg",
];

export default function GraduateCards() {
    return (
        <div className="mx-auto mt-8 grid max-w-[1700px] gap-4 sm:mt-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
            {graduates.map((graduate, graduateIndex) => (
                <Link
                    aria-label={`View ${graduate.name} profile`}
                    className="mx-auto block w-full max-w-[430px] overflow-hidden rounded-lg border border-slate-200 bg-white text-inherit shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200 md:max-w-none"
                    href="/graduates"
                    key={graduate.name}   >
                    <div className="grid h-24 grid-cols-3 gap-1 p-2 sm:h-28 xl:h-24">
                        {[0, 1, 2].map((imageOffset) => (
                            <div
                                className="relative overflow-hidden rounded bg-slate-100"
                                key={`${graduate.name}-${imageOffset}`}
                            >
                                <Image
                                    alt={`${graduate.name} project preview ${imageOffset + 1}`}
                                    className="object-cover"
                                    fill
                                    sizes="(max-width: 768px) 33vw, 150px"
                                    src={galleryImages[(graduateIndex * 3 + imageOffset) % galleryImages.length]}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="-mt-8 flex justify-center sm:-mt-9 xl:-mt-8">
                        <div className="h-[76px] w-[76px] rounded-full border-4 border-white bg-emerald-100 p-1 shadow-md shadow-emerald-100 sm:h-20 sm:w-20">
                            <div className="relative h-full w-full overflow-hidden rounded-full bg-emerald-50">
                                <Image
                                    alt={`${graduate.name} profile photo`}
                                    className="object-cover"
                                    fill
                                    sizes="80px"
                                    src={profileImages[graduateIndex % profileImages.length]}
                                />
                            </div>
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

                        <span className="btn mt-4 min-h-0 min-w-44 rounded-full border-slate-200 bg-white px-6 py-2 text-sm font-bold text-slate-900 hover:border-emerald-200 hover:bg-emerald-50 sm:min-w-52 sm:text-base">
                            View Profile
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    )
}
