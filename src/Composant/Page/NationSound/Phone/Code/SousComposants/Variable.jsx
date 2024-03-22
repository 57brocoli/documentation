import React from 'react'

function Variable({data}) {
    return (
        <article className='font-semibold'>
            <h3 className='text-xl font-bold mb-4'>Cas d'utilisation :</h3>
            {data &&
                <>
                    <div  className='mt-4 mb-8'>
                        <h3 className='text-xl font-bold my-2 orange'>{data[0].nom}</h3>
                        <div className='mx-4'>

                            <section className='py-2'>
                            <h3 className='my-3'>Lieux : {data[0].lieux}</h3>
                                {data[0].img.map((img, index)=>{
                                    return(
                                        <img key={index} src={img} className='rounded border-2 my-2' alt="useState"/>
                                    )
                                })}
                                <div className='mt-3'>
                                    {data[0].explication.map((ex,index)=>{
                                        return(
                                            <p key={index} className='py-1'>{ex}</p>
                                        )
                                    })}
                                    {/* <p className='py-1'>Pour savoir d'ou vient la valeur de ' screenSize ', il faut se référer au useEffect qui le précède. Il est expliqué dans <Link to={'/nationsound/desktop/useeffect'} className='visited:text-purple-600'>la section useEffect</Link> dans le dernier cas</p> */}
                                </div>
                            </section>
                        </div>
                    </div>

                    <div  className='mt-4 mb-8'>
                        <h3 className='text-xl font-bold my-2 orange'>{data[1].nom}</h3>
                        <div className='mx-4'>
                            <section className='py-2'>
                            <h3 className='my-3'>Lieux : {data[1].lieux}</h3>
                                {data[1].img.map((img, index)=>{
                                    return(
                                        <img key={index} src={img} className='rounded border-2 my-2' alt="useState"/>
                                    )
                                })}
                                <div className='mt-3'>
                                    {data[1].explication.map((ex,index)=>{
                                        return(
                                            <p key={index} className='py-1'>{ex}</p>
                                        )
                                    })}
                                </div>
                            </section>
                        </div>
                    </div>
                    
                </>
            }
        </article>
    )
}

export default Variable