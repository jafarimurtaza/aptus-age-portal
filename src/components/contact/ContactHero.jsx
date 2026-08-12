import ContactForm from "./ContactForm";

export default function ContactHero() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT SIDE */}

          <div className="max-w-xl">
            {/* Small Label */}

            <div className="mb-5 inline-flex rounded-full border border-[#C8955A]/20 bg-[#C8955A]/10 px-4 py-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C8955A]">
                Contact Us
              </span>
            </div>

            {/* Heading */}

            <h1 className="text-4xl font-extrabold leading-tight text-[#17396C] sm:text-5xl lg:text-6xl">
              Get In Touch
              <br />
              <span className="text-[#0B0F19]">With Our Team</span>
            </h1>

            {/* Description */}

            <p className="mt-6 max-w-lg text-base leading-8 text-[#6C7280]">
              Fill out the form below and our team will get back to you shortly.
              We are always happy to hear from you.
            </p>

            {/* Contact Cards */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {/* Head Office */}

              <div className="rounded-xl border border-[#E7DCCB] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#C8955A]/10 text-[#C8955A]">
                    <span>⌂</span>
                  </div>

                  <h3 className="text-sm font-bold text-[#17396C]">
                    Head Office
                  </h3>
                </div>

                <p className="mt-3 text-xs leading-6 text-[#6C7280]">
                  MetroTech Center, NY 11201
                </p>
              </div>

              {/* Call Center */}

              <div className="rounded-xl border border-[#E7DCCB] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#C8955A]/10 text-[#C8955A]">
                    ☎
                  </div>

                  <h3 className="text-sm font-bold text-[#17396C]">
                    Call Center
                  </h3>
                </div>

                <p className="mt-3 text-xs leading-6 text-[#6C7280]">
                  +1 4995 4919 4004
                </p>
              </div>

              {/* Email */}

              <div className="rounded-xl border border-[#E7DCCB] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#C8955A]/10 text-[#C8955A]">
                    ✉
                  </div>

                  <h3 className="text-sm font-bold text-[#17396C]">Email</h3>
                </div>

                <p className="mt-3 text-xs leading-6 text-[#6C7280]">
                  hello@moniveo.com
                </p>
              </div>

              {/* Working Hours */}

              <div className="rounded-xl border border-[#E7DCCB] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#C8955A]/10 text-[#C8955A]">
                    ◷
                  </div>

                  <h3 className="text-sm font-bold text-[#17396C]">
                    Working Hours
                  </h3>
                </div>

                <p className="mt-3 text-xs leading-6 text-[#6C7280]">
                  Monday - Friday (07 am - 05 pm)
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div className="w-full lg:pl-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
