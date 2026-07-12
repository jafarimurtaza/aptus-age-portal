    "use client";

    import { useEffect, useState } from "react";
    import useEmblaCarousel from "embla-carousel-react";
    
      export default function GraduateSection() {
      const [emblaRef, emblaApi] = useEmblaCarousel({
      loop: true,
      align: "start",
      slidesToScroll: 1,
      });
        useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
          setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on("select", onSelect);
        onSelect();

        return () => {
          emblaApi.off("select", onSelect);
        };
      }, [emblaApi]);

          const [selectedIndex, setSelectedIndex] = useState(0);
        const graduates = [
          {
      name: "Zainab Mohammadi",
      cohort: "Cohort 1-2022",
      quote:
        "Building this portal changed how I see myself as a developer. I went from student to author.",
      initial: "Z",
    },
    {
      name: "Nadia Sultani",
      cohort: "Cohort 2-2023",
      quote:
        "I never imagined I would train a machine learning model. Afghan Geeks made the impossible feel inevitable.",
      initial: "N",
    },
    {
      name: "Freshta Safi",
      cohort: "Cohort 3-2024",
      quote:
        "Every line of code I write is a small act of defiance—and proof that Afghan women belong in tech.",
      initial: "F",
    },
    {
      name: "Freshta Ahmadi",
      cohort: "Cohort 3-2024",
      quote:
        "Every line of code I write is a small act of defiance—and proof that Afghan women belong in tech.",
      initial: "M",
    },
    {
      name: "Shukria Rahimi",
      cohort: "Cohort 4-2024",
      quote:
        "Every line of code I write is a small act of defiance—and proof that Afghan women belong in tech.",
      initial: "S",
    },
    {
      name: "Zarifa Rahmani",
      cohort: "Cohort 4-2024",
      quote:
        "I never imagined I would train a machine learning model. Afghan Geeks made the impossible feel inevitable.",
      initial: "Z",
    },
  ];


  return (
  <section className="-mt-16 px-6 pb-20 relative z-10 bg-gradient-to-r from-white via-green-50 to-green-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">
            Graduate Stories
            </h2>
            <p className="text-gray-500 mt-2">
            In Their Own Words
            </p>
            </div>
            <div className="relative">
            <button onClick={() => emblaApi?.scrollPrev()}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border flex items-center justify-center hover:bg-green-200 transition">
            ←
            </button>
          <div className="overflow-hidden mx-8" ref={emblaRef}>
                      <div className="flex -ml-3">  {graduates.map((graduate, index) => (
                        <div key={index}
                          className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_33.333%] px-5">
                          <div className=" bg-white border rounded-3xl p-8 shadow-sm hover:shadow-xl transition min-h-[330px] flex flex-col justify-between">
                          <div>
                          <div className="text-green-400 text-5xl font-bold">
                          “
                          </div>
                          <p className="italic text-gray-600 mt-4 leading-relaxed">
                          {graduate.quote}
                          </p>

                          </div>
                          <div className="flex items-center gap-3 mt-8">
                          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-semibold">
                          {graduate.initial}
                          </div>
                          <div>
                          <h4 className="font-semibold text-gray-700">
                          {graduate.name}
                          </h4>
                          <p className="text-sm text-gray-500">
                          {graduate.cohort}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </div>
          <button onClick={() => emblaApi?.scrollNext()}
          className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg border flex items-center justify-center text-gray-700 hover:bg-green-200 transition">
            →
          </button>
          <div className="flex justify-center gap-2 mt-8">
            {graduates.map((_, index) => (
          <button
          key={index} onClick={() => emblaApi?.scrollTo(index)}
      className={`w-3 h-3 rounded-full transition ${selectedIndex === index? "bg-green-600":"bg-gray-300"}`} />
      ))}
      </div>
      </div>
      </div>
      </section>
  );
}