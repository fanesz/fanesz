import FadeInComponent from "~/components/FadeInComponent";
import { MetaFunction } from "@remix-run/node";
import { useEffect } from "react";
import ProjectCard from "~/components/ProjectCard";
import SectionTitle from "~/components/SectionTitle";
import nindy from "../../assets/project-pictures/nindy.webp";
import rpl from "../../assets/project-pictures/rpl.webp";
import blocksmasher from "../../assets/project-pictures/blocksmasher.webp";
import maribermusik from "../../assets/project-pictures/maribermusik.webp";
import advanceauth from "../../assets/project-pictures/advanceauth.webp";
import faneshelper from "../../assets/project-pictures/faneshelper.webp";
import browseractivitytracker from "../../assets/project-pictures/browseractivitytracker.webp";
import interviewku from "../../assets/project-pictures/interviewku.webp";
import golangrestfulapitemplete from "../../assets/project-pictures/golangrestfulapitemplete.webp";
import freewhatsappclient from "../../assets/project-pictures/freewhatsappclient.png";
import uvcemobile from "../../assets/project-pictures/uvcemobile.png";
import portalloker from "../../assets/project-pictures/portalloker.png";
import ligainggris from "../../assets/project-pictures/ligainggris.jpeg";
import fanesnotes from "../../assets/project-pictures/fanesnotes.png";

export const meta: MetaFunction = () => {
  return [
    { title: "Fanes's Projects" },
    { name: "description", content: "A projects that made by Fanes Pratama" },
  ];
};

const Projects = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const projectList = [
    {
      year: "2025",
      projects: [
        {
          link: "https://www.linkedin.com/pulse/how-build-free-whatsapp-client-api-gateway-using-golang-fanes-pratama-4hb4c",
          title: "Free WhatsApp Client Integration",
          description:
            "A step-by-step guide on how to build a free WhatsApp client API gateway using Golang.",
          img: freewhatsappclient,
        },
      ],
    },
    {
      year: "2024",
      projects: [
        {
          link: "https://github.com/orgs/PABI-Tugas-UAS/repositories",
          title: "Liga Inggris Mobile",
          description:
            "A mobile app project for Mobile Programming course as the Project Leader and developer. The app was built using Flutter with GetX and Rust for the baclend.",
          img: ligainggris,
        },
        {
          link: "https://github.com/orgs/PAWII-Portal-Loker/repositories",
          title: "Portal Loker",
          description:
            "A job portal website project for Web Dev collage course as the Project Leader and developer. The website was built using ReactTS, ExpressTS with OOP clean design architecture, and MongoDB.",
          img: portalloker,
        },
        {
          link: "https://ukmc.ac.id/pengumuman/universties-virtual-career-expo-uvce-2024",
          title: "UVCE Mobile App",
          description:
            "I led the development of a Mobile App for the UVCE 2024 as the Project Leader and backend developer. I also supervised the work of mobile and web developers. The app was built using Flutter, ReactTS, and Golang.",
          img: uvcemobile,
        },
        {
          link: "https://github.com/fanesz/golang-restful-api-templete",
          title: "Golang RESTful API Templete",
          description:
            "A templete to start golang RESTful API project with Expressjs design pattern. Made with Golang, Gin-Gonic, Gorm, and PostgreSQL.",
          img: golangrestfulapitemplete,
        },
        {
          link: "https://github.com/fanesz/FanesNotes",
          title: "Fanes Notes",
          description:
            "A simple notepad Desktop App with several features. Made with Electron and Typescript.",
          img: fanesnotes,
        },
      ],
    },
    {
      year: "2023",
      projects: [
        {
          link: "https://github.com/krisna31/interviewku",
          title: "InterviewKu",
          description:
            "A final capstone project for Bangkit Academy. My contribution, as a Machine Learning engineer, involves creating all the models using TensorFlow.",
          img: interviewku,
        },
        {
          link: "https://www.npmjs.com/package/@fanesz/browser-activity-tracker",
          title: "Browser Activity Tracker",
          description:
            "An NPM module that can track any user activity such as switching applications/tabs, mouse clicks/movements, and keyboard presses",
          img: browseractivitytracker,
        },
        {
          link: "https://github.com/fanesz/Advance-Auth",
          title: "Advance Auth",
          description:
            "An Advance Authorization System for backend microservice. Made with Golang, Gin-Gonic, and PostgreSQL.",
          img: advanceauth,
        },
        {
          link: "https://github.com/fanesz/MariBermusik-Srifoton2023",
          title: "MariBermusik",
          description:
            "A full-stack project for Srifoton 2023 Competition. Made with Vite.js, Express.js, and SQLite.",
          img: maribermusik,
        },
        {
          link: "https://github.com/fanesz/mc-block-smasher",
          title: "Block Smasher",
          description:
            "A Minecraft Plugin for Discord Community Anniversary Event. Made with Java and Spigot API.",
          img: blocksmasher,
        },
      ],
    },
    {
      year: "2022",
      projects: [
        {
          link: "https://main--serene-kashata-a012ac.netlify.app/",
          title: "Fanes Helper",
          description:
            "A multi-feature website with various tools such as string editor, pseudocode converter, statistics helper, etc. Made with Next.js, Tailwind CSS, and Strapi.",
          img: faneshelper,
        },
        {
          link: "https://github.com/fanesz/Nindy-V14",
          title: "Discord Bot - Nindy",
          description:
            "A Discord Bot for Discord Community helper. Made with Discord.js and SQLite.",
          img: nindy,
        },
        {
          link: "https://github.com/fanesz/Project-RPL",
          title: "Ayamku",
          description:
            "A full-stack project for Software Engineering course. Made with React.js, Express.js, and MySQL.",
          img: rpl,
        },
      ],
    },
  ];

  return (
    <div className="mb-10">
      {projectList.map((item, index) => (
        <div className="mt-7" key={index}>
          <FadeInComponent delay={1 * index} slideIn={true}>
            <SectionTitle text={item.year} />
            <div className="flex flex-wrap gap-5">
              {item.projects.map((project, indexchild) => (
                <div className="md:w-52" key={indexchild}>
                  <ProjectCard
                    link={project.link}
                    title={project.title}
                    description={project.description}
                    img={project.img}
                    delay={index + 0.3 + indexchild * 0.5}
                  />
                </div>
              ))}
            </div>
          </FadeInComponent>
        </div>
      ))}
    </div>
  );
};

export default Projects;
