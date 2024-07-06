import { Link } from "@remix-run/react"
import { useState } from "react";

const SocialMedia = (props: { link?: string, img: string, username: string }) => {

  const [copyButton, setCopyButton] = useState(props.username);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(String(props.username));
    setCopyButton('Copied!');
    setTimeout(() => {
      setCopyButton(props.username);
    }, 2000);
  }

  return (
    <>
      {props.link && (
        <Link
          to={props.link}
          target="_blank"
          className="flex gap-3 p-1 ps-2 pe-3 w-fit rounded-md duration-200 text-green-200 hover:bg-green-200 hover:bg-opacity-25 cursor-pointer h-8">
          <div className="my-auto">
            <img src={props.img} className="w-5 h-5" />
          </div>
          <div className="my-auto">
            {props.username}
          </div>
        </Link>
      ) || (
          <div
            className="flex gap-3 p-1 ps-2 pe-3 w-fit rounded-md duration-200 text-green-200 hover:bg-green-200 hover:bg-opacity-25 cursor-pointer h-8"
            onClick={copyToClipboard}>
            <div className="my-auto">
              <img src={props.img} className="w-5 h-5" />
            </div>
            <div className="my-auto">
              {copyButton}
            </div>
          </div>
        )}
    </>
  )
}

export default SocialMedia