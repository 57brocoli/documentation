import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"

function MenuDeroulant({open}) {

  return (
    <motion.div animate={{y: open ? -100 : 66, opacity: open ? 0 : 1, position:'fixed'}} transition={{duration: 0.5}} className="w-full z-50">
        <div className="lg:hidden lg:items-center lg:w-auto nav px-8 py-4">
            <div className="lg:flex-grow font-bold text-center text-white">
                <NavLink to='/nationsound' className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
                Nation Sound
                </NavLink>
                <NavLink to='/liveevent' className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
                Live Event
                </NavLink>
            </div>
        </div>
    </motion.div>
  )
}

export default MenuDeroulant
