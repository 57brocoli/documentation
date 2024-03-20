import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import { motion } from "framer-motion"

function Index() {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    function getCurrentDimension(){
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }
    useEffect(() => {
            const updateDimension = () => {
                setScreenSize(getCurrentDimension())
            }
            window.addEventListener('resize', updateDimension);
            return(() => {
                window.removeEventListener('resize', updateDimension);
            })
    }, [screenSize])

    const [open, setOpen] = useState(false)
    const handleOpen = () =>setOpen(o => !o)

    const foncNav = (nav) => (nav.isActive ? "text-xl orange": "text-xl text-white navhover") 
    const foncNavCode = (nav) => (nav.isActive ? "orange m-2": "text-white m-2 navhover")

    return (

        <div className='flex ' style={{minHeight: screenSize.height}}>

            <aside className='nav hidden lg:block font-bold' style={{marginTop:66}}>
                <motion.div initial={{x: -100, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{ duration:0.5 }}>
                    <div className="flex items-center flex-shrink-0 text-white mt-4">
                        <button className="font-bold text-lg tracking-tight ms-2 ">
                        &#x2B05; Retour
                        </button>
                    </div>
                    <div className='mx-3 mb-5 mt-4 py-2 text-center'>
                        <NavLink to='/liveevent' className="rounded-md border-2 bgJaune py-2 px-16 text-xl text-white">
                            NationSound
                        </NavLink>
                    </div>
                    <div className='my-4 mx-5'>
                        <NavLink to='/liveevent/maquettes' className={foncNav}>
                            Maquettes graphique
                        </NavLink>
                    </div>
                    <div className='my-4 mx-5'>
                        <NavLink to='/liveevent/technologies' className={foncNav}>
                            Technologies
                        </NavLink>
                    </div>
                    <div className='my-4 mx-5'>
                        <NavLink to='/liveevent/initialisation' className={foncNav}>
                            Initialisation
                        </NavLink>
                    </div>
                    <div className='my-4 mx-5'>
                        <NavLink to='/liveevent/logique' className={foncNav}>
                            Logique de développement
                        </NavLink>
                    </div>
                    <div className="items-center flex-shrink-0 text-white ms-5 my-4">
                        <h3 className="font-bold text-xl ">Code (MVC)</h3>
                        <h3 className="font-bold text-lg mt-2 mx-4 jaune">Côté Controller</h3>
                        <ul className='mt-2 mx-5'>
                            <li className='my-1'>
                                <NavLink to='/liveevent/controller' className={foncNavCode}>
                                    Controller
                                </NavLink>
                            </li>
                        </ul>
                        <h3 className="font-bold text-lg mt-2 mx-4 jaune">Côté Model</h3>
                        <ul className='mt-2 mx-5'>
                            <li className='my-1'>
                                <NavLink to='/liveevent/basedonnees' className={foncNavCode}>
                                    Base de Données
                                </NavLink>
                            </li>
                            <li className='my-1'>
                                <NavLink to='/liveevent/entitys' className={foncNavCode}>
                                    Entity
                                </NavLink>
                            </li>
                            <li className='my-1'>
                                <NavLink to='/liveevent/repository' className={foncNavCode}>
                                    Repository
                                </NavLink>
                            </li>
                            <li className='my-1'>
                                <NavLink to='/liveevent/form' className={foncNavCode}>
                                    Form
                                </NavLink>
                            </li>
                        </ul>
                        <h3 className="font-bold text-lg mt-2 mx-4 jaune">Côté Vue</h3>
                        <ul className='mt-2 mx-5'>
                            <li className='my-1'>
                                <NavLink to='/liveevent/templates' className={foncNavCode}>
                                    Templates
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='my-4 mx-5'>
                        <NavLink to='/liveevent/deploiement' className={foncNav}>
                            Deploiement
                        </NavLink>
                    </div>
                </motion.div>
            </aside>
            
            <motion.div initial={{x: -300 }} animate={{x: open ? 0 : -300, position: 'fixed'}} transition={{duration: 0.6}} className='lg:hidden z-0' style={{zIndex:20}}>
                <aside className='nav flex font-bold' style={{height:screenSize.height-66, marginTop:66}}>
                    <motion.div initial={{x: open && -100, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{ duration:0.5 }} style={{width:300}}>
                        <div className="flex items-center flex-shrink-0 text-white mt-4">
                            <button className="font-bold text-lg tracking-tight ms-2 " onClick={()=>{history.back(), handleOpen()}}>
                            &#x2B05; Retour
                            </button>
                        </div>
                        <div className='mx-3 mb-5 mt-4 py-2 text-center'>
                            <NavLink to='/liveevent' className="rounded-md border-2 bgJaune py-2 px-16 text-xl text-white" onClick={handleOpen}>
                                NationSound
                            </NavLink>
                        </div>
                        <div className='my-4 mx-5'>
                            <NavLink to='/liveevent/maquettes' className={foncNav} onClick={handleOpen}>
                                Maquettes graphique
                            </NavLink>
                        </div>
                        <div className='my-4 mx-5'>
                            <NavLink to='/liveevent/technologies' className={foncNav} onClick={handleOpen}>
                                Technologies
                            </NavLink>
                        </div>
                        <div className='my-4 mx-5'>
                            <NavLink to='/liveevent/initialisation' className={foncNav} onClick={handleOpen}>
                                Initialisation
                            </NavLink>
                        </div>
                        <div className='my-4 mx-5'>
                            <NavLink to='/liveevent/logique' className={foncNav} onClick={handleOpen}>
                                Logique de développement
                            </NavLink>
                        </div>
                        <div className="items-center flex-shrink-0 text-white ms-5 my-4">
                            <h3 className="font-bold text-xl ">Code (MVC)</h3>
                            <h3 className="font-bold text-lg mt-2 mx-4 jaune">Côté Controller</h3>
                            <ul className='mt-2 mx-5'>
                                <li className='my-1'>
                                    <NavLink to='/liveevent/controller' className={foncNavCode} onClick={handleOpen}>
                                        Controller
                                    </NavLink>
                                </li>
                            </ul>
                            <h3 className="font-bold text-lg mt-2 mx-4 jaune">Côté Model</h3>
                            <ul className='mt-2 mx-5'>
                                <li className='my-1'>
                                    <NavLink to='/liveevent/basedonnees' className={foncNavCode} onClick={handleOpen}>
                                        Base de Données
                                    </NavLink>
                                </li>
                                <li className='my-1'>
                                    <NavLink to='/liveevent/entitys' className={foncNavCode} onClick={handleOpen}>
                                        Entity
                                    </NavLink>
                                </li>
                                <li className='my-1'>
                                    <NavLink to='/liveevent/repository' className={foncNavCode} onClick={handleOpen}>
                                        Repository
                                    </NavLink>
                                </li>
                                <li className='my-1'>
                                    <NavLink to='/liveevent/form' className={foncNavCode} onClick={handleOpen}>
                                        Form
                                    </NavLink>
                                </li>
                            </ul>
                            <h3 className="font-bold text-lg mt-2 mx-4 jaune">Côté Vue</h3>
                            <ul className='mt-2 mx-5'>
                                <li className='my-1'>
                                    <NavLink to='/liveevent/templates' className={foncNavCode} onClick={handleOpen}>
                                        Templates
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className='my-4 mx-5'>
                            <NavLink to='/liveevent/deploiement' className={foncNav} onClick={handleOpen}>
                                Deploiement
                            </NavLink>
                        </div>
                    </motion.div>
                    <button onClick={handleOpen} style={{position:"fixed", left:300}} className='py-4 px-5 rounded-r-lg backgroundVF'>
                        <motion.div animate={{ rotate: open ? 900 : 0 }} transition={{ duration:1.5}}>
                            <p>&#10132;</p> 
                        </motion.div>
                    </button>
                </aside>
            </motion.div>
            <Outlet/>
        </div>
    )
}

export default Index