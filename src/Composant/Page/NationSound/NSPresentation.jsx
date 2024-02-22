import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import { motion } from "framer-motion"


function NSPresentation() {
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
            <h2 className='mt-8 text-xl font-semibold'>Il existe 2 projet nation sound. Tout les deux ont été développer avec react.</h2>
            <p className='text-lg mt-6 mb-4'>Choisissez la version</p>
        </section>
        
        <section className='flex flex-wrap justify-center text-white container mx-auto'>
            <motion.div initial={{y: 100, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{ duration:0.5 }} className='border-2 rounded-md p-6 mx-4 my-9 w-full'>
                <Link to='/nationsound/desktop' className='text-center'>
                    <h3 className='font-semibold text-2xl ms-9 lg:ms-0 text-center textReact'>Desktop</h3>
                    <p className='mt-2 text-lg'>Version bureau. Développer en React, il s'agit du site web responssive mobile</p>
                    <p className='mt-2'><span className='underline underline-offset-4 font-semibold'>Version :</span> 1.0</p>
                </Link>
            </motion.div>
            <motion.div initial={{y: 100, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{ delay: 0.15, duration:0.5 }} className='border-2 rounded-md p-6 mx-4 my-9 w-full'>
                <Link to='/nationsound/phone' className='text-center'>
                    <h3 className='font-semibold text-2xl ms-9 lg:ms-0 text-center textSymphony'>Phone</h3>
                    <p className='mt-2 text-lg'>Version portable. Developper en React-native. Destiné a être utiliser lors du festival</p>
                    <p className='mt-2'><span className='underline underline-offset-4 font-semibold'>Version :</span> 1.0</p>
                </Link>
            </motion.div>
        </section>

    </div>
  )
}

export default NSPresentation