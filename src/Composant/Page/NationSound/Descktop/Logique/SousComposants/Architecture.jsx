import racine from '/documentation/NS_VersionDescktop/Logique/racine.png'
import src from '/documentation/NS_VersionDescktop/Logique/src.png'
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
                <div className='ps-5'>
                  {data.section[1].partieA.content.puces.map((puce, index)=>{
                    return(
                      <div key={index} className='mb-2'>
                        <p className='font-semibold underline underline-offset-4'>{puce.titre}</p>
                        <p className='py-2'>{puce.text}</p>
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
              <div className=' py-2'>
                <img src={src} alt="dossier src" className='lg:float-left me-5 h-44 rounded border-2'/>
                <div>
                  {data.section[1].partieB.content.puces.map((puce, index)=>{
                    return(
                      <div key={index} className='mb-3'>
                        <p className='font-semibold underline underline-offset-4'>{puce.titre}</p>
                        <p className='py-2'>{puce.text}</p>
                        <div className='flex'>
                          {puce.img &&
                            puce.img.map((img, index)=>{
                              return(
                                <img src={img} alt="image du fichier" key={index} className='h-20 my-auto ms-10 rounded border-2'/>
                              )
                            })
                          }
                        </div>
                        
                      </div>
                    )
                  })}

                </div>
              </div>
            </article>
          </>
        }      
    </section>
  )
}

export default Architecture