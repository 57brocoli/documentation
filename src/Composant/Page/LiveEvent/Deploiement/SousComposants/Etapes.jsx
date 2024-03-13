import React from 'react'

function Etapes({data}) {
    return (
        <>
            {data &&
                <section className='my-7'>
                    <h3 className='text-2xl font-bold my-1'>{data.titre}</h3>
                    <p className='font-semibold my-1'>{data.content.introduction}</p>
                    {data.content.etapes.map((o, index)=>{
                        return(
                            <div key={index} className='px-2 font-semibold'>
                                <h3 className='text-xl jaune mt-3 mb-2'>{o.titre}</h3>
                                <ul className='my-2'>
                                    {o.text.map((l,index)=>{
                                        return(
                                            <li key={index}>{l}</li>
                                        )
                                    })}
                                </ul>
                                <div className='my-1'>
                                    {o.img &&
                                        <img src={o.img} className='rounded border-2' alt="image d'ilustration" />
                                    }
                                </div>
                            </div>
                        )
                    })}
                </section>
            }
        </>
    )
}

export default Etapes