import React from 'react'

function Tables({data}) {
    

    if (data) {
        var pre = data.content.explications.find(o=>o.titre === 'Présentation')
        var rela = data.content.explications.find(o=>o.titre === 'Type de relation')
        var tab = data.content.explications.find(o=>o.titre === 'Tables et type de données par champ')
    }
    console.log(pre);
    return (
        <main className='my-5'>
            <h2 className='text-2xl font-bold orange'>{data.titre}</h2>
            <ul className='font-semibold my-3'>
                {data.content.introduction.map((i, index)=>{
                    return(
                        <li key={index}>{i}</li>
                    )
                })}
            </ul>
            <section className='lg:flex font-semibold my-7'>
                <div className='lg:basis-3/5'>
                    {data.content.imgRelation &&
                    <img src={data.content.imgRelation} alt="image des tables" />
                    }
                </div>
                <div className='lg:basis-2/5 px-4'>
                    {pre &&
                    <div className='pb-3'>
                        <h3 className='text-lg jaune'>{pre.titre}</h3>
                        <ul>
                            {pre.text.map((t, index)=>{
                                return(
                                    <li key={index} className='py-1'>{t}</li>
                                )
                            })}
                        </ul>
                    </div>
                    }
                </div>
            </section>
            {rela ?
                <section className='lg:flex font-semibold my-7 px-4'>
                    {rela &&
                    <div className='pb-3'>
                        <h3 className='text-lg jaune'>{rela.titre}</h3>
                        <ul>
                            {rela.text.map((t, index)=>{
                                return(
                                    <li key={index} className='py-1'>{t}</li>
                                )
                            })}
                        </ul>
                        {data.titre === "MobileUsers" &&
                        <div>
                            <p className='orange'>Attention : La relation entre les entités " moble_user " et " comment " n'est pas établie par le gestionnaire de la base de données. Il n'est pas possible d'acceder à la propriété " comments " depuis la table " mobile_user ". Contrairement à la table " comment ",  mobile_user n'est pas axessible depuis l'API, Il est pour le moment impossible de lié les deux entités sans que cela affecte le controller de mobile_user.</p>
                            <p className='orange'>Cependant : C'est au travers de la requête configuré dans l'application mobile que le nom du mobile_user est associé au comments.</p>
                        </div>
                        }
                    </div>
                    }
                </section>
            : <p>Le type de relation est indisponnible</p>}
            <section className='font-semibold my-7'>
                {data.content.imgTables &&
                <img src={data.content.imgTables} className='rounded float-left lg:w-1/2 me-4' alt="image des tables" />
                }
                {tab &&
                <div>
                    <h3 className='text-lg jaune'>{tab.titre}</h3>

                    <ul>
                        {tab.tables.map((t, index)=>{
                            return(
                                <li key={index} className='py-1'>
                                    <h3 className='text-lg pb-1 underline underline-offset-4'>{t.name} :</h3>
                                    <ul>
                                        {t.colonnes.map((c,index)=>{
                                            return(
                                                <li key={index}>{c}</li>
                                            )
                                        })}
                                    </ul>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                }
            </section>
        </main>
    )
}

export default Tables