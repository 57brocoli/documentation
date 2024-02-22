import React from 'react'

function Environement({data}) {
  return (
    <article className="py-3">
        <h2 className='text-2xl font-bold my-3'>{data.titre}</h2>
        {data.introduction.map((intro, index)=>{
            return(
                <p key={index}>{intro}</p>
            )
        })}
        {data.etapes.map((etape, index)=>{
            return(
                <div key={index} className='py-3'>
                    <h3 className='text-lg font-bold pb-2 jaune'>{etape.nom}</h3>
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

    </article>
  )
}

export default Environement