import React from 'react'

function Packages({data}) {
    return (
        <section className='my-5'>
            {data &&
                <>
                    <h2 className='pt-3'>{data.titre}</h2>
    
                    <article className='my-3'>
                        <h3 className='text-xl font-semibold'>{data.section[0].titre}</h3>
                        <section className='flex flex-wrap justify-center'>
                            {data.section[0].elements.map((element, index)=>{
                                return(
                                    <div key={index} className='border rounded my-5 mx-10 w-64'>
                                        <img src={element.img} alt="Logo package" className='w-full'/>
                                        <div className='p-2'>
                                            <h3 className='text-xl font-bold my-3 text-center jaune'>{element.nom}</h3>
                                            <p>Utilité : {element.utilité}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </section>
                    </article>
                    
                </>
            }
        </section>
    )
}

export default Packages