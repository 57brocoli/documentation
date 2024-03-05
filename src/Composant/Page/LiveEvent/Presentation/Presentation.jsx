import React from 'react'
import dataJson from './Presentation.json'
import { Link } from 'react-router-dom'
import logo from '/PixelEvent.jpg'
import {motion} from 'framer-motion'
import presentationDescktop from '/documentation/LiveEvent/Presentation/presentation1.png'
import presentationPhone from '/documentation/LiveEvent/Presentation/presentation2.png'

function Presentation() {
    const data = dataJson

    return (
        <div className='bgPage pt-10'>
            <motion.div initial={{opacity:0}} animate={{opacity: 1}}>
                <img src={logo} className='logo center'></img>
                <h1 className='text-7xl fontRaph text-center my-4'>{data.titre}</h1>
                <h2 className='text-xl text-center mt-6 font-bold px-5'>{data.introduction}</h2>
                {data.section &&
                    <>
                        <section className='my-10'>
                            <article className='pt-10 px-10'>
                                <h2 className='text-4xl text-center font-bold mb-6'>{data.section[0].titre}</h2>
                                <img src={presentationDescktop} className='hidden lg:block float-right ' alt="ecran bureau" style={{width:'40%', zIndex:2, marginLeft: -120}}/>
                                <img src={presentationPhone} className='hidden lg:block float-right ' alt="ecran phone" style={{width:'10%', marginTop:50, marginLeft:40}}/>
                                {data.section[0].content.introduction.map((intro, index)=>{
                                    return(
                                        <p key={index}>{intro}</p>
                                    )
                                })}
                                <p>Le site est utilisable sur bureau mais aussi responssive mobile, <a className='text-rose-600 visited:text-purple-600' href={'https://pixelevent.site/'} target='blanc'>vous pouvez l'utiliser à cette addresse</a></p>

                                {data.section[0].content.text.map((section, index)=>{
                                    return(
                                        <div key={index}>
                                            <br />
                                            <h2 className='text-2xl font-bold'>{section.titre}</h2>
                                            <p className='mt-2'>{section.text[0]}</p>
                                            <ul>
                                                {section.text[1].map((puce, index)=>{
                                                return(
                                                    <li className='mx-8' key={index}>- {puce}</li>
                                                )
                                                })}
                                            </ul>
                                            <p>{section.text[2]} </p>
                                        </div>
                                    )
                                })}
                            </article>
                        </section>
                        
                        <section className='my-10 '>
                            <article className='mx-auto pt-10 px-10'>
                                <h2 className='text-4xl font-bold mb-6'>{data.section[1].titre}</h2>
                                <img src={data.section[1].content.img[0]} className='float-left me-5'/>
                                {data.section[1].content.introduction.map((intro, index)=>{
                                    return(
                                        <p key={index} className='my-3 '>{intro}</p>
                                    )
                                })}
                                {data.section[1].content.puces.map((puce, index)=>{
                                    return(
                                        <p key={index} className='my-3'>{puce}</p>
                                    )
                                })}
                            </article>
                        </section>

                        <section className='my-10'>
                            <article className=' lg:flex mx-auto pt-10'>
                                <div className='px-10 basis-3/6 order-1 lg:order-2'>
                                    <h2 className='text-4xl font-bold mb-6'>{data.section[2].titre}</h2>
                                    <p>{data.section[2].content.introduction[0]}<a href="https://github.com/57brocoli/LiveEventSymphony" target='blank' className=' visited:text-purple-600'>cette address</a></p>
                                    <br />
                                    <p>{data.section[2].content.introduction[1]}</p>
                                </div>
                                <div className='basis-3/6 order-2 lg:order-1'>
                                    <div className='codeSource1 codeSource2 center' style={{backgroundImage:`url(${data.section[2].content.img[0]})`}}/>
                                </div>
                            </article>
                        </section>
                    </>
                }
            </motion.div>
        </div>
    )
}

export default Presentation