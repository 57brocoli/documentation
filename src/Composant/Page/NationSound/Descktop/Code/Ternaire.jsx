import React, { useEffect, useState } from 'react'
import jsonData from './codeRendu.json'
import {motion} from 'framer-motion'
import conditionIf from '/documentation/NS_VersionDescktop/Code/rendu/conditionIf.png'
import ternaireInitial from '/documentation/NS_VersionDescktop/Code/rendu/ternaireInitial.png'
import { Link } from 'react-router-dom'

function Ternaire() {

    const[data, setData] = useState([])
    useEffect(()=>{
        setData(jsonData)
    },[])

    if (data.section) {
        var ternaire = data.section[0]
    }

    return (
        <main className='background pt-20 px-10'>
                <h1 className='text-xl'>Code</h1>
                {ternaire &&
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 0.2}}>
                        <h2 className='text-2xl font-bold mb-10 orange'>{ternaire.titre}</h2>
                        {ternaire.content.introduction.map((intro,index)=>{
                            return(
                                <p key={index} className='text-lg font-semibold'>{intro}</p>
                            )
                        })}

                        <div className='rounded border-2 p-3 my-3'>
                            <h3 className='text-lg font-bold pb-2 jaune'>Avantages</h3>
                            <div>
                                <p>Les avantages non négligables d'utilisé ce type d'instruction et non pas de rester sur une utilisation standard avec des " if " sont :</p>
                                <div className='py-2'>
                                    <p>- Un code plus court. On passe donc de :</p>
                                    <img src={conditionIf} className='rounded border-2 my-2 h-20' alt="import du fichier" />
                                    <p>à :</p>
                                    <img src={ternaireInitial} className='rounded border-2 my-2 ' alt="import du fichier" />
                                </div>

                                <p>- Un gain de temps non négligable. Car elle s'ecrit directement dans le rendu sans passer par la rédaction de plusieurs instructions dans le script.</p>
                                <p>Dans un projet classique en javascript pure, un fichier script devrai être écrit, avec l'utilisation des conditions avec l'operateur " if ", agir avec des " addEventListener " sur des élements avec des " id " bien specifique.</p>
                                <p>Avec React et la syntaxe des composants, il devient plus facile de rendre notre code plus concis pour avoir une application interactive.</p>
                            </div>
                        </div>
                        <div>
                            <p>Dans cette documentation, pour plus de clarté 2 utilisations des opérateurs ternaires seront expliquées, il s'agit des utilisations les plus pertinantes pour comprendre sa pertinance dans ce projet.</p>
                        </div>
                        
                        <hr className='my-7'/>

                        <section>
                            <h2 className='text-xl font-bold'>Cas d'utilisation :</h2>
                            <article className='mt-4 mb-8'>
                                <h3 className='text-xl font-bold my-2 jaune'>{ternaire.content.utilisation[0].nom}</h3>
                                <div className='mx-4'>
                                    <h3 className='my-3'>Lieux : {ternaire.content.utilisation[0].lieux}</h3>
                                    <section className='py-2'>
                                        {ternaire.content.utilisation[0].img.map((img, index)=>{
                                            return(
                                                <img key={index} src={img} className='rounded border-2 my-2' alt="useState"/>
                                            )
                                        })}
                                        <div className='mt-3'>
                                            {ternaire.content.utilisation[0].explication.map((ex,index)=>{
                                                return(
                                                    <p key={index} className='py-1'>{ex}</p>
                                                )
                                            })}
                                        </div>
                                        <p>Pour comprendre comment et d'ou les paramêtres sont transmit à notre composant, il faut comprendre <Link to={'/nationsound/desktop/logique'} className='text-rose-600 visited:text-purple-600'>La methode channel</Link> qui est expliqué dans la section " Methodes "</p>
                                    </section>
                                </div>
                            </article>  

                            <article className='mt-4 mb-8'>
                                <h3 className='text-xl font-bold my-2 jaune'>{ternaire.content.utilisation[1].nom}</h3>
                                <div className='mx-4'>
                                    <h3 className='my-3'>Lieux : {ternaire.content.utilisation[1].lieux}</h3>
                                    <section className='py-2'>
                                        {ternaire.content.utilisation[1].img.map((img, index)=>{
                                            return(
                                                <img key={index} src={img} className='rounded border-2 my-2' alt="useState"/>
                                            )
                                        })}
                                        <div className='mt-3'>
                                            {ternaire.content.utilisation[1].explication.map((ex,index)=>{
                                                return(
                                                    <div key={index}>
                                                        <p className='py-1'>{ex.cas}</p>
                                                        <ul>
                                                            {ex.puces.map((puce, index)=>{
                                                                return(
                                                                    <li key={index} className='py-1 px-5 '>{puce}</li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>
                                                )
                                            })}
                                            <p>&rarr; La methode de filtrage est detaillée <Link to={"/nationsound/desktop/logique"} className='text-rose-600 visited:text-purple-600'>dans la section "Methodes"</Link></p>
                                        </div>
                                    </section>
                                </div>
                            </article>   
                        </section>
                    </motion.div>
                }
            </main>
    )
}

export default Ternaire