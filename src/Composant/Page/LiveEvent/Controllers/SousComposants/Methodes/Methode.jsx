import React from 'react'

function Methode({data}) {
    return (
        <article>
            <h2 className='text-2xl font-bold jaune'>Methode : {data.titre}</h2>
            <p className='my-1 font-semibold text-lg'>Fonctionnalité : {data.introduction}</p>
            <section className='my-2'>
                <div >
                    <img src={data.img} className='border-2 rounded' alt="img de la methode" />
                </div>
                <ul >
                    {data.explication.map((expli, index)=>{
                        return(
                            <li key={index} className='my-2 font-semibold'>
                                <h3 className='font-semibold underline underline-offset-2 text-lg jaune'>
                                    {expli.titre} :
                                </h3>
                                <ul>
                                    {expli.text.map((text, index)=>{
                                        return(
                                            <li key={index} className='my-1'>
                                                {text}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </article>
    )
}

export default Methode