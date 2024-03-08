import React, { useEffect, useState } from 'react'
import jsonData from './logique.json'
import symfony from '/symfony.png'
import Architecture from './SousComposants/Architecture'
import { motion, AnimatePresence } from "framer-motion"
import Methodes from './SousComposants/Methodes'
import CouchesNavigation from './SousComposants/CouchesNavigation'

function Logique() {

    const [data, setData] = useState([])
    useEffect(()=>{
        setData(jsonData)
    },[])

    const filtre = ["Architecture", "Methodes"]
    const [filtreActive, setFiltreActive] = useState('Architecture')

    return (
        <main className='bgPage pt-20 px-10 w-full'>
            <h1 className='text-xl'>Logique</h1>
            {data && 
                <section>
                    <h2 className='text-2xl font-bold mb-10 orange'>{data.titre}</h2>
                    {data.section &&
                        <>
                            <section className='lg:flex'>
                                <img src={symfony} alt="logo react" style={{height:150}}/>
                                <article className='lg:ms-5 font-semibold'>
                                <h2 className='text-2xl mb-3 jaune'>{data.section[0].titre}</h2>
                                {data.section[0].content.introduction.map((intro, index)=>{
                                    return(
                                    <p key={index} className='text-lg py-2'>
                                        {intro}
                                    </p>
                                    )
                                })
                                }
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
                            <AnimatePresence mode="wait">
                                <motion.div
                                key={filtreActive ? filtreActive : "empty"}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                >
                                    {filtreActive === "Architecture" && <Architecture data={data}/>}
                                    {filtreActive === "Methodes" && <Methodes data={data}/>}
                                </motion.div>
                            </AnimatePresence>
                        </>
                    }
                </section>
            }
        </main>
    )
}

export default Logique