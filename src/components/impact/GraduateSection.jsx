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
        onClick={() => emblaApi && emblaApi.scrollPrev()}
        className="px-4 py-2 bg-gray-200 rounded-full"
      >
        ◀
      </button>


      {/* Your cards go here */}
      <div className="overflow-hidden flex-1" ref={emblaRef}>
        <div className="flex">

          {/* KEEP YOUR CARD 1 */}
          {/* KEEP YOUR CARD 2 */}
          {/* KEEP YOUR CARD 3 */}
          {/* KEEP YOUR CARD 4 */}
          {/* KEEP YOUR CARD 5 */}
          {/* KEEP YOUR CARD 6 */}

        </div>
      </div>


      {/* Right Button */}
      <button
        onClick={() => emblaApi && emblaApi.scrollNext()}
        className="px-4 py-2 bg-gray-200 rounded-full"
      >
        ▶
      </button>

    </div>

  </section>
);