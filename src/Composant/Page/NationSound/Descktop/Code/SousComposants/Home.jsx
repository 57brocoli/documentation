import React from 'react'

function Home({home}) {
    return (
        <article className='mt-5 mb-8'>
            {home.introduction.map((intro, index)=>{
                return(
                    <div key={index} className='border rounded px-4 py-2 mt-3'>
                        <h2 className='text-xl font-bold my-2 jaune'>{intro.nom}</h2>
                        {intro.text.map((text, index)=>{
                            return(
                                <p key={index} className='my-1 text-lg'>{text}</p>
                            )
                        })}
                    </div>
                )
            })}
            
            <section className='p-2'>
                <h2 className='text-xl font-bold my-2 jaune'>{home.explication[0].titre}</h2>
                {home.explication[0].puces.map((cas, index)=>{
                    return(
                        <div key={index} className='mb-5'>
                            {cas.text.map((text, index)=>{
                                return(
                                    <p key={index} className='my-1'>{text}</p>
                                )
                            })}
                            <img src={cas.img} className='rounded border-2 my-2' alt="view" />
                        </div>
                    )})
                }
            </section>

            <section className='p-2'>
                <h2 className='text-xl font-bold my-2 jaune'>{home.explication[1].titre}</h2>
                {home.explication[1].puces.map((cas, index)=>{
                    return(
                        <div key={index} className='mb-5'>
                            <p>{cas.text}</p>
                            <img src={cas.img} className='rounded border-2 my-2' alt="view" />
                        </div>
                    )})
                }
            </section>
        </article>   
    )
}

export default Home