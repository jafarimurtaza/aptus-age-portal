import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Briefcase,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function GraduateDetail({ graduate }) {
  return (
    <main className="min-h-screen bg-base-100 text-base-content">
      <section className="px-4 py-10 sm:px-8 sm:py-14 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-7xl">
          <Link
            className="inline-flex items-center gap-2 text-sm font-semibold text-base-content/60 transition hover:text-primary"
            href="/graduates"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Back to graduates
          </Link>

          <div className="mt-8 overflow-hidden rounded-2xl border border-primary/20 bg-base-100 shadow-sm shadow-primary/10">
            <div className="grid gap-0 lg:grid-cols-[0.62fr_0.38fr]">
              <div className="p-5 sm:p-8 lg:p-10">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                  <div className="h-32 w-32 shrink-0 rounded-2xl border border-primary/20 bg-base-200 p-2 shadow-sm shadow-primary/10">
                    <div className="relative h-full w-full overflow-hidden rounded-xl bg-base-100">
                      <Image
                        alt={`${graduate.name} profile photo`}
                        className="object-cover"
                        fill
                        priority
                        sizes="128px"
                        src={graduate.profileImage}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="inline-flex items-center gap-2 rounded-lg border border-success/20 bg-success/10 px-3 py-1.5 text-sm font-semibold text-success">
                      <CheckCircle2 aria-hidden="true" className="h-4 w-4" />
                      Verified Graduate
                    </div>
                    <h1 className="mt-4 text-3xl font-semibold leading-tight text-neutral sm:text-4xl lg:text-5xl">
                      {graduate.name}
                    </h1>
                    <p className="mt-3 text-lg font-medium text-primary">
                      {graduate.role}
                    </p>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-base-content/65">
                      {graduate.bio}
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-neutral transition hover:bg-primary/85"
                    href={graduate.socials.linkedin}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaLinkedinIn aria-hidden="true" className="h-4 w-4" />
                    LinkedIn
                  </Link>
                  <Link
                    className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-base-200 px-5 py-3 text-sm font-semibold text-neutral transition hover:border-primary hover:bg-primary"
                    href={graduate.socials.github}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <FaGithub aria-hidden="true" className="h-4 w-4" />
                    GitHub
                  </Link>
                </div>
              </div>

              <aside className="border-t border-primary/20 bg-base-200 p-5 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
                <h2 className="text-lg font-semibold text-neutral">
                  Profile Snapshot
                </h2>
                <div className="mt-5 grid gap-3">
                  <p className="flex items-center gap-2 rounded-xl bg-base-100 p-4 text-sm text-base-content/65">
                    <MapPin aria-hidden="true" className="h-4 w-4" />
                    {graduate.location}
                  </p>
                  <p className="flex items-center gap-2 rounded-xl bg-base-100 p-4 text-sm text-base-content/65">
                    <Briefcase aria-hidden="true" className="h-4 w-4" />
                    {graduate.availability}
                  </p>
                  <p className="rounded-xl bg-base-100 p-4 text-sm font-semibold text-neutral">
                    {graduate.cohort}
                  </p>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  {graduate.stats.map((stat) => (
                    <div
                      className="rounded-xl border border-primary/15 bg-base-100 p-4 text-center"
                      key={stat.label}
                    >
                      <p className="text-2xl font-semibold text-neutral">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs font-medium text-base-content/55">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_0.55fr]">
            <section className="rounded-2xl border border-primary/20 bg-base-100 p-6 shadow-sm shadow-primary/10 sm:p-8">
              <h2 className="text-2xl font-semibold text-neutral">
                About {graduate.name.split(" ")[0]}
              </h2>
              <p className="mt-4 text-base leading-8 text-base-content/65">
                {graduate.summary}
              </p>

              <h3 className="mt-8 text-xl font-semibold text-neutral">
                Strengths
              </h3>
              <div className="mt-4 grid gap-3">
                {graduate.strengths.map((strength) => (
                  <p
                    className="flex gap-3 rounded-xl bg-base-200 p-4 text-sm leading-6 text-base-content/65"
                    key={strength}
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 h-5 w-5 shrink-0 text-success"
                    />
                    {strength}
                  </p>
                ))}
              </div>
            </section>

            <aside className="rounded-2xl border border-primary/20 bg-base-100 p-6 shadow-sm shadow-primary/10 sm:p-8">
              <h2 className="text-2xl font-semibold text-neutral">Skills</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {graduate.skills.map((skill) => (
                  <span
                    className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-neutral"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h3 className="mt-8 text-lg font-semibold text-neutral">
                Experience Focus
              </h3>
              <p className="mt-3 text-sm leading-7 text-base-content/60">
                {graduate.experience}
              </p>
            </aside>
          </div>

          <section className="mt-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-neutral">
                  Projects
                </h2>
                <p className="mt-2 text-base text-base-content/55">
                  Selected work from cohort training and practical builds.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {graduate.projects.map((project) => (
                <article
                  className="overflow-hidden rounded-2xl border border-primary/20 bg-base-100 shadow-sm shadow-primary/10"
                  key={project.title}
                >
                  <div className="relative h-48 bg-base-200">
                    <Image
                      alt={`${project.title} preview`}
                      className="object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      src={project.image}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-neutral">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-base-content/60">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          className="rounded-full bg-base-200 px-3 py-1 text-xs font-semibold text-base-content/65"
                          key={tool}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
