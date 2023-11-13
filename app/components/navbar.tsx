import { Link, useMatches } from "@remix-run/react";
import { motion } from "framer-motion";

const Navbar = () => {
  const currentPath = useMatches()[1].id.split('/')[1];

  return (
    <div className="text-white flex gap-3">
      <motion.article
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: currentPath === '_index' ? '15rem' : '11rem', opacity: 1 }}
        exit={{ width: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: 'easeInOut' }}
        style={{ position: 'relative' }}>
        <Link to='/'>
          <div className={`p-2 px-4 rounded-md font-semibold text-xl hover:bg-green-200 hover:bg-opacity-30 duration-300 cursor-pointer bg-opacity-20 ${currentPath === '_index' ? 'bg-green-200 w-60' : 'w-44'}`}>
            Fanes Pratama
          </div>
        </Link>
      </motion.article>

      <motion.article
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: currentPath === '_index' ? '11rem' : '15rem', opacity: 1 }}
        exit={{ width: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: 'easeInOut' }}
        style={{ position: 'relative' }}>
      <Link to='/projects'>
        <div className={`p-2 px-4 rounded-md font-semibold text-xl hover:bg-green-200 hover:bg-opacity-30 duration-300 cursor-pointer bg-opacity-20 ${currentPath === 'projects' ? 'bg-green-200 w-60' : 'w-44'}`}>
          Projects
        </div>
      </Link>
    </motion.article>

    </div >
  )
}

export default Navbar