export default function GraduatesHero() {
  return (
    <section className="bg-base-100 px-4 pb-8 pt-12 text-base-content sm:px-8 sm:pb-10 sm:pt-16 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-7xl">
        <p className="inline-flex rounded-full border border-primary/30 bg-base-200 px-4 py-2 text-sm font-semibold text-neutral shadow-sm shadow-primary/10">
          Afghan Geeks Graduates
        </p>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.78fr_0.42fr] lg:items-end">
          <div>
            <h1 className="max-w-3xl text-3xl font-semibold leading-tight text-neutral sm:text-4xl lg:text-5xl">
              Discover trained talent ready for real teams
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-base-content/65 sm:text-lg sm:leading-8">
              Browse Afghan Geeks graduates by role, cohort, skills, and project
              experience. Each profile highlights practical ability and career
              readiness.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 rounded-lg border border-primary/20 bg-base-200 p-4 shadow-sm shadow-primary/10">
            <div>
              <p className="text-2xl font-semibold text-neutral">14</p>
              <p className="mt-1 text-xs font-medium text-base-content/55">
                Graduates
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-neutral">20</p>
              <p className="mt-1 text-xs font-medium text-base-content/55">
                Projects
              </p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-neutral">3</p>
              <p className="mt-1 text-xs font-medium text-base-content/55">
                Cohorts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
