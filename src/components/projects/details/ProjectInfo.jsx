export default function ProjectInfo({ project }) {
  return (
    <section className="mt-16">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-indigo-500 font-semibold">
          Portfolio
        </p>

        <h2 className="text-3xl font-bold text-[#29285d] mt-2">
          Latest Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        {project.relatedProjects?.map((item, index) => (
          <div
            key={`${item.title}-${index}`}
            className="overflow-hidden rounded-2xl bg-white shadow-md border border-slate-200 hover:shadow-xl transition duration-300"
          >

            <img
              src={item.image}
              alt={item.title}
              className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
            />

            <div className="flex items-center justify-between px-5 py-4">

              <h3 className="text-sm font-semibold text-slate-800">
                {item.title}
              </h3>

              <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors">
                Read More →
              </button>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}