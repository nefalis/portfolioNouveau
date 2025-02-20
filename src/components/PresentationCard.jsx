import React from 'react';
import { useOutletContext } from 'react-router-dom';
import photoMe from "../assets/me.jpg";
import { DiReact, DiDjango, DiJsBadge, DiGithubBadge, DiHtml5 } from "react-icons/di";
import { SiCsswizardry } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import Mountain from '../assets/montagne.png';


const PresentationCard = () => {
    const { isOn } = useOutletContext();

    return (
        <div className={`relative flex flex-col md:flex-row items-center justify-center border-10 border-white shadow-lg p-5 rounded-lg transition-all duration-500
            ${isOn ? 'bg-gray-800 text-white' : 'bg-transparent text-black'}
            w-full max-w-[90%] sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl
            min-h-[50vh] xl:min-h-[60vh] 2xl:min-h-[70vh] 
            py-10 xl:py-20
        `}>
            {!isOn && (
                <img className="absolute inset-0 w-full h-full object-cover opacity-50 rounded-lg" src={Mountain} alt="pixel art montagne" />
            )}

            <div className="relative flex flex-col md:flex-row items-center text-center md:text-left z-10">

                <img className="w-32 h-32 md:w-40 md:h-40 xl:w-52 xl:h-52 2xl:w-60 2xl:h-60 object-cover rounded-lg border-4 border-white shadow-md mx-auto md:mr-6 my-4" src={photoMe} alt="photo_Emilie_Charron" />

                <div>
                    <h1 className="mt-2 text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold">Bonjour</h1>
                    <h2 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">et bienvenue</h2>
                    <p className="font-semibold text-lg xl:text-xl 2xl:text-2xl">Je m'appelle <b className="text-red-600 text-xl xl:text-2xl 2xl:text-3xl">Emilie Charron</b></p>
                    <p className="font-semibold text-lg xl:text-xl 2xl:text-2xl">Je suis une</p>
                    <p className="font-semibold text-lg xl:text-xl 2xl:text-2xl"><b className="text-red-600 text-2xl xl:text-3xl 2xl:text-4xl">développeuse fullstack</b></p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 text-3xl xl:text-5xl 2xl:text-6xl">
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
