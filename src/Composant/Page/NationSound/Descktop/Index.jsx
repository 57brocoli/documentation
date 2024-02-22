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
  return (
    <div className='flex ' style={{minHeight: screenSize.height}}>

        <aside className='nav hidden lg:block ' style={{marginTop:66}}>
            <motion.div initial={{x: -100, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{ duration:0.5 }}>
                <div className="flex items-center flex-shrink-0 text-white mt-4">
                    <button className="font-bold text-lg tracking-tight ms-2 " onClick={()=>history.back()}>
                    &#x2B05; Retour
                    </button>
                </div>
                <div className='rounded-md border-2 bgJaune mx-3 mb-6 mt-4 py-2'>
                    <h2 className="text-xl text-center font-bold text-white">NationSound</h2>
                </div>
                <div className='my-4 mx-5'>
                    <NavLink to='/nationsound/desktop' className="text-xl text-white font-bold">
                        Presentation
                    </NavLink>
                </div>
                <div className='my-4 mx-5'>
                    <NavLink to='/nationsound/desktop/maquettes' className="text-xl text-white font-bold">
                        Maquettes graphique
                    </NavLink>
                </div>
                <div className='my-4 mx-5'>
                    <NavLink to='/nationsound/desktop/technologies' className="text-xl text-white font-bold">
                        Technologies
                    </NavLink>
                </div>
                <div className='my-4 mx-5'>
                    <NavLink to='/nationsound/desktop/initialisation' className="text-xl text-white font-bold">
                        Initialisation
                    </NavLink>
                </div>
                <div className='my-4 mx-5'>
                    <NavLink to='/nationsound/desktop/logique' className="text-xl text-white font-bold">
                        Logique de développement
                    </NavLink>
                </div>
                <div className="items-center flex-shrink-0 text-white ms-5 my-4">
                    <h3 className="font-bold text-xl ">Code</h3>
                    <h3 className="font-bold text-lg mt-2 mx-4">Côté script</h3>
                    <ul className='mt-2 mx-5'>
                        <li className='my-1'>
                            <NavLink to='/nationsound/desktop/usestate' className="font-bold m-2">
                                UseState
                            </NavLink>
                        </li>
                        <li className='my-1'>
                            <NavLink to='/nationsound/desktop/useeffect' className="font-bold m-2">
                                UseEffect
                            </NavLink>
                        </li>
                        <li className='my-1'>
                            <NavLink to='/nationsound/desktop/useLoaderData' className="font-bold m-2">
                                UseLoader
                            </NavLink>
                        </li>
                        <li className='my-1'>
                            <NavLink to='/nationsound/desktop/useNavigation' className="font-bold m-2">
                                UseNavigation
                            </NavLink>
                        </li>
                        <li className='my-1'>
                            <NavLink to='/nationsound/desktop/useParams' className="font-bold m-2">
                                UseParams
                            </NavLink>
                        </li>
                        <li className='my-1'>
                            <NavLink to='/nationsound/desktop/useRouteError' className="font-bold m-2">
                                UseRouteError
                            </NavLink>
                        </li>
                        <li className='my-1'>
                            <NavLink to='/nationsound/desktop/varfonc' className="font-bold m-2">
                                Variable et Fonction
                            </NavLink>
                        </li>
                    </ul>
                    <h3 className="font-bold text-lg mt-2 mx-4">Côté rendu</h3>
                    <ul className='mt-2 mx-5'>
                        <li className='my-1'>
                            <NavLink to='/nationsound/desktop/ternaire' className="font-bold m-2">
                                Operateur ternaire
                            </NavLink>
                        </li>
                        <li className='my-1'>
                            <NavLink to='/nationsound/desktop/traitementdonnees' className="font-bold m-2">
                                Traitement des données
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='my-4 mx-5'>
                    <NavLink to='/nationsound/desktop/deploiement' className="text-xl text-white font-bold">
                        Deploiement
                    </NavLink>
                </div>
            </motion.div>
        </aside>
        
        <motion.div animate={{x: open ? -300 : 0, position: 'fixed'}} transition={{duration: 0.3}} className='lg:hidden z-0'>
            <aside className='nav flex' style={{height:screenSize.height-66, marginTop:66}}>
                <motion.div initial={{x: open && -100, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{ duration:0.5 }} style={{width:300}}>
                    <div className="flex items-center flex-shrink-0 text-white mt-4">
                        <button className="font-bold text-lg tracking-tight ms-2 " onClick={()=>history.back()}>
                        &#x2B05; Retour
                        </button>
                    </div>
                    <h2 className="text-xl font-bold ms-3 mb-6 text-white mt-4">NationSound</h2>
                    <div className='my-4 mx-5'>
                        <NavLink to='/nationsound/desktop' className="text-xl text-white font-bold" onClick={handleOpen}>
                            Presentation
                        </NavLink>
                    </div>
                    <div className='my-4 mx-5'>
                        <NavLink to='/nationsound/desktop/logique' className="text-xl text-white font-bold" onClick={handleOpen}>
                            Logique de développement
                        </NavLink>
                    </div>
                    <div className='my-4 mx-5'>
                        <NavLink to='/nationsound/desktop/maquettes' className="text-xl text-white font-bold" onClick={handleOpen}>
                            Maquettes graphique
                        </NavLink>
                    </div>
                    <div className="items-center flex-shrink-0 text-white mx-5 my-4">
                        <h3 className="font-bold text-xl ">UseHook</h3>
                        <ul className='mt-2'>
                            <li className='my-1'>
                                <NavLink to='/nationsound/desktop/usestate' className="font-bold m-2" onClick={handleOpen}>
                                    UseState
                                </NavLink>
                            </li>
                            <li className='my-1'>
                                <NavLink to='/nationsound/desktop/useeffect' className="font-bold m-2" onClick={handleOpen}>
                                    UseEffect
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </motion.div>
                <button onClick={handleOpen} style={{position:"fixed", left:300}} className='py-4 px-5 rounded-r-lg backgroundVF'>
                    <motion.div initial={{ rotate: open ? 900 : 0 }} animate={{ rotate: open ? 0 : 900 }} transition={{ duration:1.5}}>
                        <p>&#10132;</p> 
                    </motion.div>
                </button>
            </aside>
        </motion.div>
        <Outlet />
        
    </div>
  )
}

export default Index