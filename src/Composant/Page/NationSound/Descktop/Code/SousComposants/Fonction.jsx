import React from 'react'
import { Link } from 'react-router-dom'

function Fonction({data}) {
    return (
        <article>
                {data &&
                    <>
                        <div  className='mt-4 mb-8'>
                            <h3 className='text-xl font-bold my-2 jaune'>{data[0].nom}</h3>
                            <div className='mx-4'>
                                <section className='py-2'>
                                <h3 className='my-3'>Lieux : {data[0].lieux}</h3>
                                    {data[0].img.map((img, index)=>{
                                        return(
                                            <img key={index} src={img} className='rounded border-2 my-2' alt="useState"/>
                                        )
                                    })}
                                    <div className='mt-3'>
                                        {data[0].explication.map((ex,index)=>{
                                            return(
                                                <p key={index} className='py-1'>{ex}</p>
                                            )
                                        })}
                                    </div>
                                </section>
                            </div>
                        </div>

                        <div  className='mt-4 mb-8'>
                            <h3 className='text-xl font-bold my-2 jaune'>{data[1].nom}</h3>
                            <div className='mx-4'>
                                <section className='py-2'>
                                <h3 className='my-3'>Lieux : {data[1].lieux}</h3>
                                    {data[1].img.map((img, index)=>{
                                        return(
                                            <img key={index} src={img} className='rounded border-2 my-2' alt="useState"/>
                                        )
                                    })}
                                    <div className='mt-3'>
                                        {data[1].explication.map((ex,index)=>{
                                            return(
                                                <p key={index} className='py-1'>{ex}</p>
                                            )
                                        })}
                                    </div>
                                </section>
                            </div>
                        </div>

                        <div  className='mt-4 mb-8'>
                            <h3 className='text-xl font-bold my-2 jaune'>{data[2].nom}</h3>
                            <div className='mx-4'>
                                <section className='py-2'>
                                <h3 className='my-3'>Lieux : {data[2].lieux}</h3>
                                    {data[2].img.map((img, index)=>{
                                        return(
                                            <img key={index} src={img} className='rounded border-2 my-2' alt="useState"/>
                                        )
                                    })}
                                    <div className='mt-3'>
                                        {data[2].explication.map((ex,index)=>{
                                            return(
                                                <p key={index} className='py-1'>{ex}</p>
                                            )
                                        })}
                                        <p>Pour avoir plus de details sur la methode channel, <Link to={'/nationsound/desktop/logique'} className='visited:text-purple-600 text-rose-600'>une section methode </Link>explique à quoi elle sert et comment elle marche dans sa globalité.</p>
                                    </div>
                                </section>
                            </div>
                        </div>

                        <div  className='mt-4 mb-8'>
                            <h3 className='text-xl font-bold my-2 jaune'>{data[3].nom}</h3>
                            <div className='mx-4'>
                                <section className='py-2'>
                                <h3 className='my-3'>Lieux : {data[3].lieux}</h3>
                                    {data[3].img.map((img, index)=>{
                                        return(
                                            <img key={index} src={img} className='rounded border-2 my-2' alt="useState"/>
                                        )
                                    })}
                                    <div className='mt-3'>
                                        {data[3].explication.map((ex,index)=>{
                                            return(
                                                <p key={index} className='py-1'>{ex}</p>
                                            )
                                        })}
                                        <p>Pour avoir plus de details sur les filtres, <Link to={''} className='visited:text-purple-600 text-rose-600'>une section methode </Link>comment elles sont mis en place.</p>
                                    </div>
                                </section>
                            </div>
                        </div>

                        
                    </>
                }
            </article>
    )
}

export default Fonction