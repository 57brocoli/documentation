import React, { useEffect, useState } from 'react'
import jsonData from './Technologies.json'
import { motion, AnimatePresence } from "framer-motion"
import Languages from './SousComposants/Languages'
import Vsc from './SousComposants/Vsc'
import Packages from './SousComposants/Packages'
import GitHub from './SousComposants/GitHub'

function Technologies() {
    const [data, setData] = useState([])
    useEffect(()=>{
        setData(jsonData)
    },[])

    const filtre = ["Languages", "Editeur de text", "Packages", "Gestionnaire de version"]
    const [filtreActive, setFiltreActive] = useState('Languages')
    return (
        <main className='background pt-20 px-10'>
            <h1 className='text-xl'>Technologies</h1>
            {data &&
                <section>
                    <h2 className='text-2xl font-bold mb-10 orange'>{data.titre}</h2>
                    {data.section &&
                        <>
                            <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
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
                                    {filtreActive === "Languages" && <Languages data={data.section[1]}/>}
                                    {filtreActive === "Editeur de text" && <Vsc data={data.section[2]}/>}
                                    {filtreActive === "Packages" && <Packages data={data.section[3]}/>}
                                    {filtreActive === "Gestionnaire de version" && <GitHub data={data.section[4]}/>}
                                </motion.div>
                            </AnimatePresence>
                        </>
                    }
                </section>
            }
        </main>
    )
}

export default Technologies