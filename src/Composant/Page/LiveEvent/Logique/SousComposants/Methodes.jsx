import React from 'react'

function Methodes({data}) {
  return (
    <section>
        {data.section &&
            <>
                <h2 className='text-2xl font-bold my-4'>{data.section[2].titre}</h2>
                {/* <article>
                    <h3 className='text-xl font-semibold my-3 jaune'>{data.section[2].partieA.titre}</h3>
                    {data.section[2].partieA.content.introduction.map((intro, index)=>{
                        return(
                        <p key={index} className='pb-2'>{intro}</p>
                        )
                    })}
                    <div className='lg:flex py-2'>
                        <div >
                            {data.section[2].partieA.content.puces.map((puce, index)=>{
                                return(
                                    <div key={index} className='my-6'>
                                        <h3 className='font-semibold underline underline-offset-4 text-lg'>{puce.titre}</h3>
                                        <p className='py-2'>{puce.text}</p>
                                        <ol>
                                            {puce.etapes.map((etape, index)=>{
                                                return(
                                                    <li key={index} className='my-5'>
                                                        <h4 className='font-semibold pb-2 text-lg'>{etape.nom}</h4>
                                                        <article className='p-2'>
                                                            <h4 className='textDark'>Fichier : {etape.lieux}</h4>
                                                            <div className='lg:flex'>
                                                                <img src={etape.ilustration.img} className='my-2 me-3 rounded border-2' alt="fichier de l'initialisation"/>
                                                                <p className='mt-2'>{etape.ilustration.text}</p>
                                                            </div>
                                                        </article>
                                                    </li>
                                                )
                                            })}
                                        </ol>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </article> */}
            </>
        }
    </section>
  )
}

export default Methodes