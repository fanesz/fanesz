import { Link } from "@remix-run/react"
import FadeInComponent from "./FadeInComponent"

const ProjectCard = (props: { link: string, img: string, delay: number, title: string, description: string }) => {

  return (
    <FadeInComponent delay={props.delay} slideIn={false}>
      <Link to={props.link} target="_blank">
        <div className="mt-5 rounded-lg hover:scale-105 hover:duration-300 transition-transform text-center">

          <img src={props.img} className="rounded-lg" />

          <div className="mt-3 text-white text-xl font-semibold">
            {props.title}
          </div>

          <div className="mt-1 text-gray-400">
            {props.description}
          </div>

        </div>
      </Link>
    </FadeInComponent>
  )
}

export default ProjectCard