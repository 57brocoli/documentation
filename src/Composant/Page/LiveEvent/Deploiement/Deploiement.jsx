import React, { useEffect, useState } from 'react'
import jsonData from './deploiement.json'
import { AnimatePresence, motion } from "framer-motion"
import logo from '/hostinger.png'
import Etapes from './SousComposants/Etapes';

function Deploiement() {
    const [data, setData] = useState([]);

    useEffect(()=>{
        setData(jsonData)
    },[])

    if (data.section) {
        var intro = data.section.find(o=>o.titre==="Introduction")
        var hostinger = data.section.find(o=>o.titre==="Hostinger")
        var code = data.section.find(o=>o.titre==="Code source")
        var exort = data.section.find(o=>o.titre==="Exportation du code source vers l'hebergeur")
        var instal = data.section.find(o=>o.titre==="Instalation des dépendance + mise à jour de la base de données + fichier htaccess")
    }

    const filtre = ["Hostinger", "Code source", "FileZilla", "Terminal"]
    const [filtreActive, setFiltreActive] = useState('Hostinger')

    return (
        <main className='bgPage pt-20 px-10 w-full'>
            <h1 className='text-xl'>Deploiement</h1>
            {data ?
                <section>
                    <h2 className='text-2xl font-bold mb-10 orange'>{data.titre}</h2>
                    <motion.div initial={{opacity: 0}} animate={{opacity:1}}>
                        <section>
                            {intro ?
                                <article className='lg:ms-5 font-semibold'>
                                    <h2 className='text-2xl mb-3 jaune'>{intro.titre}</h2>
                                    <div >
                                        <div className='w-48 float-left me-3'>
                                            <img src={logo} className='' alt="Logo hostinger" />
                                        </div>
                                        <div>
                                        {intro.content.introduction.map((intro, index)=>{
                                            return(
                                            <p key={index} className='px-3'>{intro}</p>
                                            )
                                        })}
                                        </div>
                                    </div>
                                    
                                    <p className='jaune my-2'>Attention :  Le nom de domaine pour le site web LiveEvent est PixelEvent, étant donné que LiveEvent est déjà pris. De plus, le site web LiveEvent est le site mère du domaine, ce qui fait que le site web NationSound et la documentation sont des sous-domaines.
                                    </p>
                                </article>
                            : (
                                <p>Introduction non disponibles.</p>
                            )}
                        </section>

                        <hr className='my-7'/>

                        <p className='jaune my-2 font-semibold text-center mb-7'>Le déploiement de notre site Symfony demande plusieurs manipulations. De la modification du code source à l'installation des dépendances, le processus est découpé en plusieurs étapes en fonction du lieu ou les manipulations sont réaliser :</p>

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
                                {filtreActive === 'Hostinger' && <Etapes data={hostinger}/>}
                                {filtreActive === 'Code source' && <Etapes data={code}/>}
                                {filtreActive === 'FileZilla' && <Etapes data={exort}/>}
                                {filtreActive === 'Terminal' && <Etapes data={instal}/>}
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>   
                </section>
            : <p>Données non disponibles.</p> }
        </main>
    )
}

export default Deploiement