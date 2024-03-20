import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"

function MenuDeroulant({open}) {
  const toggle = () => setOpen(o => !o)

  return (
    <motion.div animate={{y: open ? -130 : 50, opacity: open ? 1 : 1, position:'fixed'}} transition={{duration: 0.7}} className="w-full" style={{zIndex:50}}>
        <div className="lg:hidden lg:items-center lg:w-auto nav px-8 py-4">
            <div className="lg:flex-grow font-bold text-center text-white">
                <NavLink to='/nationsound' className={(nav) => (nav.isActive ? "orange block mt-4 lg:inline-block lg:mt-0 mr-10" : "block mt-4 lg:inline-block lg:mt-0 mr-10 navhover")} onClick={toggle}>
                Nation Sound
                </NavLink>
                <NavLink to='/liveevent' className={(nav) => (nav.isActive ? "orange block mt-4 lg:inline-block lg:mt-0 mr-10" : "block mt-4 lg:inline-block lg:mt-0 mr-10 navhover")} onClick={toggle}>
                Live Event
                </NavLink>
                <NavLink to='/basededonnees' className={(nav) => (nav.isActive ? "orange block mt-4 lg:inline-block lg:mt-0 mr-10" : "block mt-4 lg:inline-block lg:mt-0 mr-10 navhover")} onClick={toggle}>
                Base de données
                </NavLink>
                <NavLink to='/api' className={(nav) => (nav.isActive ? "orange block mt-4 lg:inline-block lg:mt-0 mr-10" : "block mt-4 lg:inline-block lg:mt-0 mr-10 navhover")} onClick={toggle}>
                API
                </NavLink>
            </div>
        </div>
    </motion.div>
  )
}

export default MenuDeroulant
