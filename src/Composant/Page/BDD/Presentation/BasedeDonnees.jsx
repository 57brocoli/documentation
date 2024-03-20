import React, { useState , useEffect} from 'react'
import jsonData from '../bdd.json'
import { AnimatePresence, motion } from "framer-motion"
import logo from '/mysql.png'
import Tables from './SousComposants/Tables'

function BasedeDonnees() {

    const [data, setData] = useState([])

    useEffect(()=>{
        setData(jsonData)
    },[])
    
    if (data.section) {
        var intro = data.section.find(o=>o.titre==="Introduction")
        var prog = data.section.find(o=>o.titre==="Programme")
        var art = data.section.find(o=>o.titre==="Articles")
        var page = data.section.find(o=>o.titre==="Pages")
        var mobil = data.section.find(o=>o.titre==="MobileUsers")
    }

    const filtres = ["Programme", "Articles", "Pages", "MobileUsers"]
    const [filtreActive, setFiltreActive] = useState('Programme')

    return (
        <main className='bgPage pt-20 px-10 pb-2'>
            <h1 className='text-xl'>Base de données</h1>
            {data ?
                <section>
                    <h2 className='text-2xl font-bold mb-10 orange'>{data.titre}</h2>
                    <motion.div initial={{opacity: 0}} animate={{opacity:1}}>
                        <section>
                            {intro ?
                                <article className='lg:ms-5 font-semibold'>
                                <h2 className='text-2xl mb-3 jaune'>{intro.titre}</h2>
                                <section className=''>
                                    <img src={logo} style={{height:200}} className='mr-7 float-left' alt='logo mysql'/>
                                    <h3 className='jaune'>Notre base de données serat de type relationnelle. On utiliserat bien sur comme système de gestion de base de données "Mysql".</h3>
                                    <div>
                                        {intro.content.introduction.map((intro, index)=>{
                                            return(
                                            <p key={index}>{intro}</p>
                                            )
                                        })}
                                    </div>
                                </section>
                                <p className='jaune my-2'>Le choix d'une base de données de type relationnel s'est fait sur un critère essentiel pour notre projet. Comme dit précédemment dans les avantages qu'offre une base de données, elle permet de créer des relations entre plusieurs entités, ce qui n'est pas possible avec une base de données non relationnelle. De plus, notre BDD aura pour objectif d'être la source de l'API, il sera donc plus performant lors des requêtes car il sera possible d'exécuter une seule requête pour accéder aux relations qu'une table peut avoir.
                                <br/>Pour voir l'integralité du shema de la base de données <a href="https://www.figma.com/file/stL2LRLdDfXfOgyMIMHDYh/Database-Diagram-(Community)?type=design&node-id=0-1&mode=design&t=riWvMvNRE6iiXOnB-0" className='text-rose-600 visited:text-purple-600' target='blank'>clicker ici</a>
                                </p>
                            </article>
                            : (
                                <p>Introduction non disponibles.</p>
                            )}
                        </section>

                        <hr className='my-7'/>

                        <p className='jaune my-2 font-semibold text-center mb-7'>Pour comprendre la logique du schéma de notre base de données, nous allons prendre chaque groupe de tables dont les entités sont liées entre elles. Aussi, nous aurons au total 4 groupes de tables bien distincts. La FAQ étant une table seul, serat ignorée.</p>

                        <section className='flex justify-center'>
                            {filtres.map((btn, index)=>{
                                return(
                                    <button key={index} className='border-solid border-2 py-2 first:rounded-l-lg last:rounded-r-lg w-48' onClick={()=>setFiltreActive(btn)}>
                                    {btn}
                                    </button>
                                )
                            })}
                        </section>

                    </motion.div>
                    
                    {data.section &&
                    <AnimatePresence mode="wait">
                        <motion.div
                        key={filtreActive ? filtreActive : "empty"}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        >
                            {filtreActive === "Programme" && <Tables data={prog}/>}
                            {filtreActive === "Articles" && <Tables data={art}/>}
                            {filtreActive === "Pages" && <Tables data={page}/>}
                            {filtreActive === "MobileUsers" && <Tables data={mobil}/>}
                        </motion.div>
                    </AnimatePresence>
                    }
                    
                    
                </section>
            : <p>Données non disponibles.</p>}
        </main>
    )
}

export default BasedeDonnees