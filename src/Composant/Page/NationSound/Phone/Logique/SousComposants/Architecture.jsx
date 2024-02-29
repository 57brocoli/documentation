import racine from '/documentation/NS_VersionPhone/Logique/architecture1.png'
import src from '/documentation/NS_VersionPhone/Logique/architecture3.png'
import { motion } from "framer-motion"

function Architecture({data}) {

    return (
        <section>
            {data.section &&
                <>
                    <h2 className='text-2xl font-bold my-4'>{data.section[1].titre}</h2>
                    <article>
                        <h3 className='text-xl font-bold my-3 jaune'>{data.section[1].partieA.titre}</h3>
                        {data.section[1].partieA.content.introduction.map((intro, index)=>{
                            return(
                                <p key={index} className='pb-2'>{intro}</p>
                            )
                        })}
                        <div className='lg:flex py-2'>
                            <img src={racine} alt="racinde du projet" className='rounded border-2'/>
                            <div className='lg:ps-5 mt-5 lg:mt-0'>
                                {data.section[1].partieA.content.puces.map((puce, index)=>{
                                    return(
                                        <div key={index} className='mb-2'>
                                            <p className='font-semibold underline underline-offset-4'>{puce.titre}</p>
                                            <p className='py-2'>{puce.text}</p>
                                            {puce.img && 
                                                <img src={puce.img} className='rounded border-2' style={{width: 300}} alt="image puce"/>
                                            }
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </article>

                    <article>
                        <h3 className='text-xl font-bold my-3 jaune'>{data.section[1].partieB.titre}</h3>
                        {data.section[1].partieB.content.introduction.map((intro, index)=>{
                            return(
                                <p key={index} className='pb-2 '>{intro}</p>
                            )
                        })}
                        <img src={src} className='me-5 rounded border-2' style={{width:300}} alt="dossier src"/>
                        <div className='py-2'>
                            {data.section[1].partieB.content.puces.map((puce, index)=>{
                                return(
                                    <div key={index} className='my-3'>
                                        <p className='font-semibold underline underline-offset-4 '>{puce.titre}</p>
                                        <div className='lg:flex lg:flex-row'>
                                            {puce.img &&
                                                <div className='lg:flex me-3'>
                                                    {puce.img &&
                                                        puce.img.map((img, index)=>{
                                                            return(
                                                                <img src={img} alt="image du fichier" key={index} className='mt-2 rounded border-2' style={{width:250}}/>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            }
                                            <p className='py-2'>{puce.text}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </article>
                </>
            }      
        </section>
    )
}

export default Architecture