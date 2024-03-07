import React from 'react'

function AdminLE({data}) {
    return (
        <article className='my-5'>
            <h3 className='text-xl font-semibold my-3 jaune'>{data.section[1].partieC.titre}</h3>
                <p>{data.section[1].partieC.content.introduction}</p>
                {data.section[1].partieC.content.puces.map((puce, index)=>{
                    return(
                        <div key={index} className='py-3'>
                            <p className='text-lg font-semibold underline underline-offset-4'>{puce.titre}</p>
                            <section className='flex flex-wrap'>
                                <div className='lg:basis-1/2'>
                                    <img src={puce.img} alt="1er couche de navigation" className='my-2 border-2 rounded' style={{width:800}}/>
                                </div>
                                <ul className='lg:basis-1/2'>
                                    {puce.text.map((text, index)=>{
                                        return(
                                            <li key={index} className='p-2'>{text}</li>
                                        )
                                    })}
                                </ul>
                            </section>
                        </div>
                    )
                })}
        </article>
    )
}

export default AdminLE