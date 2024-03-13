import React, { useEffect, useState } from 'react'
import jsonData from './templates.json'
import { AnimatePresence, motion } from "framer-motion"
import Concept from './SousComposants/Concept';
import Formulaire from './SousComposants/Formulaire';

function Templates() {
    const [data, setData] = useState([]);

    useEffect(()=>{
        setData(jsonData)
    },[])

    if (data.section) {
        var intro = data.section.find(o=>o.titre==="Introduction")
        var formulaire = data.section.find(o=>o.titre==="Formulaire")
        var concept = data.section.find(o=>o.titre==="Concept")
    }

    const filtre = ["Concept de base", "Formulaire"]
    const [filtreActive, setFiltreActive] = useState('Concept de base')

    return (
        <main className='bgPage pt-20 px-10 w-full'>
            <h1 className='text-xl'>Templates</h1>
            {data ?
                <section>
                    <h2 className='text-2xl font-bold mb-10 orange'>{data.titre}</h2>
                    <motion.div initial={{opacity: 0}} animate={{opacity:1}}>
                        <section>
                            {intro ?
                                <article className='lg:ms-5 font-semibold'>
                                    <h2 className='text-2xl mb-3 jaune'>{intro.titre}</h2>
                                    {intro.content.introduction.map((intro, index)=>{
                                        return(
                                        <p key={index}>{intro}</p>
                                        )
                                    })}
                                    <p className='jaune my-2'>Dans ce projet nous allons utiliser le gestionnaire de template \" Twig \". Il s'agit du gestionnaire par default de Symfony, et il est tout à fait optimal pour ce type de projet.
                                    </p>
                                </article>
                            : (
                                <p>Introduction non disponibles.</p>
                            )}
                        </section>

                        <hr className='my-7'/>

                        <section className='flex justify-center'>
                            {filtre.map((btn, index)=>{
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
                                {filtreActive === "Concept de base" && <Concept data={concept}/>}
                                {filtreActive === "Formulaire" && <Formulaire data={formulaire}/>}
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>   
                </section>
            : <p>Données non disponibles.</p> }
        </main>
    )
}

export default Templates