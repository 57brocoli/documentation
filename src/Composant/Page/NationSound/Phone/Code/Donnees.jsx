import React, { useEffect, useState } from 'react'
import jsonData from './codeRendu.json'
import {AnimatePresence, motion} from 'framer-motion'
import Home from './SousComposants/Home'
import Page2 from './SousComposants/Page2'

function Données() {

    const[data, setData] = useState([])
    useEffect(()=>{
        setData(jsonData)
    },[])

    if (data.section) {
        var données = data.section.filter(o=>o.titre === "Traitement des données").at(0)
        var home = données.content.composants.filter(sec=>sec.nom === "Accueil.js").at(0)
        var page2 = données.content.composants.filter(sec=>sec.nom === "Page2.jsx").at(0)
    }

    const filtre = ['1er et 2nd couche', '3eme couche']
    const [filtreActive, setFiltreActive] = useState('1er et 2nd couche')

    return (
        <main className='background pt-20 px-10'>
            <h1 className='text-xl'>Code</h1>
            {données &&
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 0.2}}>
                    <h2 className='text-2xl font-bold mb-10 orange'>{données.titre}</h2>
                    {données.content.introduction.map((intro,index)=>{
                        return(
                            <p key={index} className='text-lg '>{intro}</p>
                        )
                    })}

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
                        {filtreActive === "1er et 2nd couche" && <Home home={home}/>}
                        {filtreActive === "3eme couche" && <Page2 o={page2}/>}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            }
        </main>
    )
}

export default Données