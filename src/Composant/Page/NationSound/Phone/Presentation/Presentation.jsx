import React from 'react'
import jsonData from './Presentation.json'
import {motion} from 'framer-motion'
import '../../style.css'
import { Link } from 'react-router-dom'
import logo from '/logo1.jpg'
// import presentationDescktop from '/documentation/NS_VersionDescktop/Presentation/presentationDescktop.png'
// import presentationPhone from '/documentation/NS_VersionDescktop/Presentation/presentationPhone.png'
import presentation from '/documentation/NS_VersionPhone/Presentation/presentationPhone.png'

function Presentation() {

    const data = jsonData

    return (
        <div className='background pt-10'>
            {data &&
                <motion.div initial={{opacity:0}} animate={{opacity: 1}}>
                    <img src={logo} className='logo center'></img>
                    <h1 className='text-7xl fontRaph text-center my-4'>{data.titre}</h1>
                    <h2 className='text-xl text-center mt-6 font-bold px-5'>{data.introduction}</h2>
                    {data.section &&
                        <>
                            <section className='my-10'>
                                <article className='pt-10 px-10'>
                                    <h2 className='text-4xl text-center font-bold mb-6'>{data.section[0].titre}</h2>
                                    <img src={presentation} className='hidden lg:block float-right rounded-3xl' style={{width:'23%', marginLeft: 30, marginRight: 40}}alt="presentation sur support phone" />
                                    <p className='indent-10 font-semibold'>{data.section[0].content.introduction[0]} <Link className='text-rose-600 visited:text-purple-600' to={"/nationsound/desktop"}>version bureau</Link></p>
                                    <p className='font-semibold'>{data.section[0].content.introduction[1]} </p>
                                    {data.section[0].content.text.map((section, index)=>{
                                        return(
                                            <div key={index}>
                                                <br />
                                                <h2 className='text-2xl font-bold'>{section.titre}</h2>
                                                {section.text.map((text, index)=>{
                                                    return(
                                                        <p key={index} className='mt-2 font-semibold'>{text}</p>
                                                    )
                                                })}
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
                                            <p key={index} className='my-3 font-semibold'>{intro}</p>
                                        )
                                    })}
                                    {data.section[1].content.puces.map((puce, index)=>{
                                        return(
                                            <p key={index} className='my-3 font-semibold'>{puce}</p>
                                        )
                                    })}
                                </article>
                            </section>

                            <section className='my-10'>
                                <article className=' lg:flex mx-auto pt-10'>
                                    <div className='px-10 basis-3/6 order-1 lg:order-2'>
                                        <h2 className='text-4xl font-bold mb-6'>{data.section[2].titre}</h2>
                                        <p className='font-semibold'>{data.section[2].content.introduction[0]}<a href="https://github.com/57brocoli/NationSoundReact" target='blank' className=' visited:text-purple-600'>cette address</a></p>
                                        <br />
                                        <p className='font-semibold'>{data.section[2].content.introduction[1]}</p>
                                    </div>
                                    <div className='basis-3/6 order-2 lg:order-1'>
                                        <div className='test test1 center' style={{backgroundImage:`url(${data.section[2].content.img[0]})`}}/>
                                    </div>
                                </article>
                            </section>
                        </>
                    }
                </motion.div>
            }
        </div>
    )
}

export default Presentation