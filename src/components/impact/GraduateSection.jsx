"use client";

import useEmblaCarousel from "embla-carousel-react";

export default function GraduateSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
  });

  return (
    <section className="py-16">

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Graduate Stories
        </h2>

        <p className="text-gray-500 mt-2">
          In Their Own Words
        </p>
      </div>


      <div className="flex items-center gap-4">

        {/* Left Button */}
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="px-4 py-2 bg-gray-200 rounded-full"
        >
          ◀
        </button>


        {/* Carousel */}
        <div
          className="overflow-hidden flex-1"
          ref={emblaRef}
        >
          <div className="flex gap-4">

            <div className="flex-none w-96 h-40 bg-gray-200 rounded-lg flex items-center justify-center">
              Card 1
            </div>

            <div className="flex-none w-96 h-40 bg-gray-200 rounded-lg flex items-center justify-center">
              Card 2
            </div>

            <div className="flex-none w-96 h-40 bg-gray-200 rounded-lg flex items-center justify-center">
              Card 3
            </div>

            <div className="flex-none w-96 h-40 bg-gray-200 rounded-lg flex items-center justify-center">
              Card 4
            </div>

            <div className="flex-none w-96 h-40 bg-gray-200 rounded-lg flex items-center justify-center">
              Card 5
            </div>

          </div>
        </div>


        {/* Right Button */}
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="px-4 py-2 bg-gray-200 rounded-full"
        >
          ▶
        </button>

      </div>

    </section>
  );
}