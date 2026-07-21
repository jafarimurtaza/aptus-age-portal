import Link from "next/link";
import { projects } from "@/app/projects/data";

export default function ProjectInfo({ project }) {
  return (
    <section
      className="
        mt-12
        border-t
        border-slate-200
        pt-10
      "
      dir="ltr"
    >

      {/* Title */}
      <div className="mb-8">

        <h2
          className="
            text-3xl
            font-extrabold
            tracking-tight
            text-slate-900
          "
        >
          Latest Projects
        </h2>

      </div>



      {/* Cards */}

      <div
        className="
          grid
          grid-cols-1
          gap-6
          sm:grid-cols-2
        "
      >

        {project?.relatedProjects?.slice(0,4).map((item,index)=>{

          const relatedProject = projects.find(
            (p)=>p.slug === item.slug
          );


          if(!relatedProject) return null;



          return (

            <article
              key={`${relatedProject.slug}-${index}`}
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-xl
              "
            >


              {/* Image */}

              <div
                className="
                  relative
                  aspect-[16/10]
                  overflow-hidden
                  bg-slate-100
                "
              >

                <img
                  src={relatedProject.heroImage}
                  alt={relatedProject.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />


                <span
                  className="
                    absolute
                    left-5
                    top-5
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-white/90
                    text-sm
                    font-bold
                    text-slate-900
                    shadow
                  "
                >
                  {String(index+1).padStart(2,"0")}
                </span>


              </div>





              {/* Content */}

              <div className="p-6">


                <h3
                  className="
                    text-xl
                    font-bold
                    leading-tight
                    text-slate-900
                    transition-colors
                    duration-300
                    group-hover:text-indigo-600
                  "
                >
                  {relatedProject.title}
                </h3>



                <p
                  className="
                    mt-2
                    text-sm
                    text-slate-500
                  "
                >
                  Project case study
                </p>




                <div
                  className="
                    mt-5
                    flex
                    items-center
                    justify-end
                    border-t
                    border-slate-100
                    pt-4
                  "
                >

                  <Link
                    href={`/projects/${relatedProject.slug}`}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-slate-900
                      px-5
                      py-2.5
                      text-sm
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:bg-indigo-600
                    "
                  >
                    Read More
                    <span>
                      →
                    </span>

                  </Link>


                </div>


              </div>



            </article>


          );

        })}


      </div>


    </section>
  );
}