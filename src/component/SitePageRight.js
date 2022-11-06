import React from 'react'
import './SitePageRight.css'
const SitePageRight = () => {
    return (
        <div className='pageRight'>
            <section className='pageRightSection'>
                <div className='sectinoTextBox textbox1'>

                    <p className='icon'> <img src='./images/info-circle.png' />Important</p>
                    <p className='text1'>
                        Remplissez avec <b>précision</b> toutes les sections
                        de ce formulaire et donnez le maximum d’informations sur votre œuvre.
                    </p>
                    <p className='text2'>
                        Les champs marqués d’un <b>astérisque (*)</b> sont obligatoires.
                    </p>
                </div>
                <div className='sectinoTextBox'>

                    <p className='icon'><img src='./images/message-question-square.png' />Besoin d'aide ?</p>
                    <p className='text1'>
                        Nous sommes à <b> votre disposition </b> pour vous conseiller afin d’inscrire votre œuvre à notre catalogue dans les meilleures conditions.
                    </p>
                    <p className='text2'>
                        Contactez-nous par<b> email,</b> via le <b> chat</b> ou directement par <b>téléphone.</b>
                    </p>
                </div>
                <p className='text3'>
                    Si vous n’arrivez pas à remplir l’intégralité des champs obligatoires
                    du formulaire,n’hésitez pas à faire<b>une demande d’expertise</b> elle est
                    totalement <b> gratuite.</b>
                </p>

            </section>
            <footer className='pageRightFooter'>
                <button className='returnButton'>
                    <img className="arrowReturn"src='./images/arrow-left.svg' />
                    RETOUR
                </button>
                <button  className="footerButton" type='button'>Renseigner mon œuvre</button>
            </footer>
        </div>
    )
}
export default SitePageRight;