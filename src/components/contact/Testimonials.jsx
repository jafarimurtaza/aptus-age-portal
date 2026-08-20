const testimonials = [
  {
    name: "Graduate",
    role: "Afghan Geeks Alumni",
    text: "The Afghan Geeks team helped me turn my ideas into practical digital skills.",
  },
  {
    name: "Partner",
    role: "Community Partner",
    text: "Working with Afghan Geeks has been a valuable experience for our organization.",
  },
  {
    name: "Student",
    role: "Program Participant",
    text: "The learning environment gave me the confidence to build real projects.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-base-100 py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary sm:text-sm sm:tracking-[0.2em]">
            Testimonials
          </span>

          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-base-300 sm:text-4xl">
            What People Say
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {testimonials.map((item) => (
            <article
              key={item.name + item.role}
              className="flex h-full min-w-0 flex-col border border-base-300/15 bg-base-100 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl sm:p-7 lg:p-8"
            >
              {/* Quote */}
              <div className="text-4xl font-black leading-none text-primary sm:text-5xl">
                “
              </div>

              {/* Text */}
              <p className="mt-3 text-sm leading-7 text-base-content/60 sm:text-base sm:leading-8">
                {item.text}
              </p>

              {/* Author */}
              <div className="mt-auto border-t border-base-300/15 pt-5">
                <h3 className="font-bold text-base-300">{item.name}</h3>

                <p className="mt-1 text-xs text-base-content/50 sm:text-sm">
                  {item.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
