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
        var ternaire = data.section.filter(x=>x.titre === "Operateur ternaire").at(0)
    }

    const channel = {
        text : "Pour comprendre d'ou viennent les paramêtres : ",
        link : "/nationsound/phone/logique",
    }
    const requete = {
        text : "Pour mieux comprendre comment fonctionne le script du formulaire : ",
        link : "/nationsound/phone/varfonc",
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

                        <section className='rounded border-2 p-3 my-3'>
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
                        </section>
                        
                        <h2 className='font-semibold text-lg orange pt-3'>Dans notre projet, les opérateurs ternaires premettent surtout d'adapter le rendu à ce que l'utilisateur décide de voir. Rendant ainsi notre site interactif</h2>
                        
                        <hr className='my-7'/>

                        <section>
                            <h2 className='text-xl font-bold'>Cas d'utilisation :</h2>
                            {ternaire.content.utilisation.map((util, index)=>{
                                return(
                                    <article key={index} className='mt-4 mb-8'>
                                        <h3 className='text-xl font-bold my-2 jaune'>{util.nom}</h3>
                                        <div className='mx-4'>
                                            <h3 className='my-3'>Lieux : {util.lieux}</h3>
                                            <section className='py-2'>
                                                <div className='lg:flex'>
                                                    <div className='basis-1/2 me-3'>
                                                        {util.img.map((img, index)=>{
                                                            return(
                                                                <img key={index} src={img} className='rounded border-2 my-2' alt="useState"/>
                                                            )
                                                        })}
                                                    </div>
                                                    <div className='lg:mt-0 mt-3 basis-1/2'>
                                                        {util.explication.map((ex,index)=>{
                                                            return(
                                                                <p key={index} className='py-1'>{ex}</p>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                                {util.nom === "Pour la methode channel" && 
                                                    <p>{channel.text} <Link to={channel.link} className='text-rose-600 visited:text-purple-600'>La methode channel.</Link></p>
                                                }
                                                {util.nom === "Afficher des erreurs" && 
                                                    <p>{requete.text} <Link to={requete.link} className='text-rose-600 visited:text-purple-600'>La fonctions "Envoie de requête."</Link></p>
                                                }
                                            </section>
                                        </div>
                                    </article>  
                                )
                            })}
                            
                        </section>
                    </motion.div>
                }
            </main>
    )
}

export default Ternaire