import React, { useEffect, useState } from 'react'
import jsonData from './Maquettes.json'
import { motion, AnimatePresence } from "framer-motion"
import Navigation from './SousComposants/Navigation'
import Utilisateur from './SousComposants/Utilisateur'
import Administrateur from './SousComposants/Administrateur'

function Maquettes() {

    const [data, setData] = useState([])
    useEffect(()=>{
        setData(jsonData)
    },[])

    const sections = ["Barre de navigation", "Page utilisateur", "Page administrateur"]
    const [filtreActive, setFiltreActive] = useState('Barre de navigation')

    return (
        <main className='bgPage pt-20 px-10 w-full'>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
                <h1 className='text-xl'>Maquettes</h1>
                {data && 
                    <section>
                        <h2 className='text-2xl font-bold mb-10 orange'>{data.titre}</h2>
                        {data.section &&
                            <>
                                <section className='lg:flex'>
                                    <img src={data.logo} style={{height:200}} className='mr-7'/>
                                    <article className='lg:ms-5 font-semibold'>
                                        <h2 className='text-2xl mb-3'>{data.section[0].titre}</h2>
                                        <p className='text-lg py-2'>{data.section[0].content.introduction[0]}</p>
                                        <p className='text-lg py-2'>{data.section[0].content.introduction[1]} <a href="https://www.figma.com/file/n7c0FCCybsL1gT5N8F3hsD/Untitled?type=design&node-id=0-1&mode=design&t=GsAX6xY2lY7MRHOx-0"  target='_blank' className=' text-sky-700 visited:text-purple-600'>ici</a></p>
                                    </article>
                                </section>

                                <hr className='my-7'/>

                                <h2 className='text-2xl font-bold text-center mb-4'>{data.section[1].titre}</h2>
                                <section className='flex justify-center'>
                                    {sections.map((btn, index)=>{
                                    return(
                                        <button key={index} className='border-solid border-2 py-2 first:rounded-l-lg last:rounded-r-lg w-48' onClick={()=>setFiltreActive(btn)}>
                                        {btn}
                                        </button>
                                    )
                                    })}
                                </section>

                                <AnimatePresence mode="wait">
                                    <motion.div
                                    key={filtreActive ? filtreActive : "empty"}
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -10, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    >
                                        {filtreActive === "Barre de navigation" && <Navigation data={data} />}
                                        {filtreActive === "Page utilisateur" && <Utilisateur data={data} />}
                                        {filtreActive === "Page administrateur" && <Administrateur data={data} />}
                                    </motion.div>
                                </AnimatePresence>
                            </>
                        }
                    </section>
                }
            </motion.div>
        </main>
    )
}

export default Maquettes