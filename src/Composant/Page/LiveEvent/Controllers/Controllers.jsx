import React, { useState } from 'react'
import jsonData from './controllers.json'
import { motion, AnimatePresence } from "framer-motion"
import ProgrammeController from './SousComposants/Controllers/ProgrammeController'
import ContenuController from './SousComposants/Controllers/ContenuController'

function Controllers() {

    const data = jsonData

    const filtre = ["ProgrammeController", "ContenuController"]
    const [filtreActive, setFiltreActive] = useState('ProgrammeController')

    if (data.section) {
        var programme = data.section.find(o=>o.titre === "ProgrammeController")
        var contenu = data.section.find(o=>o.titre === "ContenuController")
        if (!programme) {
            alert("La section ProgrammeController n'a pas été trouvée.");
        }
        if (!contenu) {
            alert("La section ContenuController n'a pas été trouvée.");
        }
    } else {
        console.error("Aucune section n'a été trouvée dans les données.");
    }
    
    return (
        <main className='bgPage pt-20 px-10 w-full'>
            <h1 className='text-xl '>Controller</h1>
            {data &&
                <section>
                    <h2 className='text-2xl font-bold mb-10 orange'>{data.titre}</h2>

                    {data.section &&
                        <>
                            <motion.div initial={{opacity: 0}} animate={{opacity:1}}>
                                <section>
                                    <article className='lg:ms-5 font-semibold'>
                                        <h2 className='text-2xl mb-3 jaune'>{data.section[0].titre}</h2>
                                        {data.section[0].content.introduction.map((intro, index)=>{
                                            return(
                                            <p key={index}>{intro}</p>
                                            )
                                        })}
                                    </article>
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
                            </motion.div>   

                            <AnimatePresence mode="wait">
                                <motion.div
                                key={filtreActive ? filtreActive : "empty"}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                >
                                {filtreActive === "ProgrammeController" && <ProgrammeController data={programme}/>}
                                {filtreActive === "ContenuController" && <ContenuController data={contenu}/>}
                                </motion.div>
                            </AnimatePresence>
                        </>
                    }
                </section>
            }
        </main>
    )
}

export default Controllers