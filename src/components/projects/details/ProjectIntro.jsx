import Image from "next/image";
import Link from "next/link";

export default function ProjectIntro({ project }) {
  return (
    <section className="relative flex min-h-[510px] items-center overflow-hidden">
      {/* Background Image */}

      <Image
        src="/images/project-detail.jpeg"
        alt="Project Background"
        fill
        priority
        className="object-cover object-center scale-105 transition-transform duration-[8000ms] hover:scale-110"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-[#10233F]/70" />

      {/* Decorative Gold Glow */}

      <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#C9973E]/10 blur-3xl" />

      {/* Decorative Glow Left */}

      <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-[#C9973E]/10 blur-3xl" />

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {/* Breadcrumb */}

        <div className="mb-10 flex items-center justify-center gap-3 text-sm text-white/80">
          <Link href="/" className="transition hover:text-[#C9973E]">
            Home
          </Link>

          <span>/</span>

          <Link href="/projects" className="transition hover:text-[#C9973E]">
            Projects
          </Link>

          <span>/</span>

          <span className="text-white">Details</span>
        </div>

        {/* Main Title */}

        <div className="relative inline-block">
          <span className="absolute -right-8 top-1/2 -z-10 h-28 w-28 -translate-y-1/2 rounded-full bg-[#C9973E]/20 blur-xl" />

          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Project Details
          </h1>
        </div>

        {/* Project Information */}

        <div className="mt-10">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            {project.title}
          </h2>

          <p className="mt-4 text-sm uppercase tracking-[0.3em] text-[#C9973E]">
            {project.category}
          </p>
        </div>

        {/* Bottom Line */}

        <div className="mx-auto mt-10 h-1 w-28 bg-[#C9973E]" />
      </div>
    </section>
  );
}
