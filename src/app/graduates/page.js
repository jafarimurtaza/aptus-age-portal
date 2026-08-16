import GraduateCards from "@/components/home/GraduateCards";

export const metadata = {
  title: "Graduates | Aptus",
  description: "Meet the talented graduates of Afghan Geeks.",
};

export default function GraduatesPage() {
  return (
    <main className="min-h-screen bg-base-100 px-4 py-16 text-base-content sm:px-8 lg:px-16">
      <section className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Afghan Geeks community
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Meet our graduates
          </h1>
          <p className="mt-4 text-lg leading-8 text-base-content/65">
            Explore the talented engineers and designers building the future
            across Afghanistan.
          </p>
        </div>

        <GraduateCards />
      </section>
    </main>
  );
}
