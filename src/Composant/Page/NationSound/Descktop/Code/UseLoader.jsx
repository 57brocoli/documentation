import React, { useEffect, useState } from 'react'
import jsonData from './codeScript.json'
import {motion} from 'framer-motion'

function UseLoader() {

    const [data, setData] = useState([])
    useEffect(()=>{
        setData(jsonData)
    },[])

    return (
        <main className='background pt-20 px-10'>
                <h1 className='text-xl'>Code</h1>
                {data.section &&
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 0.2}}>
                        <h2 className='text-2xl font-bold mb-10 orange'>{data.section[2].titre}</h2>
                        {data.section[2].content.introduction.map((intro,index)=>{
                            return(
                                <p key={index} className='text-lg font-semibold'>{intro}</p>
                            )
                        })}
                        <p>Import :</p>
                        <img src={data.section[2].content.imgImport} className='rounded border-2 my-2 h-10' alt="import du fichier" />
                        <hr className='my-7'/>
                        <article>
                            <h2 className='text-xl font-bold'>Cas d'utilisation :</h2>
                            {data.section &&
                                data.section[2].content.utilisation.map((cas, index)=>{
                                    return(
                                        <div key={index} className='mt-4 mb-8 font-semibold'>
                                            <h3 className='text-xl font-bold my-2 jaune'>{cas.nom}</h3>
                                            <div className='mx-4'>
                                                <h3 className='my-3'>Lieux : {cas.lieux}</h3>

                                                <section className='py-2'>
                                                    <h3 className='text-lg font-semibold'>A &#41; Initialisé le loadeur.</h3>
                                                    {cas.imgLoader.map((img, index)=>{
                                                        return(
                                                            <img key={index} src={img} className='rounded border-2 my-2' alt="useState"/>
                                                        )
                                                    })}
                                                    <div className='mt-3'>
                                                        {cas.explication.map((ex,index)=>{
                                                            return(
                                                                <p key={index} className='py-1'>{ex}</p>
                                                            )
                                                        })}
                                                    </div>
                                                </section>

                                                <section className="py-2">
                                                    <h3 className='text-lg font-semibold'>B &#41; Recuperation des données</h3>
                                                    {cas.imgUseLoaderData.map((img, index)=>{
                                                        return(
                                                            <img key={index} src={img} className='rounded border-2 my-2' alt="useState"/>
                                                        )
                                                    })}
                                                    <div className='mt-3'>
                                                        {cas.explicationSeteur.map((exp,index)=>{
                                                            return(
                                                                <p key={index} className='py-1'>{exp}</p>
                                                            )
                                                        })}
                                                    </div>
                                                </section>
                                                    
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </article>
                    </motion.div>
                }
            </main>
    )
}

export default UseLoader