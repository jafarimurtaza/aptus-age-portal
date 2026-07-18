import Link from "next/link";

export default function ProjectInfo({ project }) {
  return (
    <section className="mt-16 border-t border-slate-100 pt-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Latest Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {project?.relatedProjects?.map((item, index) => (
          // ترکیب اسلاگ و ایندکس (item.slug + index) تضمین می‌کند که کلیدها هرگز تکراری نخواهند شد:
          <div
            className="group flex flex-col overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            key={`${item.slug}-${index}`}
          >
            {/* تصویر کارت */}
            <div className="h-48 w-full overflow-hidden bg-slate-50">
              <img
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-103"
                src={item.image}
              />
            </div>

            {/* محتوای کارت */}
            <div className="flex flex-1 flex-col justify-between p-5">
              <h3 className="text-base font-bold text-slate-800 transition-colors group-hover:text-indigo-600">
                {item.title}
              </h3>
              
              <div className="mt-4 flex justify-end border-t border-slate-50 pt-3">
                <Link
                  className="text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-800"
                  href={`/projects/${item.slug}`}
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
