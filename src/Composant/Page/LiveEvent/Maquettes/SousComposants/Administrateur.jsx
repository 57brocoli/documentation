import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import AdminLE from './AdminLE'
import AdminNS from './AdminNS'

function Administrateur({data}) {

    const sections = ["Live Event", "Nation Sound"]
    const [filtreActive, setFiltreActive] = useState('Nation Sound')

    return (
        <article className='my-7'>
            <p className='text-center mb-5 orange text-lg font-semibold'>Il est important de séparer la partie administrateur pour le contenu de LiveEvent et celui de NationSound. Effectivement, il ne s'agit pas du même contenu, et de plus, il sera par la suite possible de spécifier des rôles pour chaque rédacteur.</p>

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
                    {filtreActive === "Live Event" && <AdminLE data={data} />}
                    {filtreActive === "Nation Sound" && <AdminNS data={data} />}
                </motion.div>
            </AnimatePresence>
        </article>
    )
}

export default Administrateur