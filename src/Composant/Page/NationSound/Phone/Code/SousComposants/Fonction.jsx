import React from 'react'
import { Link } from 'react-router-dom'

function Fonction({data}) {
    return (
        <article>
            {data &&
                <>
                    {data.map((fonc, index)=>{
                        return(
                            <div key={index} className='mt-4 mb-8'>
                                <h3 className='text-xl font-bold my-2 jaune'>{fonc.nom}</h3>
                                <div className='mx-4 py-2'>
                                    <h3 className='my-3'>Lieux : {fonc.lieux}</h3>
                                    <div className='lg:flex lg:flex-row'>
                                        <div className='lg:basis-2/4'>
                                            {fonc.img.map((img, index)=>{
                                                return(
                                                    <img key={index} src={img} className='rounded border-2 my-2 w-full' alt="useState"/>
                                                )
                                            })}
                                        </div>
                                        <div className='mt-3 lg:mt-0 lg:px-3 lg:basis-2/4'>
                                            {fonc.explication.map((ex,index)=>{
                                                return(
                                                    <p key={index} className='py-1'>{ex}</p>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    {fonc.img2 &&
                                        fonc.explication2 &&
                                            <div className='lg:flex lg:flex-row'>
                                                <div className='lg:basis-2/4'>
                                                    {fonc.img2.map((img, index)=>{
                                                        return(
                                                            <img key={index} src={img} className='rounded border-2 my-2 w-full' alt="useState"/>
                                                        )
                                                    })}
                                                </div>
                                                <div className='mt-3 lg:mt-0 lg:px-3 lg:basis-2/4'>
                                                    {fonc.explication2.map((ex,index)=>{
                                                        return(
                                                            <p key={index} className='py-1'>{ex}</p>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                    }
                                    {fonc.img3 &&
                                        fonc.explication3 &&
                                            <div className='lg:flex lg:flex-row'>
                                                <div className='lg:basis-2/4'>
                                                    {fonc.img3.map((img, index)=>{
                                                        return(
                                                            <img key={index} src={img} className='rounded border-2 my-2 w-full' alt="useState"/>
                                                        )
                                                    })}
                                                </div>
                                                <div className='mt-3 lg:mt-0 lg:px-3 lg:basis-2/4'>
                                                    {fonc.explication3.map((ex,index)=>{
                                                        return(
                                                            <p key={index} className='py-1'>{ex}</p>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                    }
                                    {fonc.img4 &&
                                        fonc.explication4 &&
                                            <div className='lg:flex lg:flex-row'>
                                                <div className='lg:basis-2/4'>
                                                    {fonc.img4.map((img, index)=>{
                                                        return(
                                                            <img key={index} src={img} className='rounded border-2 my-2 w-full' alt="useState"/>
                                                        )
                                                    })}
                                                </div>
                                                <div className='mt-3 lg:mt-0 lg:px-3 lg:basis-2/4'>
                                                    {fonc.explication4.map((ex,index)=>{
                                                        return(
                                                            <p key={index} className='py-1'>{ex}</p>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                    }
                                </div>
                                <hr className='my-4'/>
                            </div>
                        )
                    })}
                </>
            }
        </article>
    )
}

export default Fonction