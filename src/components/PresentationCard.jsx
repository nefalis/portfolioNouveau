import React from 'react';
import { useOutletContext } from 'react-router-dom';
import photoMe from "../assets/photo_Emilie_Charron.jpg";
import { DiReact, DiDjango, DiJsBadge, DiGithubBadge, DiHtml5 } from "react-icons/di";
import { SiCsswizardry } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import Mountain from '../assets/montagne.png';


const PresentationCard = () => {
    // Récupération de isOn depuis Layout
    const { isOn } = useOutletContext();

    return (
        <div 
            className={`relative flex flex-col items-center justify-center border-10 border-white shadow-lg p-5 rounded-lg transition-all duration-500 
                ${isOn ? 'bg-gray-800 text-white' : 'bg-transparent text-black'}`}
        >
            {/* Image de fond : si isOn est false, on l'affiche */}
            {!isOn && (
                <img 
                    className="absolute inset-0 w-full h-full object-cover opacity-50 rounded-lg transition-opacity duration-500"
                    src={Mountain} 
                    alt="pixel art montagne" 
                />
            )}

            {/* Contenu principal */}
            <div className="relative text-center z-10 transition-all duration-500">
                {/* Photo de l'utilisateur */}
                <img 
                    className="relative object-cover w-40 h-40 rounded-lg border-4 border-white shadow-md mx-auto my-6" 
                    src={photoMe} 
                    alt="photo_Emilie_Charron" 
                />

                <h1 className="relative mt-2 text-3xl font-bold">Bonjour</h1>
                <h2 className="relative text-2xl font-semibold">et bienvenue</h2>
                <p className="relative font-semibold text-lg">
                    Je m'appelle <b className="text-red-600 text-xl">Emilie Charron</b>
                </p>
                <p className="relative font-semibold text-lg">Je suis une</p>
                <p className="relative font-semibold text-lg">
                    <b className="text-red-600 text-2xl">développeuse fullstack</b>
                </p>

                {/* Icônes des technologies */}
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
        </div>
    );
};

export default PresentationCard;
