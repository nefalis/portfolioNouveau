import React from 'react';
import "./presentationCard.css"
import photoMe from "../../assets/photo_Emilie_Charron.jpg"
import Mountain from '../../assets/montagne.png'
import { IoLogoSass } from "react-icons/io";
import { DiHtml5 } from "react-icons/di";
import { DiGithubBadge } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { SiCsswizardry } from "react-icons/si";

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
            <p>Je suis une <b>développeuse front-end </b></p>
            <p><IoLogoSass /> <DiHtml5 /> <SiCsswizardry /> <DiGithubBadge /> <DiJsBadge /> <DiReact /></p>
        </div>
    );
};

export default PresentationCard;