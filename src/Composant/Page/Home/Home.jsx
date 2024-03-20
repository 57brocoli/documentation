import React, { useEffect, useState } from 'react'
import react from '/react.png'
import symfony from '/symfony.png'
import mysql from '/mysql.png'
import apiplatform from '/apiplatform.png'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import logo from '/PixelEvent.jpg'

function Home() {

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

  return (
    <div className='bgPage pt-10' style={{minHeight: screenSize.height}}>
        <section className='p-8 text-white text-center'>
            <h1 className='text-6xl mt-6 fontRaph'>Live event</h1>
            <div className='flex justify-center items-center mt-4'>
                <img src={logo} alt="Logo"/>
            </div>
            <h2 className='mt-8 text-xl'>Bienvenu sur la documentation qui porte sur le dévéloppement des applications liées à PixelEvent</h2>
            <p className='text-lg mt-6 mb-4'>Choisissez la documentation du projet que vous souhaiterez consulter</p>
        </section>
        
        <section className='flex flex-wrap justify-center text-white'>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration:2 }} className='border-2 rounded-md p-6 mx-4 my-9 lg:basis-1/3'>
                <Link to='/nationsound' >
                    <div className='box-iconFloat box-react'>
                        <img src={react} alt="logo react" className='iconFloat'/>
                    </div>
                    <h3 className='font-semibold text-2xl ms-9 lg:ms-0 text-center textReact'>Nation Sound</h3>
                    <p className='mt-2 text-justify'>NationSound est un projet développé pour les ordinateurs de bureau ainsi que pour les smartphones. Il porte sur l'événement que la société LiveEvent organise : "NationSound". Vous trouverez ici les deux versions développées en React et React-Native.</p>
                    <p className='mt-2 text-right'><span className='underline underline-offset-4 font-semibold'>Version :</span> 1.0</p>
                </Link>
            </motion.div>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration:2 }} className='border-2 rounded-md p-6 mx-4 my-9 lg:basis-1/3'>
                <Link to='/liveevent' >
                    <div className='box-iconFloat box-symfony'>
                        <img src={symfony} alt="logo symfony" className='iconFloat'/>
                    </div>
                    <h3 className='font-semibold text-2xl ms-9 lg:ms-0 text-center textSymphony'>Live Event</h3>
                    <p className='mt-2 text-justify'>LiveEvent est l'application web de la société du même nom. Ce projet vise à être le site principal de la société. Il sert à la fois de vitrine pour les utilisateurs et les consommateurs d'événements organisés par la société, mais aussi de back-office pour les sites et applications de la société, tels que NationSound, par exemple.</p>
                    <p className='mt-2 text-right'><span className='underline underline-offset-4 font-semibold'>Version :</span> 1.0</p>
                </Link>
            </motion.div>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration:2 }} className='border-2 rounded-md p-6 mx-4 my-9 lg:basis-1/3'>
                <Link to='/basededonnees' >
                    <div className='box-iconFloat box-mysql'>
                        <img src={mysql} alt="logo mysql" className='iconFloat'/>
                    </div>
                    <h3 className='font-semibold text-2xl ms-9 lg:ms-0 text-center textMysql'>BDD</h3>
                    <p className='mt-2 text-justify'>Ici, vous trouverez la documentation concernant la base de données du site LiveEvent. Vous y trouverez des explications sur les schémas qui regroupent plusieurs tables. 
                    <br/>
                    Attention : Si vous recherchez des documents sur la mise en place et le déploiement de la base de données, rendez-vous sur Live Event.</p>
                </Link>
            </motion.div>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration:2 }} className='border-2 rounded-md p-6 mx-4 my-9 lg:basis-1/3'>
                <Link to='/api' >
                    <div className='box-iconFloat box-apiplatform'>
                        <img src={apiplatform} width="96" height="96" alt="logo apiplatform" className='iconFloat'/>
                    </div>
                    <h3 className='font-semibold text-2xl ms-9 lg:ms-0 text-center textApiplatform'>API</h3>
                    <p className='mt-2 text-justify'>L'API joue un rôle primordial dans la mise en place de la hiérarchisation entre le site principal et toutes les autres applications qui en découlent. C'est le pilier qui permet de partager les informations tout en sécurisant ces échanges. Vous trouverez ici comment elle a été installée et configurée.</p>
                </Link>
            </motion.div>
            
            
            
        </section>
    </div>
    
  )
}

export default Home