import React from 'react'
import './SitePageLeft.css'
const SitePageLeft = () => {
    return (
        <React.Fragment>
            <div className='pageLeft'>
                <img className='pageImage' src='https://upload.wikimedia.org/wikipedia/commons/0/00/Joseph_Wright_of_Derby_-_Cavern%2C_near_Naples_-_Google_Art_Project.jpg' />
                <p className='imageCenterText'>
                    Enregistrez
                    <b> votre œuvre </b>
                    en quelques étapes
                </p>
                <p className='imageBottomText'>
                    ART
                    <span className="filter material-symbols-outlined">
                        filter_none
                    </span>
                    SHORTLIST
                </p>
            </div>

        </React.Fragment>
    )
}
export default SitePageLeft;