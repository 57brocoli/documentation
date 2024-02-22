import React from 'react'

function Packages({data}) {
    return (
        <article className="py-3">
            <h2 className='text-2xl font-bold my-3'>{data.titre}</h2>
            {data.introduction.map((intro, index)=>{
                return(
                    <p key={index}>{intro}</p>
                )
            })}
            {data.content[0] &&
              <article className='my-3'>
                <h3 className='text-xl font-semibold'>{data.content[0].titre}</h3>
                <section className='flex flex-wrap justify-center'>
                    {data.content[0].elements.map((element, index)=>{
                        return(
                            <div key={index} className='border rounded my-5 mx-10 w-64'>
                                <img src={element.img} alt="Logo package" className=''/>
                                <div className='px-2'>
                                <h3 className='text-xl font-bold my-3 text-center jaune'>{element.nom}</h3>
                                    <p>Commande NPM : {element.commande}</p>
                                    <p>Utilité : {element.utilité}</p>
                                </div>
                            </div>
                        )
                    })}
                </section>
              </article>
            }
            {data.content[1] &&
              <article className='my-3'>
                <h3 className='text-xl font-semibold jaune'>{data.content[1].titre}</h3>
                <img src={data.content[1].img} className='my-5' alt="img des import"/>
                {data.content[1].puces.map((puce,index)=>{
                    return(
                        <p key={index} className='px-5 py-1'>{puce}</p>
                    )
                })

                }
              </article>
            }
        </article>
    )
}

export default Packages