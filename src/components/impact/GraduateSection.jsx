"use client";

import useEmblaCarousel from "embla-carousel-react";

export default function GraduateSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
  loop: true,
  align: "start",
  }
  );
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
       <h2 className="text-4xl font-bold text-gray-800">Graduate Stories</h2>
        <p className="text-gray-500 mt-2">In Their Own Words</p>
         </div>

            {/* Left Button */}
           <button onClick={() => emblaApi && emblaApi.scrollPrev()}
            className="px-4 py-2 bg-gray-200 rounded-full">
            ◀ </button>

            {/* Cards Container */}
          <div className="overflow-hidden" ref={emblaRef}>
           <div className="flex">

            {/* Card 1 */}
            <div className="flex-[0_0_100%] md:flex-[0_0_33.333%] px-4">
             <div className="bg-white border rounded-3xl p-8 shadow-sm h-full">
             <div className="text-4xl text-gray-600">❝</div>
             <p className="italic text-gray-600 mt-4">
                Building this portal changed how I see myself as a developer.
                I went from student to author.
                 </p>
                 <div className="flex items-center gap-3 mt-8">
                 <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                 <div>
                  <h4 className="font-semibold text-gray-600">Zainab Mohammadi</h4>
                  <p className="text-sm text-gray-500">Cohort 1-2022</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex-[0_0_100%] md:flex-[0_0_33.333%] px-4">
            <div className="bg-white border rounded-3xl p-8 shadow-sm h-full">
              <div className="text-4xl text-gray-600">❝</div>

                 <p className="italic text-gray-600 mt-4">
                  I never imagined I would train a machine learning model.
                  Afghan Geeks made the impossible feel inevitable.
                  </p>

                  <div className="flex items-center gap-3 mt-8">
                   <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                  N
                  </div>
                  <div>
                  <h4 className="font-semibold text-gray-600">Nadia Sultani</h4>
                  <p className="text-sm text-gray-500">Cohort 2-2023</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex-[0_0_100%] md:flex-[0_0_33.333%] px-4">
            <div className="bg-white border rounded-3xl p-8 shadow-sm h-full">
              <div className="text-4xl text-gray-600">❝</div>

                  <p className="italic text-gray-600 mt-4">
                  Every line of code I write is a small act of defiance—and proof
                  that Afghan women belong in tech.
                  </p>

                  <div className="flex items-center gap-3 mt-8">
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                  F
                  </div>
                  <div>
                  <h4 className=" text-gray-600 font-semibold">Freshta Safi</h4>
                  <p className="text-sm text-gray-500">Cohort 3-2024</p>
                </div>
              </div>
            </div>
          </div>
      
           {/* Card 4*/}
       <div className="flex-[0_0_100%] md:flex-[0_0_33.333%] px-4">
            <div className="bg-white border rounded-3xl p-8 shadow-sm h-full">
              <div className="text-4xl text-gray-600">❝</div>

                  <p className="italic text-gray-600 mt-4">
                  Every line of code I write is a small act of defiance—and proof
                  that Afghan women belong in tech.
                  </p>

                  <div className="flex items-center gap-3 mt-8">
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                  F
                  </div>
                  <div>
                  <h4 className=" text-gray-600 font-semibold">Freshta Safi</h4>
                  <p className="text-sm text-gray-500">Cohort 3-2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="flex-[0_0_100%] md:flex-[0_0_33.333%] px-4">
            <div className="bg-white border rounded-3xl p-8 shadow-sm h-full">
              <div className="text-4xl text-gray-600">❝</div>

                  <p className="italic text-gray-600 mt-4">
                  Every line of code I write is a small act of defiance—and proof
                  that Afghan women belong in tech.
                  </p>

                  <div className="flex items-center gap-3 mt-8">
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                  F
                  </div>
                  <div>
                  <h4 className=" text-gray-600 font-semibold">Freshta Safi</h4>
                  <p className="text-sm text-gray-500">Cohort 3-2024</p>
                </div>
              </div>
            </div>
          </div>
          {/* Card 6*/}
          <div className="flex-[0_0_100%] md:flex-[0_0_33.333%] px-4">
            <div className="bg-white border rounded-3xl p-8 shadow-sm h-full">
              <div className="text-4xl text-gray-600">❝</div>

                  <p className="italic text-gray-600 mt-4">
                  Every line of code I write is a small act of defiance—and proof
                  that Afghan women belong in tech.
                  </p>

                  <div className="flex items-center gap-3 mt-8">
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                  F
                  </div>
                  <div>
                  <h4 className=" text-gray-600 font-semibold">Freshta Safi</h4>
                  <p className="text-sm text-gray-500">Cohort 3-2024</p>
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>  
      
       
          {/* Right Button */}
      <button onClick={() => emblaApi && emblaApi.scrollNext()}
        className="px-4 py-2 bg-gray-200 rounded">
        ▶</button>
    </section>
  );
}