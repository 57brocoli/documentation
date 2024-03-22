import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Fonction from './Fonction'

function Fonctions({data}) {

    if (data) {
        var inscri = data.find(section => section.nom === 'Inscription')
        var auth = data.find(section => section.nom === 'Authentification')
        var utili = data.find(section => section.nom === 'Utilisateur déja connecté')
        var deco = data.find(section => section.nom === 'Deconnexion')
        var reque = data.find(section => section.nom === 'Envoie de requête')
        var comm = data.find(section => section.nom === 'Publication de commentaire')
    }
    const filtre = ['Inscription', 'Authentification', 'Utilisateur déja connecté', 'Deconnexion', 'Requête', 'Commentaire']
    const [filtreActive, setFiltreActive] = useState('Inscription')

    return (
        <section>
            <h3 className=' font-bold mb-4 mt-2 text-center'>Parmis les fonctions, certaines proviennent des packages intallés. Les fonctions detaillées ici sont les plus complexes</h3>
            <section className='flex justify-center'>
                {filtre.map((btn, index)=>{
                return(
                    <button key={index} className='border-solid border-2 py-2 first:rounded-l-lg last:rounded-r-lg w-48' onClick={()=>setFiltreActive(btn)}>
                    {btn}
                    </button>
                )
                })}
            </section>
            <AnimatePresence mode="wait">
                <motion.div
                key={filtreActive ? filtreActive : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                >
                {filtreActive === "Inscription" && <Fonction data={inscri}/>}
                {filtreActive === "Authentification" && <Fonction data={auth}/>}
                {filtreActive === "Utilisateur déja connecté" && <Fonction data={utili}/>}
                {filtreActive === "Deconnexion" && <Fonction data={deco}/>}
                {filtreActive === "Requête" && <Fonction data={reque}/>}
                {filtreActive === "Commentaire" && <Fonction data={comm}/>}
                </motion.div>
            </AnimatePresence>
            
        </section>
    )
}

export default Fonctions