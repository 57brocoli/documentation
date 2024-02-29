import React from 'react'
import structureNavigation from "/documentation/NS_VersionDescktop/Logique/structureNavigation.png"
import { Link } from 'react-router-dom'

function CouchesNavigation({data}) {
  return (
    <section>
        {data.section &&
            <>
                <h2 className='text-2xl font-bold my-4'>{data.section[3].titre}</h2>
                <article>
                    <h3 className='text-xl font-semibold my-3 jaune'>{data.section[3].partieA.titre}</h3>
                    {data.section[3].partieA.content.introduction.map((intro, index)=>{
                        return(
                        <p key={index} className='py-2'>{intro}</p>
                        )
                    })}
                    <div className='my-6'>
                        <img src={structureNavigation} alt="structure de navigation" className='lg:float-start lg:w-2/5 lg:me-4 lg:mb-8 rounded border-2'/>
                        <div>
                            {data.section[3].partieA.content.puces.map((puce, index)=>{
                                return(
                                    <div key={index} className='my-6 px-4'>
                                        <p className='font-semibold underline underline-offset-4 text-lg'>{puce.titre}</p>
                                        <p className='py-2'>{puce.text}</p>
                                    </div>
                                )
                            })} 
                            <p>Pour avoir plus de details sur le rendu des pages, <Link to={'/nationsound/phone/maquettes'} className='visited:text-purple-600'>les maquettes grapiques</Link> detailent leurs aspect visuel</p>
                        </div>
                    </div>
                </article>
            </>
    }
    </section>
  )
}

export default CouchesNavigation