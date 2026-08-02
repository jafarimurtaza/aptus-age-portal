export default function AptusSection() {
  return (
    <section className="w-full bg-white px-4 py-8 text-slate-950 sm:px-8 sm:py-10 lg:px-16 xl:px-20 xl:py-12">
      <div className="mx-auto grid max-w-7xl items-center gap-7 rounded-[28px] bg-[#f8fafc] px-4 py-8 sm:px-6 lg:grid-cols-[0.95fr_1fr] lg:gap-10 lg:px-8">
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:text-left">
          <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700 shadow-sm shadow-emerald-100">
            Aptus AI
          </p>

          <h2 className="mt-4 text-2xl font-semibold leading-tight text-slate-950 sm:text-3xl">
            Find matched graduates faster
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            Describe what your team needs. Aptus suggests graduates with the
            right skills, projects, and role fit.
          </p>

          <button className="btn mt-5 min-h-0 rounded-full border-[#1d4ed8] bg-white px-6 py-2.5 text-sm font-semibold text-[#1d4ed8] shadow-sm hover:border-[#1d4ed8] hover:bg-blue-50">
            Try Aptus AI
          </button>
        </div>

        <div className="mx-auto h-[220px] w-full max-w-[520px] rounded-[24px] border border-slate-200 bg-white shadow-lg shadow-slate-200/70 sm:h-[260px] lg:h-[300px]">
        </div>
      </div>
    </section>
  );
}
