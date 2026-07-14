export default function ProjectInfo({ project }) {
  return (
    <section className="mt-16">

      <div className="mb-6">
        <p className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold">
          Portfolio
        </p>

        <h2 className="
        text-2xl
        font-bold
        text-[#29285d]
        ">
          Latest projects
        </h2>
      </div>


      <div className="
      grid
      grid-cols-1
      sm:grid-cols-2
      gap-5
      ">


        {project.relatedProjects?.map((item)=>(

          <div
          key={item.title}
          className="
          overflow-hidden
          rounded-xl
          bg-white
          shadow-sm
          border
          border-slate-100
          "
          >


            <img
            src={item.image}
            alt={item.title}
            className="
            w-full
            h-32
            object-cover
            "
            />


            <div className="
            flex
            items-center
            justify-between
            px-4
            py-3
            ">


              <h3 className="
              text-xs
              font-bold
              text-slate-700
              ">
                {item.title}
              </h3>


              <button
              className="
              text-[10px]
              text-indigo-500
              font-bold
              "
              >
                Read More
              </button>


            </div>


          </div>


        ))}


      </div>


    </section>
  );
}