import React from 'react';
import photoMe from "../../assets/photo_Emilie_Charron.jpg";
import Mountain from '../../assets/montagne.png';
import { DiReact, DiDjango, DiJsBadge, DiGithubBadge, DiHtml5 } from "react-icons/di";
import { SiCsswizardry } from "react-icons/si";
import { FaPython } from "react-icons/fa";

const PresentationCard = () => {
    return (
        <div className="relative flex flex-col items-center justify-center border-10 border-white shadow-lg p-5 rounded-lg">
    
            <img className="absolute w-full h-full object-cover opacity-50 rounded-lg" src={Mountain} alt="pixel art montagne" />


            <img className="relative object-cover w-50 h-50 rounded-lg border-10 border-white shadow-md m-10" src={photoMe} alt="photo_Emilie_Charron" />

            <h1 className="relative mt-2 text-3xl font-bold">Bonjour</h1>
            <h2 className="relative text-2xl font-semibold">et bienvenue</h2>
            <p className="relative font-semibold text-lg">Je m'appelle <b className="text-red-600 text-xl">Emilie Charron</b></p>
            <p className="relative font-semibold text-lg ">Je suis une </p>
            <p className="relative font-semibold text-lg "> <b className="text-red-600 text-2xl">développeuse fullstack</b></p>

            <div className="relative flex gap-4 mt-4 text-5xl m-10">
                <FaPython />
                <DiDjango />
                <DiJsBadge />
                <DiReact />
                <DiHtml5 />
                <SiCsswizardry />
                <DiGithubBadge />
            </div>

        </div>
    );
};

export default PresentationCard;
