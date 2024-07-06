import { Link } from "@remix-run/react"

const RedirectLink = (props: { children: React.ReactNode, link: string }) => {

  return (
    <Link
      to={props.link}
      target="_blank"
      className="text-green-100 hover:text-green-200 duration-200">
      {props.children}
    </Link>
  )
}

export default RedirectLink