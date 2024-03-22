import React, { useEffect, useState } from 'react'
import jsonData from './codeScript.json'
import { AnimatePresence, motion } from 'framer-motion'
import Variable from './SousComposants/Variable'
import Fonction from './SousComposants/Fonction'

function VarFonc() {

    const[data, setData] = useState([])
        useEffect(()=>{
            setData(jsonData)
    },[])

    if (data.section) {
        var dataExtract = data.section.filter(section => section.titre === 'Variable et Fonction')
        var variable = dataExtract[0].content.variable
        var fonction = dataExtract[0].content.fonction
    }

    const filtre = ['Variable', 'Fonction']
    const [filtreActive, setFiltreActive] = useState('Variable')

    return (
        <main className='background pt-20 px-10'>
            <h1 className='text-xl'>Code</h1>
            {data.section &&
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 0.2}}>
                    <h2 className='text-2xl font-bold mb-10 orange'>{dataExtract[0].titre}</h2>
                    {dataExtract[0].content.introduction.map((intro,index)=>{
                        return(
                            <p key={index} className='text-lg font-semibold'>{intro}</p>
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

                    <h2 className='text-xl font-bold'>Cas d'utilisation :</h2>


                    <AnimatePresence mode="wait">
                        <motion.div
                        key={filtreActive ? filtreActive : "empty"}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        >
                        {filtreActive === "Variable" && <Variable data={variable}/>}
                        {filtreActive === "Fonction" && <Fonction data={fonction}/>}
                        </motion.div>
                    </AnimatePresence>
                    
                </motion.div>
            }
        </main>
    )
}

export default VarFonc