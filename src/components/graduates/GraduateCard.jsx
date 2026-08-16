import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

export default function GraduateCard({ graduate }) {
  return (
    <Link
      aria-label={`View ${graduate.name} profile`}
      className="block overflow-hidden rounded-lg border border-primary/25 bg-base-100 text-inherit shadow-sm shadow-primary/10 transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/15"
      href="/graduates"
    >
      <div className="p-2">
        <div className="relative h-32 overflow-hidden rounded-md bg-base-200 sm:h-36 xl:h-32">
          <Image
            alt={`${graduate.name} project preview`}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            src={graduate.projectImage}
          />
        </div>
      </div>

      <div className="-mt-8 flex justify-center sm:-mt-9 xl:-mt-8">
        <div className="h-[76px] w-[76px] rounded-full border-4 border-base-100 bg-primary/15 p-1 shadow-md shadow-primary/10 sm:h-20 sm:w-20">
          <div className="relative h-full w-full overflow-hidden rounded-full bg-base-200">
            <Image
              alt={`${graduate.name} profile photo`}
              className="object-cover"
              fill
              sizes="96px"
              src={graduate.profileImage}
            />
          </div>
        </div>
      </div>

      <div className="px-4 pb-4 pt-2 text-center sm:px-5">
        <h2 className="text-lg font-semibold leading-tight text-neutral sm:text-xl">
          {graduate.name}
        </h2>

        <p className="mt-1 flex items-center justify-center gap-1.5 text-sm text-base-content/55 sm:text-base">
          <MapPin aria-hidden="true" className="h-4 w-4 fill-current sm:h-5 sm:w-5" />
          {graduate.location}
        </p>

        <div className="mx-auto mt-2 inline-flex items-center gap-2 rounded-lg bg-base-200 px-3 py-1.5 text-xs font-semibold text-base-content/75 sm:text-sm">
          <span className="flex h-5 w-5 items-center justify-center rounded-full border border-primary/35 text-xs text-neutral">
            ✓
          </span>
          Verified Graduate
        </div>

        <p className="mt-3 line-clamp-2 min-h-11 text-left text-sm leading-[22px] text-base-content/60 sm:min-h-12 sm:leading-6">
          {graduate.bio}
        </p>

        <span className="btn mt-4 min-h-0 min-w-44 rounded-full border-primary/30 bg-base-200 px-6 py-2 text-sm font-semibold text-neutral hover:border-primary hover:bg-primary sm:min-w-52 sm:text-base">
          View Profile
        </span>
      </div>
    </Link>
  );
}
