import FadeInComponent from "~/components/fadeInComponent";
import { MetaFunction } from "@remix-run/node";
import { useEffect } from "react";
import ProjectCard from "~/components/ProjectCard";
import SectionTitle from "~/components/sectionTitle";
import nindy from "../../assets/project-pictures/nindy.jpg";
import rpl from "../../assets/project-pictures/rpl.png";
import blocksmasher from "../../assets/project-pictures/blocksmasher.png";
import maribermusik from "../../assets/project-pictures/maribermusik.png";
import advanceauth from "../../assets/project-pictures/advanceauth.png";
import faneshelper from "../../assets/project-pictures/faneshelper.png";
import browseractivitytracker from "../../assets/project-pictures/browseractivitytracker.png";
import interviewku from "../../assets/project-pictures/interviewku.png"

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
      behavior: "smooth"
    });
  }, []);
  const projectList = [
    {
      year: '2023',
      projects: [
        {
          link: 'https://github.com/krisna31/interviewku',
          title: 'InterviewKu',
          description: 'A final capstone project for Bangkit Academy. My contribution, as a Machine Learning engineer, involves creating all the models using TensorFlow.',
          img: interviewku
        },
        {
          link: 'https://www.npmjs.com/package/@fanesz/browser-activity-tracker',
          title: 'Browser Activity Tracker',
          description: 'An NPM module that can track any user activity such as switching applications/tabs, mouse clicks/movements, and keyboard presses',
          img: browseractivitytracker
        },
        {
          link: 'https://github.com/fanesz/Advance-Auth',
          title: 'Advance Auth',
          description: 'An Advance Authorization System for backend microservice. Made with Golang, Gin-Gonic, and PostgreSQL.',
          img: advanceauth
        },
        {
          link: 'https://github.com/fanesz/MariBermusik-Srifoton2023',
          title: 'MariBermusik',
          description: 'A full-stack project for Srifoton 2023 Competition. Made with Vite.js, Express.js, and SQLite.',
          img: maribermusik
        },
        {
          link: 'https://github.com/fanesz/mc-block-smasher',
          title: 'Block Smasher',
          description: 'A Minecraft Plugin for Discord Community Anniversary Event. Made with Java and Spigot API.',
          img: blocksmasher
        },
      ]
    },
    {
      year: '2022',
      projects: [
        {
          link: 'https://main--serene-kashata-a012ac.netlify.app/',
          title: 'Fanes Helper',
          description: 'A multi-feature website with various tools such as string editor, pseudocode converter, statistics helper, etc. Made with Next.js, Tailwind CSS, and Strapi.',
          img: faneshelper
        },
        {
          link: 'https://github.com/fanesz/Nindy-V14',
          title: 'Discord Bot - Nindy',
          description: 'A Discord Bot for Discord Community helper. Made with Discord.js and SQLite.',
          img: nindy
        },
        {
          link: 'https://github.com/fanesz/Project-RPL',
          title: 'Ayamku',
          description: 'A full-stack project for Software Engineering course. Made with React.js, Express.js, and MySQL.',
          img: rpl
        },
      ]
    },
  ]

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
                    title={project.title} description={project.description}
                    img={project.img} delay={index + 0.3 + indexchild * 0.5} />
                </div>
              ))}
            </div>
          </FadeInComponent>
        </div>
      ))}
    </div>
  )
}

export default Projects