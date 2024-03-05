import React, { useEffect, useState } from 'react'
import jsonData from './Maquettes.json'
import navDescktop from '/documentation/LiveEvent/Maquettes/NavBar.png'
import tableauBord from "/documentation/LiveEvent/Maquettes/tableauBord.png"
import page1 from "/documentation/LiveEvent/Maquettes/pageAccueil.png"
import couche2 from "/documentation/NS_VersionDescktop/Maquettes/couche2.png"
import couche3 from "/documentation/NS_VersionDescktop/Maquettes/couche3.png"
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

function Maquettes() {

    const [data, setData] = useState([])
    useEffect(()=>{
        setData(jsonData)
    },[])

    return (
        <main className='bgPage pt-20 px-10'>
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

                                    {/* Partie A Barre de navigation*/}
                                    <article>
                                        <h3 className='text-xl font-semibold my-3 indent-5'>{data.section[1].partieA.titre}</h3>
                                        <p className='indent-5'>{data.section[1].partieA.content.introduction}</p>
                                        {data.section[1].partieA.content.puces.map((puce, index)=>{
                                            return(
                                                <div key={index} className='py-3'>
                                                    <p className='text-lg font-semibold'>{puce.titre}</p>
                                                    <div className='flex flex-wrap'>
                                                        <img src={puce.img} alt="bar de navigation bureau" className='my-2 border-2 rounded me-3'/>
                                                        <ul>
                                                            {puce.text.map((text, index)=>{
                                                                return(
                                                                    <li key={index} className='pt-2'>{text}</li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </article>

                                    {/* Partie B Navigation entre les pages*/}
                                    <article>
                                        <h3 className='text-xl font-semibold my-3 indent-5'>{data.section[1].partieB.titre}</h3>
                                        <p>{data.section[1].partieB.content.introduction}</p>
                                        <p>Pour avoir plus de details sur <Link to={'/nationsound/desktop/Logique'} className='visited:text-purple-600'>les couches de navigation</Link> une section leurs sont dédiée</p>
                                        <div className='py-3'>
                                            <p className='font-semibold underline underline-offset-4'>{data.section[1].partieB.content.puces[0].titre}</p>
                                            <img src={page1} alt="1er couche de navigation" className='py-2' style={{width:800}}/>
                                            <p>{data.section[1].partieB.content.puces[0].text}</p>
                                        </div>
                                        <div className='py-3'>
                                            <p className='font-semibold underline underline-offset-4'>{data.section[1].partieB.content.puces[1].titre}</p>
                                            <img src={couche2} alt="2nd couche de navigation" className='py-2' style={{width:800}}/>                      <p>{data.section[1].partieB.content.puces[1].text}</p>
                                        </div>
                                        <div className='py-3'>
                                            <p className='font-semibold underline underline-offset-4'>{data.section[1].partieB.content.puces[2].titre}</p>
                                            <img src={couche3} alt="1er couche de navigation" className='py-2' style={{width:800}}/>
                                            <p>{data.section[1].partieB.content.puces[2].text}</p>
                                        </div>
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