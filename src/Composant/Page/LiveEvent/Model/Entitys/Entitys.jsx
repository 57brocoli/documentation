import React, { useEffect, useState } from 'react';
import jsonData from './entitys.json'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

function Entitys() {
    const [data, setData] = useState([]);

    useEffect(()=>{
        setData(jsonData)
    },[])

    if (data.section) {
        var intro = data.section.find(o=>o.titre==="Introduction")
        var concept = data.section.find(o=>o.titre==="Concept")
        var content = data.section.find(o=>o.titre==="Day")
    }

    return (
        <main className='bgPage pt-20 px-10 w-full'>
            <h1 className='text-xl'>Entity</h1>
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
                                    <p className='jaune my-2'>Il n'est pas tres pertinant de présenter les entités dans cette partie de la documentation car elle ne sont qu'une représentation des tables de la base de données. C'est pouquoi ici nous observerons de facon partiel la structure d'une entité. <br />Pour plus de details sur la base de données <Link to={'/BDD'} className='text-rose-600 visited:text-purple-600'> clicker ici </Link></p>
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
                                    <p className='jaune text-xl'>Pour concevoir une entité :</p>
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

                        <hr className='my-7'/>
                            
                        <section className=''>
                            {content &&
                                <article className='lg:ms-5 font-semibold'>
                                    <h2 className='orange text-2xl'>{content.titre}.php</h2>
                                    <p className='my-3'>{content.content.introduction}</p>
                                    {content.content.parties.map((part, index)=>{
                                        return(
                                            <div key={index} className='mb-7'>
                                                <h2 className='text-xl jaune'>{part.titre}</h2>
                                                <div className='my-2'>
                                                    <img src={part.img} className='border-2 rounded' alt="image de l'entité"/>
                                                </div>
                                                <p className='text-lg jaune'>{part.introduction}</p>
                                                {part.text.map((text,index)=>{
                                                    return(
                                                        <p key={index}>{text}</p>
                                                    )
                                                })}
                                            </div>
                                        )
                                    })}
                                </article>
                            }
                        </section>
                    </motion.div>   
                </section>
            : <p>Données non disponibles.</p> }
        </main>
    );
}

export default Entitys;