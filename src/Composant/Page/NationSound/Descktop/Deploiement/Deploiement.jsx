import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import jsonData from './deploiement.json'

function Deploiement() {

    const data = jsonData

    return (
        <main className='background pt-20 px-10'>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
                <h1 className='text-xl'>Deploiement</h1>
                {data &&
                    <section>
                        <h2 className='text-2xl font-bold mb-10 orange'>{data.titre}</h2>
                        {data.section &&
                            data.section.map((section, index)=>{
                                return(
                                    <article key={index}>
                                        {section.content.img &&
                                            <img src={section.content.img} style={{height:200}} className='float-start me-5'/>
                                        }
                                        <div className='font-semibold'>
                                            <h2 className='text-2xl mb-3 jaune'>{section.content.titre}</h2>
                                            {section.content.introduction.map((intro, index)=>{
                                                return(
                                                    <p key={index} className='text-lg my-2'>{intro}</p>
                                                )
                                            })}
                                        </div>
                                        <hr className='my-4' />
                                    </article>
                                )
                            })
                        }
                    </section>
                }
            </motion.div>
        </main>
    )
}

export default Deploiement