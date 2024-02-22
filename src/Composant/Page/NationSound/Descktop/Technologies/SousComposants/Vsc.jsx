import React from 'react'

function Vsc({data}) {
    return (
        <section className='my-5'>
            {data &&
                <>
                    <h2 className='pt-3'>{data.titre}</h2>
    
                    {data.section &&
                        data.section.map((section, index)=>{
                            return(
                                <article key={index} className='py-3'>
                                    <h2 className='text-2xl font-bold my-3'>{section.titre}</h2>
                                    <img src={section.content.img} alt="logo vsc" className='w-48 float-left me-5 rounded'/>
                                    {section.content.introduction.map((intro, index)=>{
                                        return(
                                            <p key={index} className='pb-1'>{intro}</p>
                                        )
                                    })}
                                    {section.content.puces.map((puce, index)=>{
                                        return(
                                            <p key={index} className='py-1'>{puce}</p>
                                        )
                                    })}
                                </article>
                            )
                        })
                    }
                </>
            }
        </section>
  )
}

export default Vsc