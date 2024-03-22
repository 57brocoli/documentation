import React from 'react'

function Fonction({data}) {
    return (
        <article>
            <div className='mt-4 mb-8'>
                <h3 className='text-xl font-bold orange'>{data.nom}</h3>
                <div className='py-2 font-semibold'>
                    <h3 className='mt-2'>Lieux : {data.lieux}</h3>
                    <p className='my-1'>{data.introduction}</p>
                    {data.content.map((cont, index)=>{
                        return(
                            <article key={index}>
                                <h3 className='jaune text-lg'>{cont.titre}</h3>
                                <p>{cont.introduction}</p>
                                <div className='lg:flex'>
                                    {/* section de gauche */}
                                    <div className='lg:basis-2/4'>
                                        {cont.img.map((img, index)=>{
                                            return(
                                                <img src={img} key={index} className='rounded border-2 my-2 w-full' alt="image de la fonction" />
                                            )
                                        })}
                                    </div>
                                    {/* section de droite */}
                                    <ul className='pt-2 lg:mt-0 lg:px-3 lg:basis-2/4'>
                                        {cont.explication.map((exp, index)=>{
                                            return(
                                                <li key={index}>{exp}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </article>
    )
}

export default Fonction