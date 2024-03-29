import React, { useEffect, useState } from 'react'
import jsonData from './form.json'
import { motion, AnimatePresence } from "framer-motion"
import Concept from './SousComposants/Concept';
import Utilisation from './SousComposants/Utilisation';

function Form() {
    const [data, setData] = useState([]);

    useEffect(()=>{
        setData(jsonData)
    },[])

    if (data.section) {
        var intro = data.section.find(o=>o.titre==="Introduction")
        var concept = data.section.find(o=>o.titre==="Concept")
        var utilisation = data.section.find(o=>o.titre==="Utilisation")
    }

    const filtre = ["Conception", "Utilisation"]
    const [filtreActive, setFiltreActive] = useState('Conception')

    return (
        <main className='bgPage pt-20 px-10 w-full'>
            <h1 className='text-xl'>Formulaires</h1>
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
                                {filtreActive === "Conception" && <Concept data={concept}/>}
                                {filtreActive === "Utilisation" && <Utilisation data={utilisation}/>}
                            </motion.div>
                        </AnimatePresence>
                        
                    </motion.div>   
                </section>
            : <p>Données non disponibles.</p> }
        </main>
    )
}

export default Form