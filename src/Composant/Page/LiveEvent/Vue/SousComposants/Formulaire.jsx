import React from 'react'

function Formulaire({data}) {
    return (
        <section>
        {data ?
            <article className='lg:ms-5 font-semibold'>
                <h2 className='text-2xl orange'>{data.titre}</h2>
                <ul className='my-3'>
                    {data.content.introduction.map((intro, index)=>{
                        return(
                            <li key={index} className='my-1'>{intro}</li>
                        )
                    })}
                </ul>
                <p className='jaune text-xl'>Les differents blocs :</p>
                <ul className='m-2 '>
                    {data.content.etapes.map((etape, index)=>{
                        return(
                            <li key={index} className='my-4'>
                                <section>
                                    <h3 className='text-lg '>{etape.titre}</h3>
                                    <div className='lg:flex'>
                                    {etape.img &&
                                        <div className='lg:basis-2/5'>
                                            <img src={etape.img} className='rounded border-2 my-1' alt="image console"/>
                                        </div>
                                    }
                                        <div className='lg:basis-3/5 py-2 px-3'>
                                            {etape.explication.map((expli, index)=>{
                                                return(
                                                    <div key={index}>
                                                        {expli.text.map((text, index)=>{
                                                            return(
                                                                <h3 key={index}>{text}</h3>
                                                            )
                                                        })}
                                                        {expli.img &&
                                                            <div className='lg:flex'>
                                                                {expli.img.map((img, index)=>{
                                                                    return(
                                                                        <div key={index} className='m-1'>
                                                                            <img  src={img} className='border-2 rounded' alt="ilustration" />
                                                                        </div>
                                                                    )
                                                                })}
                                                            </div>
                                                        }
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    
                                </section>
                            </li>
                        )
                    })}
                </ul>
            </article>
        : <p>Contenu indisponnible</p>}
    </section>
    )
}

export default Formulaire