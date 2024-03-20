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
                        <button className="text-lg tracking-tight ms-2 " onClick={()=>history.back()}>
                        &#x2B05; Retour
                        </button>
                    </div>
                    <div className='mx-3 mb-5 mt-4 py-2 text-center'>
                        <NavLink to='/nationsound/desktop' className="rounded-md border-2 bgJaune py-2 px-16 text-xl text-white">
                            NationSound
                        </NavLink>
                    </div>
                    <div className='my-4 mx-5'>
                        <NavLink to='/nationsound/desktop/maquettes' className={foncNav}>
                            Maquettes graphique
                        </NavLink>
                    </div>
                    <div className='my-4 mx-5'>
                        <NavLink to='/nationsound/desktop/technologies' className={foncNav}>
                            Technologies
                        </NavLink>
                    </div>
                    <div className='my-4 mx-5'>
                        <NavLink to='/nationsound/desktop/initialisation' className={foncNav}>
                            Initialisation
                        </NavLink>
                    </div>
                    <div className='my-4 mx-5'>
                        <NavLink to='/nationsound/desktop/logique' className={foncNav}>
                            Logique de développement
                        </NavLink>
                    </div>
                    <div className="items-center flex-shrink-0 text-white ms-5 my-4">
                        <h3 className="text-xl ">Code</h3>
                        <h3 className="text-lg mt-2 mx-4 jaune">Côté script</h3>
                        <ul className='mt-2 mx-5'>
                            <li className='my-1'>
                                <NavLink to='/nationsound/desktop/usestate' className={foncNavCode}>
                                    UseState
                                </NavLink>
                            </li>
                            <li className='my-1'>
                                <NavLink to='/nationsound/desktop/useeffect' className={foncNavCode}>
                                    UseEffect
                                </NavLink>
                            </li>
                            <li className='my-1'>
                                <NavLink to='/nationsound/desktop/useLoaderData' className={foncNavCode}>
                                    UseLoader
                                </NavLink>
                            </li>
                            <li className='my-1'>
                                <NavLink to='/nationsound/desktop/useNavigation' className={foncNavCode}>
                                    UseNavigation
                                </NavLink>
                            </li>
                            <li className='my-1'>
                                <NavLink to='/nationsound/desktop/useParams' className={foncNavCode}>
                                    UseParams
                                </NavLink>
                            </li>
                            <li className='my-1'>
                                <NavLink to='/nationsound/desktop/useRouteError' className={foncNavCode}>
                                    UseRouteError
                                </NavLink>
                            </li>
                            <li className='my-1'>
                                <NavLink to='/nationsound/desktop/varfonc' className={foncNavCode}>
                                    Variable et Fonction
                                </NavLink>
                            </li>
                        </ul>
                        <h3 className="text-lg mt-2 mx-4 jaune">Côté rendu</h3>
                        <ul className='mt-2 mx-5'>
                            <li className='my-1'>
                                <NavLink to='/nationsound/desktop/ternaire' className={foncNavCode}>
                                    Operateur ternaire
                                </NavLink>
                            </li>
                            <li className='my-1'>
                                <NavLink to='/nationsound/desktop/traitementdonnees' className={foncNavCode}>
                                    Traitement des données
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='my-4 mx-5'>
                        <NavLink to='/nationsound/desktop/deploiement' className={foncNav}>
                            Deploiement
                        </NavLink>
                    </div>
                </motion.div>
            </aside>
            
            <motion.div initial={{x: -300 }} animate={{x: open ? 0 : -300, position: 'fixed'}} transition={{duration: 0.6}} className='lg:hidden z-0' style={{zIndex:20}}>
                <aside className='nav flex font-bold' style={{height:screenSize.height-66, marginTop:66}}>
                    <motion.div initial={{x: open && -100, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{ duration:0.5 }} style={{width:300}}>
                        <div className="flex items-center flex-shrink-0 text-white mt-4">
                            <button className="text-lg tracking-tight ms-2 " onClick={()=>{history.back(), handleOpen()}}>
                            &#x2B05; Retour
                            </button>
                        </div>
                        <div className='mx-3 mb-5 mt-4 py-2 text-center'>
                            <NavLink className="rounded-md border-2 bgJaune py-2 px-16 text-xl text-white" onClick={handleOpen}>
                                NationSound
                            </NavLink>
                        </div>
                        <div className='my-4 mx-5'>
                            <NavLink to='/nationsound/desktop/maquettes' className={foncNav} onClick={handleOpen}>
                                Maquettes graphique
                            </NavLink>
                        </div>
                        <div className='my-4 mx-5'>
                            <NavLink to='/nationsound/desktop/technologies' className={foncNav} onClick={handleOpen}>
                                Technologies
                            </NavLink>
                        </div>
                        <div className='my-4 mx-5'>
                            <NavLink to='/nationsound/desktop/initialisation' className={foncNav} onClick={handleOpen}>
                                Initialisation
                            </NavLink>
                        </div>
                        <div className='my-4 mx-5'>
                            <NavLink to='/nationsound/desktop/logique' className={foncNav} onClick={handleOpen}>
                                Logique de développement
                            </NavLink>
                        </div>
                        <div className="items-center flex-shrink-0 text-white ms-5 my-4">
                            <h3 className="text-xl ">Code</h3>
                            <h3 className="text-lg mt-2 mx-4 jaune">Côté script</h3>
                            <ul className='mt-2 mx-5'>
                                <li className='my-1'>
                                    <NavLink to='/nationsound/desktop/usestate' className={foncNavCode} onClick={handleOpen}>
                                        UseState
                                    </NavLink>
                                </li>
                                <li className='my-1'>
                                    <NavLink to='/nationsound/desktop/useeffect' className={foncNavCode} onClick={handleOpen}>
                                        UseEffect
                                    </NavLink>
                                </li>
                                <li className='my-1'>
                                    <NavLink to='/nationsound/desktop/useLoaderData' className={foncNavCode} onClick={handleOpen}>
                                        UseLoader
                                    </NavLink>
                                </li>
                                <li className='my-1'>
                                    <NavLink to='/nationsound/desktop/useNavigation' className={foncNavCode} onClick={handleOpen}>
                                        UseNavigation
                                    </NavLink>
                                </li>
                                <li className='my-1'>
                                    <NavLink to='/nationsound/desktop/useParams' className={foncNavCode} onClick={handleOpen}>
                                        UseParams
                                    </NavLink>
                                </li>
                                <li className='my-1'>
                                    <NavLink to='/nationsound/desktop/useRouteError' className={foncNavCode} onClick={handleOpen}>
                                        UseRouteError
                                    </NavLink>
                                </li>
                                <li className='my-1'>
                                    <NavLink to='/nationsound/desktop/varfonc' className={foncNavCode} onClick={handleOpen}>
                                        Variable et Fonction
                                    </NavLink>
                                </li>
                            </ul>
                            <h3 className="text-lg mt-2 mx-4 jaune">Côté rendu</h3>
                            <ul className='mt-2 mx-5'>
                                <li className='my-1'>
                                    <NavLink to='/nationsound/desktop/ternaire' className={foncNavCode} onClick={handleOpen}>
                                        Operateur ternaire
                                    </NavLink>
                                </li>
                                <li className='my-1'>
                                    <NavLink to='/nationsound/desktop/traitementdonnees' className={foncNavCode} onClick={handleOpen}>
                                        Traitement des données
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className='my-4 mx-5'>
                        <NavLink to='/nationsound/desktop/deploiement' className={foncNav}  onClick={handleOpen}>
                            Deploiement
                        </NavLink>
                    </div>
                    </motion.div>
                    <button onClick={handleOpen} style={{position:"fixed", left:300}} className='py-4 px-5 rounded-r-lg backgroundVF'>
                        <motion.div animate={{ rotate: open ? 900 : 0 }} transition={{ duration:1.5}}>
                        &#10132; 
                        </motion.div>
                    </button>
                </aside>
            </motion.div>
            <Outlet />
            
        </div>
    )
}

export default Index