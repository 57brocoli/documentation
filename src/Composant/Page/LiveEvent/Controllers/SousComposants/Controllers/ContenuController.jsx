import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import Methode from '../Methodes/Methode'

function ContenuController({data}) {
    const filtre = ["programme", "edit", "editSection"]
    const [filtreActive, setFiltreActive] = useState('programme')

    if (data.content.methodes) {
        var programme = data.content.methodes.filter(o=>o.titre==="programme").at(0)
        var editJour = data.content.methodes.filter(o=>o.titre==="edit").at(0)
        var editSection = data.content.methodes.filter(o=>o.titre==="editSection").at(0)
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
                {filtreActive === "programme" && <Methode data={programme}/>}
                {filtreActive === "edit" && <Methode data={editJour}/>}
                {filtreActive === "editSection" && <Methode data={editSection}/>}
                </motion.div>
            </AnimatePresence>
        </main>
    )
}

export default ContenuController