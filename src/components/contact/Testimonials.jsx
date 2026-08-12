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
    <section className="bg-base-100 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-secondary">
            Testimonials
          </span>

          <h2 className="mt-3 text-4xl font-extrabold text-primary">
            What People Say
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name + item.role}
              className="border border-base-200 bg-base-100 p-8 shadow-lg"
            >
              <div className="text-4xl font-black text-secondary">“</div>

              <p className="mt-3 text-base leading-8 text-base-content/70">
                {item.text}
              </p>

              <div className="mt-7 border-t border-base-200 pt-5">
                <h3 className="font-bold text-primary">{item.name}</h3>

                <p className="mt-1 text-sm text-base-content/50">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
