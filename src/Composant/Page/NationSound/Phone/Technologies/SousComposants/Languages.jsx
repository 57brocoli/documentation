import React from 'react'

function Languages({data}) {
    return (
        <section className='my-5'>
            {data &&
                <>
                    <h2 className='pt-3'>{data.titre}</h2>

                    {data.section &&
                        data.section.map((section, index)=>{
                            return(
                                <article key={index} className='py-3'>
                                    <h2 className='text-2xl font-bold my-3'>{section.titre}</h2>
                                    <img src={section.content.img} alt="logo javascript" className='w-48 float-left me-5 rounded'/>
                                    {section.content.introduction.map((intro, index)=>{
                                        return(
                                            <p key={index} className='pb-1'>{intro}</p>
                                        )
                                    })}
                                    {section.content.puces.map((puce, index)=>{
                                        return(
                                            <p key={index} className='py-1'>{puce}</p>
                                        )
                                    })}
                                </article>
                            )
                        })
                    }

                    {/* <article className='py-3'>
                        <h2 className='text-2xl font-bold my-3'>{data.section[2].titre}</h2>
                        <img src={vite} alt="logo vite" className='w-48 float-left me-5 rounded'/>
                        {data.section[2].content.introduction.map((intro, index)=>{
                            return(
                                <p key={index} className='pb-1'>{intro}</p>
                            )
                        })}
                        {data.section[2].content.puces.map((puce, index)=>{
                            return(
                                <p key={index} className='py-1'>{puce}</p>
                            )
                        })}

                        {data.section[2].content.text &&
                            <p className='text-lg font-semibold my-3'>{data.section[2].content.text}</p>
                        }
                        {data.section[2].content.etapes &&
                            data.section[2].content.etapes.map((etape, index)=>{
                                return(
                                    <div key={index} className='py-3'>
                                        <h3 className='text-lg font-semibold pb-2'>{etape.nom}</h3>
                                        <p className='mb-3'>Lieux : {etape.lieux}</p>
                                        <div className='lg:flex my-2'>
                                            <div className='flex-col'>
                                            {etape.ilustration.img &&
                                                etape.ilustration.img.map((img, index)=>{
                                                    return(
                                                        <img key={index} src={img} alt="ilustration" className='rounded border-2 my-1'/>
                                                    )
                                            })}
                                            </div>
                                            <p className='px-3'>{etape.ilustration.text}</p>
                                        </div>
                                    </div>
                                )
                        })}
                    </article> */}
                </>
            }
        </section>
    )
}

export default Languages