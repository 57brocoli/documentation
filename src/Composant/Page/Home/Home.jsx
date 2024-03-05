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
            <h1 className='text-6xl font-semibold mt-6'>Live event</h1>
            <div className='flex justify-center items-center mt-4'>
                <img src={logo} alt="Logo" className=''/>
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
                    <p className='mt-2 text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsum autem voluptatum facere. Optio facilis quia ipsa distinctio eveniet eos exercitationem nam omnis ad odio soluta assumenda, debitis quis molestiae!</p>
                    <p className='mt-2 text-right'><span className='underline underline-offset-4 font-semibold'>Version :</span> 1.0</p>
                </Link>
            </motion.div>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration:2 }} className='border-2 rounded-md p-6 mx-4 my-9 lg:basis-1/3'>
                <Link to='/liveevent' >
                    <div className='box-iconFloat box-symfony'>
                        <img src={symfony} alt="logo symfony" className='iconFloat'/>
                    </div>
                    <h3 className='font-semibold text-2xl ms-9 lg:ms-0 text-center textSymphony'>Live Event</h3>
                    <p className='mt-2 text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsum autem voluptatum facere. Optio facilis quia ipsa distinctio eveniet eos exercitationem nam omnis ad odio soluta assumenda, debitis quis molestiae!</p>
                    <p className='mt-2 text-right'><span className='underline underline-offset-4 font-semibold'>Version :</span> 1.0</p>
                </Link>
            </motion.div>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration:2 }} className='border-2 rounded-md p-6 mx-4 my-9 lg:basis-1/3'>
                <Link to='/nationsound' >
                    <div className='box-iconFloat box-mysql'>
                        <img src={mysql} alt="logo mysql" className='iconFloat'/>
                    </div>
                    <h3 className='font-semibold text-2xl ms-9 lg:ms-0 text-center textMysql'>BDD</h3>
                    <p className='mt-2 text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsum autem voluptatum facere. Optio facilis quia ipsa distinctio eveniet eos exercitationem nam omnis ad odio soluta assumenda, debitis quis molestiae!</p>
                </Link>
            </motion.div>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration:2 }} className='border-2 rounded-md p-6 mx-4 my-9 lg:basis-1/3'>
                <Link to='/nationsound' >
                    <div className='box-iconFloat box-apiplatform'>
                        <img src={apiplatform} width="96" height="96" alt="logo apiplatform" className='iconFloat'/>
                    </div>
                    <h3 className='font-semibold text-2xl ms-9 lg:ms-0 text-center textApiplatform'>API</h3>
                    <p className='mt-2 text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsum autem voluptatum facere. Optio facilis quia ipsa distinctio eveniet eos exercitationem nam omnis ad odio soluta assumenda, debitis quis molestiae!</p>
                </Link>
            </motion.div>
            
            
            
        </section>
    </div>
    
  )
}

export default Home