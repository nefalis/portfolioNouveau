import React from 'react';
import "./presentationCard.css"
import photoMe from "../../assets/photo_Emilie_Charron.jpg"
import Mountain from '../../assets/montagne.png'
import { DiReact, DiDjango, DiJsBadge, DiGithubBadge, DiHtml5 } from "react-icons/di";
import { SiCsswizardry } from "react-icons/si";
import { FaPython } from "react-icons/fa";

const PresentationCard = () => {
    return (

        <div className='containerPresentation'>
            <img className='imgAbout' src={Mountain} alt='pixel art montagne'></img>
            <img className='photoMe'
                src={photoMe} alt='photo_Emilie_Charron'>
            </img>
            <h1>Bonjour</h1>
            <h2>et bienvenue</h2>
            <p>Je m'appelle <b>Emilie Charron</b></p>
            <p>Je suis une <b>développeuse full stack</b></p>
            <p><FaPython /> <DiDjango /> <DiJsBadge /> <DiReact /> <DiHtml5 /> <SiCsswizardry /> <DiGithubBadge /> </p>
        </div>
    );
};

export default PresentationCard;