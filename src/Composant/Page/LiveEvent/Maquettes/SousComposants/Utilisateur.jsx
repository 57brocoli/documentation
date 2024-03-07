import React from 'react'

function Utilisateur({data}) {
    return (
        <article className='my-7'>
            <h3 className='text-xl font-semibold my-3 jaune'>{data.section[1].partieB.titre}</h3>
            <p>{data.section[1].partieB.content.introduction}</p>
            <section className='flex flex-wrap'>
                {data.section[1].partieB.content.puces.map((puce, index)=>{
                    return(
                        <div key={index} className='py-3 basis-1/2'>
                            <p className='text-lg font-semibold underline underline-offset-4'>{puce.titre}</p>
                            <img src={puce.img} alt="1er couche de navigation" className='py-2' style={{width:800}}/>
                            <p>{puce.text}</p>
                        </div>
                    )
                })}
            </section>
        </article>
    )
}

export default Utilisateur