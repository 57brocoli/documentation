import React from 'react'
import { Link } from 'react-router-dom'

function Utilisation({data}) {
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
                        <li>--&#8250; Ici il serat question d'une utilisation simple d'un formulaire dans un template. Pour avoir une utilisation plus pousser, l'exemple du formulaire pour un article est visible <Link to={'/liveevent/templates'} className='text-rose-600 visited:text-purple-600'>ici</Link></li>
                    </ul>
                    
                    <p className='jaune text-xl'>Utilisation d'un formulaire :</p>
                    <ul className='m-2'>
                        {data.content.etapes.map((etape, index)=>{
                            return(
                                <li key={index} className='my-4'>
                                    <section>
                                        <h3 className='text-lg'>{etape.titre}</h3>
                                        {etape.img &&
                                            <div>
                                                <img src={etape.img} className='rounded border-2 my-1' alt="image console"/>
                                                {etape.img2 &&
                                                    <img src={etape.img2} className='rounded border-2 my-1' alt="image console"/>
                                                }
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

export default Utilisation