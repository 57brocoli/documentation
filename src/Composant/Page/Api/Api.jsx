import React, { useEffect, useState } from 'react'
import jsonData from './API.json'
import { AnimatePresence, motion } from "framer-motion"
import logo from '/apiplatform.png'
import { Link } from 'react-router-dom'
import Concept from './SousComposants/Concept'

function Api() {
    const [data, setData] = useState([])

    useEffect(()=>{
        setData(jsonData)
    },[])

    if (data.section) {
        var intro = data.section.find(o=>o.titre==="Introduction")
        var concept = data.section.find(o=>o.titre==="Concept")
        var config = data.section.find(o=>o.titre==="Configuration")
    }

    const filtres = ["Concept", "Configuration"]
    const [filtreActive, setFiltreActive] = useState('Concept')
    
    return (
        <main className='bgPage pt-20 px-10 pb-2'>
            <h1 className='text-xl'>API</h1>
            {data ?
                <section>
                    <h2 className='text-2xl font-bold mb-10 orange'>{data.titre}</h2>
                    <motion.div initial={{opacity: 0}} animate={{opacity:1}}>
                        <section>
                            {intro ?
                                <article className='lg:ms-5 font-semibold'>
                                <h2 className='text-2xl mb-3 jaune'>{intro.titre}</h2>
                                <section>
                                    <img src={logo} style={{height:200}} className='mr-7 float-left' alt='logo mysql'/>
                                    <div>
                                        {intro.content.introduction.map((intro, index)=>{
                                            return(
                                            <p key={index}>{intro}</p>
                                            )
                                        })}
                                    </div>
                                </section>
                                <p className='jaune my-3'>Avec API Platform, nous allons mettre en place une API RESTful qui nous permettra d'effectuer des opérations telles que la lecture et la création de ressources, tout en respectant le typage des données pour la sécurité de l'application.
                                </p>
                            </article>
                            : (
                                <p>Introduction non disponibles.</p>
                            )}
                        </section>
                    </motion.div>

                    <hr className='my-7'/>

                    <section className='flex justify-center'>
                        {filtres.map((btn, index)=>{
                            return(
                                <button key={index} className='border-solid border-2 py-2 first:rounded-l-lg last:rounded-r-lg w-48' onClick={()=>setFiltreActive(btn)}>
                                {btn}
                                </button>
                            )
                        })}
                    </section>

                    {data.section &&
                    <AnimatePresence mode="wait">
                        <motion.div
                        key={filtreActive ? filtreActive : "empty"}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        >
                            {filtreActive === "Concept" && <Concept data={concept}/>}
                            {filtreActive === "Configuration" && <Concept data={config}/>}
                        </motion.div>
                    </AnimatePresence>
                    }
                </section>
            : <p>Données non disponnible</p>}
        </main>
    )
}

export default Api