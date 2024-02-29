import React from 'react'

function ReactNative({data}) {
  return (
    <article className='py-3'>
        <h2 className='text-2xl font-bold my-3'>{data.section[1].titre}</h2>
        {/* <img src={vite} alt="logo vite" className='w-48 float-left me-5 rounded'/> */}
        {data.section[1].content.introduction.map((intro, index)=>{
            return(
                <p key={index} className='pb-1'>{intro}</p>
            )
        })}
        {data.section[1].content.puces.map((puce, index)=>{
            return(
                <p key={index} className='py-1'>{puce}</p>
            )
        })}

        {data.section[1].content.text &&
            <p className='text-lg font-semibold mt-9'>{data.section[1].content.text}</p>
        }
        {data.section[1].content.etapes &&
            data.section[1].content.etapes.map((etape, index)=>{
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

export default ReactNative