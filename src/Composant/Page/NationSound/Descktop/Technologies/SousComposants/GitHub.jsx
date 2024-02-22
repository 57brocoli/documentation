import React from 'react'

function GitHub({data}) {
  return (
    <section className='my-5'>
            {data &&
                <>
                    <h2 className='pt-3'>{data.titre}</h2>
    
                    <article className='my-3'>
                        <h3 className='text-2xl font-bold my-3'>{data.section[0].titre}</h3>
                        <img src={data.section[0].content.img} className='w-48 float-left me-5' alt="logo github" />
                        {data.section[0].content.introduction.map((intro, index)=>{
                            return(
                                <p key={index}>{intro}</p>
                            )
                        })}
                        <section className='md:mt-14 lg:mt-32'>
                            <h3 className='text-xl font-semibold jaune'>En resumé, pour utiliser git et github la première fois, les étapes sont les suivantes :</h3>
                            {data.section[0].content.commandes.map((element, index)=>{
                                return(
                                    <div key={index} className='my-2'>
                                        <h3 className='text-lg font-semibold my-2'>{element.nom}</h3>
                                        <p>Utilité : {element.utilité}</p>
                                    </div>
                                )
                            })}
                        </section>
                        <section className='my-7'>
                            <h3 className='text-xl font-semibold jaune'>Ensuite pour une utilisation simple :</h3>
                            {data.section[0].content.commandeCode.map((element, index)=>{
                                return(
                                    <h3 key={index} className='text-lg font-semibold my-2'>{element.nom}</h3>
                                )
                            })}
                        </section>
                        <section className='my-7'>
                            <h3 className='text-xl font-semibold jaune'>Il est possible de crée plusieur version du code, cela à traver ce qu'on apelle des 'branches' pour ce faire les commandes sont les suivantes :</h3>
                            {data.section[0].content.commandeBranche.map((element, index)=>{
                                return(
                                    <div key={index} className='my-2'>
                                        <h3 className='text-lg font-semibold my-2'>{element.nom}</h3>
                                        <p>Utilité : {element.utilité}</p>
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

export default GitHub