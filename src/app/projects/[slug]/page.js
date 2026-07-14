import ProjectHeader from "@/components/projects/details/ProjectHeader";
import ProjectStory from "@/components/projects/details/ProjectStory";
import ProjectInfo from "@/components/projects/details/ProjectInfo";
import ProjectResults from "@/components/projects/details/ProjectResults";
import { notFound } from "next/navigation";


const projects = [
  {
    slug: "ngo-directory-platform",

    title: "NGO Directory Platform",

    category: "Community Platform",


    heroImage: "/projects/ngo-cover.jpg",

    storyImage: "/projects/ngo-story.jpg",


    description:
      "A digital platform designed to connect people with trusted organizations and make community services easier to discover.",


    relatedProjects: [
      {
        title: "MedCare App Design",
        image: "/projects/medcare.jpg",
      },
      {
        title: "Otto Phone Design",
        image: "/projects/otto.jpg",
      },
      {
        title: "OnlyMe Development",
        image: "/projects/onlyme.jpg",
      },
      {
        title: "ILO App Testing",
        image: "/projects/ilo.jpg",
      },
      {
        title: "UI Store",
        image: "/projects/store.jpg",
      },
      {
        title: "Business Platform",
        image: "/projects/business.jpg",
      }
    ],


    paragraphs: [
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",

      "The platform helps users find organizations, understand available services, and quickly connect with the right support providers.",

      "The project focuses on simple navigation, clear information structure, and an accessible user experience."
    ],


    duration: "4 weeks",

    views: "124",


    tags: [
      "React",
      "MongoDB",
      "UI/UX"
    ]
  }
];



export default async function ProjectDetailsPage({ params }) {


  const { slug } = await params;


  const project = projects.find(
    (item) => item.slug === slug
  );


  if (!project) {
    notFound();
  }



  return (

    <main
      className="
      min-h-screen
      bg-[#f8fafc]
      py-10
      "
    >


      <div
        className="
        max-w-3xl
        mx-auto
        bg-white
        px-8
        py-6
        shadow-sm
        "
      >


        <h1
          className="
          text-lg
          font-semibold
          text-slate-700
          mb-8
          "
        >
          Projects details
        </h1>



        <ProjectHeader project={project} />


        <ProjectStory project={project} />


        <ProjectInfo project={project} />


        <ProjectResults project={project} />


      </div>


    </main>

  );
}