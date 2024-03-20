import { useState } from "react"
import MenuDeroulant from "./MenuDeroulant"
import { NavLink, Outlet } from "react-router-dom"
import logo from '/PixelEvent.jpg'
import githubIcon from '/git-hub.png'

export default function Navigation() {

    const [open, setOpen] = useState(true)
    const toggle = () => setOpen(o => !o)

  return (
   <>
   
    <nav className="flex items-center justify-between flex-wrap p-2 nav fixed w-full " style={{zIndex:500}}>
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <img src={logo} alt="Logo" width="50" height="50" className="ms-2"/>
            <NavLink to='/' className="font-bold text-xl tracking-tight ms-2">
                Documentation
            </NavLink>
        </div>
        <div className="w-full hidden flex-grow lg:flex text-lg lg:items-center lg:w-auto">
            <div className="lg:flex-grow flex justify-center font-bold text-white">
                <NavLink to='/nationsound' className={(nav) => (nav.isActive ? "orange block mt-4 lg:inline-block lg:mt-0 mr-10 " : "block mt-4 lg:inline-block lg:mt-0 mr-10 navhover")}>
                Nation Sound
                </NavLink>
                <NavLink to='/liveevent' className={(nav) => (nav.isActive ? "orange block mt-4 lg:inline-block lg:mt-0 mr-10" : "block mt-4 lg:inline-block lg:mt-0 mr-10 navhover")}>
                Live Event
                </NavLink>
                <NavLink to='/basededonnees' className={(nav) => (nav.isActive ? "orange block mt-4 lg:inline-block lg:mt-0 mr-10" : "block mt-4 lg:inline-block lg:mt-0 mr-10 navhover")}>
                Base de données
                </NavLink>
                <NavLink to='/api' className={(nav) => (nav.isActive ? "orange block mt-4 lg:inline-block lg:mt-0 mr-10" : "block mt-4 lg:inline-block lg:mt-0 mr-10 navhover")}>
                API
                </NavLink>
            </div>
        </div>
        <div className="me-3">
            <div className="lg:flex-grow flex justify-center">
                <img src={githubIcon} alt="git-hub" className=""/>
            </div>
        </div>
        <div className="block lg:hidden" >
            <button className="flex items-center px-3 py-2 border rounded text-white hover:border-white" onClick={toggle}>
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
    </nav>
    <MenuDeroulant open={open}/>
    <Outlet />
   </>
    
  )
}
