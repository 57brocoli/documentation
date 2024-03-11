import React from 'react'

function Concept({data}) {
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
                    
                    <p className='jaune text-xl'>Creer et configurer un formulaire :</p>
                    <ul className='m-2 '>
                        {data.content.etapes.map((etape, index)=>{
                            return(
                                <li key={index} className='my-2'>
                                    <section>
                                        <h3 className='text-lg '>{etape.titre}</h3>
                                        {etape.img &&
                                            <div>
                                                <img src={etape.img} className='rounded border-2 my-1' alt="image console"/>
                                            </div>
                                        }
                                        {etape.text.map((text, index)=>{
                                            return(
                                                <p key={index}>{text}</p>
                                            )
                                        })}
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

export default Concept