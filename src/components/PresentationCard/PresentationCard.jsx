import React from 'react';
import "./presentationCard.css"
import photoMe from "../../assets/photo_Emilie_Charron.png"


const PresentationCard = () => {
    return (

        <div className='containerPresentation'>
            <img className='photoMe'
                src={photoMe} alt='photo_Emilie_Charron'>
            </img>
            <h1>Bonjour</h1>
            <h2>et bienvenue</h2>
            <p>Je m'appelle <b>Emilie Charron</b></p>
            <p>Je suis une <b>développeuse front-end !</b></p>
        </div>
    );
};

export default PresentationCard;