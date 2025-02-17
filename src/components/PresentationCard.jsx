import React from 'react';
import { useOutletContext } from 'react-router-dom';
import photoMe from "../assets/photo_Emilie_Charron.jpg";
import { DiReact, DiDjango, DiJsBadge, DiGithubBadge, DiHtml5 } from "react-icons/di";
import { SiCsswizardry } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import Mountain from '../assets/montagne.png';


const PresentationCard = () => {
    const { isOn } = useOutletContext();

    return (
        <div className={`relative flex flex-col md:flex-row items-center justify-center border-10 border-white shadow-lg p-5 rounded-lg transition-all duration-500
            ${isOn ? 'bg-gray-800 text-white' : 'bg-transparent text-black'}
        `}>
            {/* Image de fond (uniquement si isOn est false) */}
            {!isOn && (
                <img className="absolute inset-0 w-full h-full object-cover opacity-50 rounded-lg" src={Mountain} alt="pixel art montagne" />
            )}

            {/* Contenu principal responsive */}
            <div className="relative flex flex-col md:flex-row items-center text-center md:text-left z-10">
                {/* Photo */}
                <img className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg border-4 border-white shadow-md mx-auto md:mr-6 my-4" src={photoMe} alt="photo_Emilie_Charron" />

                {/* Texte */}
                <div>
                    <h1 className="mt-2 text-2xl md:text-3xl font-bold">Bonjour</h1>
                    <h2 className="text-xl md:text-2xl font-semibold">et bienvenue</h2>
                    <p className="font-semibold text-lg">Je m'appelle <b className="text-red-600 text-xl">Emilie Charron</b></p>
                    <p className="font-semibold text-lg">Je suis une</p>
                    <p className="font-semibold text-lg"><b className="text-red-600 text-2xl">développeuse fullstack</b></p>

                    {/* Icônes */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 text-3xl md:text-5xl">
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
        </div>
    );
};

export default PresentationCard;
