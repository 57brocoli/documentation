import React from 'react'

function Navigation({data}) {
    return (
        <article className='my-7'>
            <h3 className='text-xl font-semibold my-3 jaune'>{data.section[1].partieA.titre}</h3>
            <p>{data.section[1].partieA.content.introduction}</p>
            {data.section[1].partieA.content.puces.map((puce, index)=>{
                return(
                    <div key={index} className='py-3'>
                        <p className='text-lg font-semibold underline underline-offset-4'>{puce.titre}</p>
                        <div className='flex flex-wrap'>
                            <img src={puce.img} alt="bar de navigation bureau" className='my-2 border-2 rounded me-3'/>
                            <ul>
                                {puce.text.map((text, index)=>{
                                    return(
                                        <li key={index} className='pt-2'>{text}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                )
            })}
        </article>
    )
}

export default Navigation