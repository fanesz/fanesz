import { Link, useMatches } from "@remix-run/react"

const Navbar = () => {
  const currentPath = useMatches()[1].id.split('/')[1];
  
  return (
    <div className="text-white flex gap-3">
      <Link to='/'>
        <div className={`p-2 px-4 rounded-md font-semibold text-xl hover:bg-green-100 hover:bg-opacity-30 duration-300 cursor-pointer bg-opacity-20 ${currentPath === '_index' && 'bg-green-100'}`}>
          Fanes Pratama
        </div>
      </Link>
      <Link to='/projects'>
        <div className={`p-2 px-4 rounded-md font-semibold text-xl hover:bg-green-100 hover:bg-opacity-30 duration-300 cursor-pointer bg-opacity-20 ${currentPath === 'projects' && 'bg-green-100'}`}>
          Projects
        </div>
      </Link>
    </div>
  )
}

export default Navbar