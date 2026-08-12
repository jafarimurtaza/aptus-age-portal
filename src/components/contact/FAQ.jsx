const faqs = [
  {
    question: "How can I contact Afghan Geeks?",
    answer:
      "You can contact us through the contact form, email, phone, or our social media channels.",
  },
  {
    question: "Can I partner with Afghan Geeks?",
    answer:
      "Yes. We welcome organizations and individuals interested in creating meaningful partnerships.",
  },
  {
    question: "Can I learn more about your programs?",
    answer:
      "Absolutely. Send us a message and our team can provide information about available programs.",
  },
  {
    question: "How long does it take to receive a response?",
    answer:
      "Our team will try to respond to your message as soon as possible during working hours.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-[#F5F0E8] py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#C8955A]">
            FAQ
          </span>

          <h2 className="mt-3 text-4xl font-extrabold text-[#1B3A6B]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border border-[#E5DDD0] bg-[#FAF7F2] p-6 shadow-sm transition-all duration-300 hover:border-[#C8955A] hover:shadow-md"
            >
              <summary className="cursor-pointer list-none font-bold text-[#1B3A6B]">
                <div className="flex items-center justify-between gap-5">
                  <span>{faq.question}</span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C8955A] text-xl font-normal text-white transition duration-300 group-open:rotate-45">
                    +
                  </span>
                </div>
              </summary>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#6C7280]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
