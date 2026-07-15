import ProjectHeader from "@/components/projects/details/ProjectHeader";
import ProjectStory from "@/components/projects/details/ProjectStory";
import ProjectInfo from "@/components/projects/details/ProjectInfo";
import ProjectResults from "@/components/projects/details/ProjectResults";
import { notFound } from "next/navigation";


const projects = [
  {
    slug: "ngo-directory-platform",

    title: "NGO Directory Platform",

    author: "ZAINAB MOHAMMADI",

    category: "Community Platform",

    heroImage: "/images/NGO.jpeg",

    storyImage: "/images/Florian B_ 🌌 (@florian_belz) on X.jpeg",

    images: [
      "/projects/ngo-1.jpg",
      "/projects/ngo-2.jpg",
      "/projects/ngo-3.jpg"
    ],

    description:
      "A platform that connects NGOs with volunteers, donors, and communities.",


    paragraphs: [
      "NGO Directory Platform is a digital platform designed to connect people with trusted organizations.",

      "The platform helps users discover NGOs, understand available services, and build stronger community connections.",

      "The project focuses on clean design, simple navigation, and a better user experience."
    ],


    duration: "4 weeks",

    views: 124,


    tags: [
      "UI/UX",
      "React",
      "MongoDB"
    ],


    relatedProjects: [
      {
        title: "MedCare App Design",
        image: "/images/Back Print Hoodie Design Ideas That Sell.jpeg"
      },
    
      {
        title: "Otto Phone Design",
        image: "/images/EduFlex - E-Learning Hero Section Figma Template.jpeg"
      },
      {
        title: "OnlyMe Development",
        image: "/images/download (49).jpeg"
      },
          {
        title: "MedCare App Design",
        image: "/images/Back Print Hoodie Design Ideas That Sell.jpeg"
      },
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
    <main className="min-h-screen bg-[#f8fafc] py-10">

      <div className="max-w-3xl mx-auto bg-white px-8 py-6 shadow-sm rounded-xl">

        <h1 className="text-lg font-semibold text-slate-700 mb-8">
          Project Details
        </h1>


        <ProjectHeader project={project} />


        <ProjectStory project={project} />


        <ProjectInfo project={project} />


        <ProjectResults project={project} />


      </div>

    </main>
  );
}