import React, { useEffect, useState } from 'react'
import jsonData from './database.json'
import { motion } from "framer-motion"
import logo from '/mysql.png'

function DataBase() {

    const [data, setData] = useState([]);

    useEffect(()=>{
        setData(jsonData)
    },[])

    if (data.section) {
        var intro = data.section.find(o=>o.titre==="Introduction")
        var concept = data.section.find(o=>o.titre==="Concept")
    }

    return (
        <main className='bgPage pt-20 px-10 w-full'>
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
                                    <br/> De plus, ici nous allons parler uniquement de la configuration de la base de données.
                                    <br/>Pour voir le shema de la base de données <a href="https://www.figma.com/file/stL2LRLdDfXfOgyMIMHDYh/Database-Diagram-(Community)?type=design&node-id=0-1&mode=design&t=riWvMvNRE6iiXOnB-0" className='text-rose-600 visited:text-purple-600' target='blank'>clicker ici</a>
                                    </p>
                                </article>
                            : (
                                <p>Introduction non disponibles.</p>
                            )}
                        </section>

                        <hr className='my-7'/>

                        <section>
                            {concept &&
                                <article className='lg:ms-5 font-semibold'>
                                    <h2 className='text-2xl orange'>{concept.titre}</h2>
                                    {concept.content.introduction.map((intro, index)=>{
                                        return(
                                            <p key={index} className='my-3'>{intro}</p>
                                        )
                                    })}
                                    <p className='jaune text-xl'>Pour configuré notre base de données :</p>
                                    <ul className='m-2 '>
                                        {concept.content.etapes.map((etape, index)=>{
                                            return(
                                                <li key={index} className='my-2'>
                                                    <section>
                                                        <h3 className='text-lg '>{etape.titre}</h3>
                                                        {etape.img &&
                                                            <div>
                                                                <img src={etape.img} className='rounded border-2 my-1' alt="image console"/>
                                                            </div>
                                                        }
                                                        {etape.text.map((text, index)=>{
                                                            return(
                                                                <p key={index}>{text}</p>
                                                            )
                                                        })}
                                                    </section>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </article>
                            }
                        </section>
                            
                        
                    </motion.div>   
                </section>
            : <p>Données non disponibles.</p> }
        </main>
    )
}

export default DataBase