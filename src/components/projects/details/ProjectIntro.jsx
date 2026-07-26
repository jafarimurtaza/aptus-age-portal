import Link from "next/link";

export default function ProjectIntro({ project }) {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#10233F]
        py-24
      "
    >


      {/* Decorative Gold Glow */}

      <div
        className="
          absolute
          -right-20
          top-10
          h-72
          w-72
          rounded-full
          bg-[#C9973E]/10
          blur-3xl
        "
      />


      <div
        className="
          relative
          mx-auto
          max-w-6xl
          px-6
          text-center
        "
      >



        {/* Breadcrumb */}


        <div
          className="
            mb-12
            flex
            items-center
            justify-center
            gap-3
            text-sm
            text-[#A8B1C2]
          "
        >


          <Link
            href="/"
            className="
              transition
              hover:text-[#C9973E]
            "
          >
            Home
          </Link>


          <span>
            /
          </span>


          <Link
            href="/projects"
            className="
              transition
              hover:text-[#C9973E]
            "
          >
            Projects
          </Link>


          <span>
            /
          </span>


          <span
            className="
              text-[#F8F5EE]
            "
          >
            Details
          </span>


        </div>







        {/* Main Title */}


        <div
          className="
            relative
            inline-block
          "
        >


          <span
            className="
              absolute
              -right-8
              top-1/2
              -z-10
              h-28
              w-28
              -translate-y-1/2
              rounded-full
              bg-[#C9973E]/20
              blur-xl
            "
          />



          <h1
            className="
              text-5xl
              font-extrabold
              tracking-tight
              text-[#F8F5EE]
              sm:text-6xl
            "
          >
            Project Details
          </h1>


        </div>








        {/* Project Information */}


        <div
          className="
            mt-12
          "
        >


          <h2
            className="
              text-3xl
              font-bold
              text-[#F8F5EE]
            "
          >
            {project.title}
          </h2>



          <p
            className="
              mt-4
              text-sm
              uppercase
              tracking-[0.3em]
              text-[#C9973E]
            "
          >
            {project.category}
          </p>


        </div>








        {/* Bottom Line */}


        <div
          className="
            mx-auto
            mt-12
            h-1
            w-24
            rounded-full
            bg-[#C9973E]
          "
        />



      </div>


    </section>
  );
}