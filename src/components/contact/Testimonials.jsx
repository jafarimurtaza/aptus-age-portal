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
    <section className="bg-[#FAF7F2] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8955A]">
            Testimonials
          </span>

          <h2 className="mt-3 text-4xl font-extrabold text-[#1B3A6B]">
            What People Say
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name + item.role}
              className="border border-[#E5DDD0] bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#C8955A] hover:shadow-xl"
            >
              <div className="text-4xl font-black text-[#C8955A]">“</div>

              <p className="mt-3 text-base leading-8 text-[#6C7280]">
                {item.text}
              </p>

              <div className="mt-7 border-t border-[#E5DDD0] pt-5">
                <h3 className="font-bold text-[#1B3A6B]">{item.name}</h3>

                <p className="mt-1 text-sm text-[#8A8175]">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
