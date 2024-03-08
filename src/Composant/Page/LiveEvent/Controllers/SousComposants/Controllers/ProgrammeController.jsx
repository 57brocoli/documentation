import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import Methode from '../Methodes/Methode'

function ProgrammeController({data}) {
    
    const filtre = ["jours", "editJour", "deleteJour"]
    const [filtreActive, setFiltreActive] = useState('jours')

    if (data.content.methodes) {
        var jours = data.content.methodes.filter(o=>o.titre==="jours").at(0)
        var editJour = data.content.methodes.filter(o=>o.titre==="editJour").at(0)
        var deleteJour = data.content.methodes.filter(o=>o.titre==="deleteJour").at(0)
    }

    return (
        <main className='my-5'>
            <h2 className='text-2xl font-bold orange'>{data.titre}</h2>
            <section className='my-3'>
                <div style={{maxWidth:900}}>
                    <img src={data.img} className='border-2 rounded' alt="img de la classe" />
                </div>
                <ul>
                    {data.content.introduction.map((intro, index)=>{
                        return(
                            <li key={index} className='my-2 font-semibold '>
                                {intro}
                            </li>
                        )
                    })}
                </ul>
            </section>
            <p className='my-2 font-semibold jaune'>{data.content.text}</p>

            <section className='flex justify-center my-8'>
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
                {filtreActive === "jours" && <Methode data={jours}/>}
                {filtreActive === "editJour" && <Methode data={editJour}/>}
                {filtreActive === "deleteJour" && <Methode data={deleteJour}/>}
                </motion.div>
            </AnimatePresence>
        </main>
    )
}

export default ProgrammeController