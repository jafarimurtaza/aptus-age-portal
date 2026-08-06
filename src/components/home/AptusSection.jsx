export default function AptusSection() {
  return (
    <section className="w-full text-white h-full ">
      <div className="grid w-full items-center gap-7 border-y border-primary/15 bg-base-300 px-4 lg:py-20 md:py-10 py-5 shadow-sm shadow-primary/10 sm:px-8 lg:grid-cols-[0.95fr_1fr] lg:gap-10 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:text-left">
          <p className="inline-flex rounded-full border border-primary/30 bg-base-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-neutral shadow-sm shadow-primary/10">
            Aptus AI
          </p>

          <h2 className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl">
            Find matched graduates faster
          </h2>

          <p className="mt-3 text-base leading-7">
            Describe what your team needs. Aptus suggests graduates with the
            right skills, projects, and role fit.
          </p>

          <button className="btn mt-5 min-h-0 rounded-full border-0 bg-primary px-6 py-2.5 text-sm font-semibold text-neutral shadow-sm shadow-primary/20 hover:bg-primary/85">
            Try Aptus AI
          </button>
        </div>

        <div className="mx-auto h-[220px] w-full max-w-[520px] overflow-hidden border border-primary/20 bg-base-100 shadow-lg shadow-primary/10 sm:h-[260px] lg:h-[300px]">
          <video
            aria-label="Aptus AI video preview"
            autoPlay
            className="h-full w-full object-cover"
            loop
            muted
            playsInline
          >
            <source src="/Images/Videos/aptus.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
