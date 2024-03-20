import React from 'react'
import { Link } from 'react-router-dom'

function Concept({data}) {
    return (
        <section>
            {data ?
                <section>

                    <article className='my-7 font-semibold'>
                        <h3 className='text-2xl font-bold orange mb-3'>{data.titre}</h3>
                        {data.content.introduction.map((intro, index)=>{
                            return(
                                <p key={index} className=''>{intro}</p>
                            )
                        })}
                        {data.titre === "Concept" &&
                            <div>
                                <p>Pour savoir comment la base de donnée a été crée en local : <Link to={'/liveevent/basedonnees'} className='text-rose-600 visited:text-purple-600'>cliquer ici</Link></p>
                                <p>Pour consulter son deploiement sur le serveur de hostinger : <Link to={'/liveevent/deploiement'} className='text-rose-600 visited:text-purple-600'>cliquer ici</Link></p>
                            </div>
                        }
                    </article>

                    {data.content.explications.map((exp, index)=>{
                        return(
                            <article key={index} className='my-7 font-semibold'>
                                <h3 className='text-2xl font-bold jaune mb-3'>{exp.titre}</h3>
                                {exp.introduction &&
                                    exp.introduction.map((text, index)=>{
                                        return(
                                            <p key={index} className=''>{text}</p>
                                        )
                                    })
                                }
                                {exp.content &&
                                    exp.content.map((cont, index)=>{
                                        return (
                                            <div key={index} className='m-2'>
                                                <h3 className='text-lg underline underline-offset-2 mb-1'>{cont.titre} :</h3>
                                                {cont.text.map((t, index)=>{
                                                    return(
                                                        <p key={index}>{t}</p>
                                                    )
                                                })}
                                                {cont.img.map((i, index)=>{
                                                    return(
                                                        <div className='py-2'>
                                                            <img key={index} className='rounded border-2' src={i} alt="image d'ilustration" />
                                                        </div>
                                                    )
                                                })}
                                                <p>{}</p>
                                            </div>
                                        )
                                    })
                                }

                            </article>
                        )
                    })}  
                </section>
            : <p>Données indisponnible</p>}
        </section>
    )
}

export default Concept