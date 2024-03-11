import React, { useEffect, useState } from 'react'
import jsonData from './repository.json'
import { motion } from "framer-motion"


function Repository() {
    const [data, setData] = useState([]);

    useEffect(()=>{
        setData(jsonData)
    },[])

    if (data.section) {
        var intro = data.section.find(o=>o.titre==="Introduction")
        var utilisation = data.section.find(o=>o.titre==="Utilisation")
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
                                    {intro.content.introduction.map((intro, index)=>{
                                        return(
                                        <p key={index}>{intro}</p>
                                        )
                                    })}
                                </article>
                            : (
                                <p>Introduction non disponibles.</p>
                            )}
                        </section>

                        <hr className='my-7'/>

                        <section>
                            {utilisation ?
                                <article className='lg:ms-5 font-semibold'>
                                    <h2 className='text-2xl orange'>{utilisation.titre}</h2>
                                    <ul className='my-3'>
                                        {utilisation.content.introduction.map((intro, index)=>{
                                            return(
                                                <li key={index} className='my-1'>{intro}</li>
                                            )
                                        })}
                                    </ul>
                                    <p className='jaune text-xl'>Pour utilisé le repository :</p>
                                    <ul className='m-2 '>
                                        {utilisation.content.etapes.map((etape, index)=>{
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
                            : <p>Contenu indisponnible</p>}
                        </section>

                        {/* <hr className='my-7'/>

                        <section>
                            {concept ?
                                <article className='lg:ms-5 font-semibold'>
                                    <h2 className='text-2xl orange'>{concept.titre}</h2>
                                    <ul className='my-3'>
                                        {concept.content.introduction.map((intro, index)=>{
                                            return(
                                                <li key={index} className='my-1'>{intro}</li>
                                            )
                                        })}
                                    </ul>
                                    <p className='jaune text-xl'>Pour configurer une requête :</p>
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
                            : <p>Contenu indisponnible</p>}
                        </section> */}
                            
                        
                    </motion.div>   
                </section>
            : <p>Données non disponibles.</p> }
        </main>
    )
}

export default Repository