import React from 'react'
import jsonData from './Maquettes.json'
import navDescktop from '/documentation/NS_VersionDescktop/Maquettes/barNavDescktop.png'
import navSmartpphone from "/documentation/NS_VersionDescktop/Maquettes/barNavSmartphone.png"
import couche1 from "/documentation/NS_VersionDescktop/Maquettes/couche1.png"
import couche2 from "/documentation/NS_VersionDescktop/Maquettes/couche2.png"
import couche3 from "/documentation/NS_VersionDescktop/Maquettes/couche3.png"
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

function Maquettes() {

    const data = jsonData

    return (
        <main className='background pt-20 px-10'>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
                <h1 className='text-xl'>Maquettes</h1>
                {data && 
                    <section>
                        <h2 className='text-2xl font-bold mb-10 orange'>{data.titre}</h2>
                        {data.section &&
                            <>
                                <section className='lg:flex'>
                                    <img src={data.logo} style={{height:200}} className='mr-7'/>
                                    <article className='lg:ms-5 font-semibold'>
                                        <h2 className='text-2xl mb-3'>{data.section[0].titre}</h2>
                                        <p className='text-lg py-2'>{data.section[0].content.introduction[0]}</p>
                                        <p className='text-lg py-2'>{data.section[0].content.introduction[1]} <a href="https://www.figma.com/file/Pc0TbZGAEIf0L6Gtiomal2/Database-Diagram-(Community)?type=design&node-id=0-1&mode=design&t=3gyXD080ShCzqn3k-0"  target='_blank' className=' text-sky-700 visited:text-purple-600'>ici</a></p>
                                    </article>
                                </section>

                                <hr className='my-7'/>
                                
                                {/* Navigation et structure du projet */}
                                <section>

                                    {/* La navigation */}
                                    <h2 className='text-2xl font-bold'>{data.section[1].titre}</h2>

                                    {/* Partie Barre de navigation*/}
                                    <article>
                                        <h3 className='text-xl font-semibold my-3 jaune'>{data.section[1].partieA.titre}</h3>
                                        <p className=''>{data.section[1].partieA.content.introduction}</p>
                                        {data.section[1].partieA.content.puces.map((puce, index)=>{
                                            return(
                                                <div key={index} className='py-3'>
                                                    <h3 className='text-lg font-semibold'>{puce.titre}</h3>
                                                    <img src={puce.img} className='border-2 rounded' alt="barr de navigation" />
                                                    <p>{puce.text}</p>
                                                </div>
                                            )
                                        })}
                                    </article>

                                    {/* Partie Navigation entre les pages*/}
                                    <article>
                                        <h3 className='text-xl font-semibold my-3 jaune'>{data.section[1].partieB.titre}</h3>
                                        <p>{data.section[1].partieB.content.introduction}</p>
                                        <p>Pour avoir plus de details sur <Link to={'/nationsound/desktop/Logique'} className='visited:text-purple-600'>les couches de navigation</Link> une section leurs sont dédiée</p>
                                        {data.section[1].partieB.content.puces.map((puce, index)=>{
                                            return(
                                                <div key={index} className='py-3'>
                                                    <p className='font-semibold underline underline-offset-4'>{puce.titre}</p>
                                                    <div className='flex flex-row'>
                                                        {puce.img.map((img, index)=>{
                                                            return(
                                                                <div key={index} className='basis-1/3 me-5'>
                                                                    <img  src={img} className='my-2 rounded border-2' alt="couche" />
                                                                </div>
                                                            )
                                                        })}
                                                        <div className='basis-2/3'>
                                                            {puce.text.map((text, index)=>{
                                                                return(
                                                                    <p key={index} className=' px-10 pt-5'>{text}</p>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </article>
                                </section>
                            </>
                        }
                    </section>
                }
            </motion.div>
        </main>
    )
}

export default Maquettes