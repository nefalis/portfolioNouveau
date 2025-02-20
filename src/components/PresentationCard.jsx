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
        <div className={`relative flex 
            /* Mobile */
            flex-col 
            w-full max-w-[100%] min-h-[50vh] p-4 gap-4 

            /* Tablette (sm ≥ 640px) */
            sm:flex-row 
            sm:max-w-5xl sm:min-h-[55vh] sm:p-6 sm:gap-4 

            /* Ordinateur (md ≥ 768px) */
            md:flex-row 
            md:max-w-4xl md:min-h-[60vh] md:p-8 md:gap-6 

            /* Grand écran (lg ≥ 1024px) */
            lg:flex-row 
            lg:max-w-5xl lg:min-h-[65vh] lg:p-10 lg:gap-8 

            /* Très grand écran (xl ≥ 1280px) */
            xl:flex-row 
            xl:max-w-6xl xl:min-h-[70vh] xl:p-14 xl:gap-10 

            /* Ultra grand écran (2xl ≥ 1536px) */
            2xl:flex-row 
            2xl:max-w-7xl 2xl:min-h-[80vh] 2xl:p-16 2xl:gap-12 

            border-10 border-white shadow-lg rounded-lg transition-all duration-500
            ${isOn ? 'bg-gray-800 text-white' : 'bg-transparent text-black'}
        `}>

            {!isOn && (
                <img className="absolute inset-0 w-full h-full object-cover opacity-50 rounded-lg" src={Mountain} alt="pixel art montagne" />
            )}

            <div className="relative flex flex-col md:flex-row items-center text-center md:text-left z-10">

                <img className="w-32 h-32 md:w-40 md:h-40 xl:w-52 xl:h-52 2xl:w-60 2xl:h-60 object-cover rounded-lg border-4 border-white shadow-md mx-auto md:mr-6 my-4" src={photoMe} alt="photo_Emilie_Charron" />

                <div>
                    <h1 className="mt-2 text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold">Bonjour</h1>
                    <h2 className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold">et bienvenue</h2>
                    <p className="font-semibold  md:text-lg xl:text-xl 2xl:text-2xl">Je m'appelle <b className="text-red-600 md:text-xl xl:text-2xl 2xl:text-3xl">Emilie Charron</b></p>
                    <p className="font-semibold md:text-lg xl:text-xl 2xl:text-2xl">Je suis une</p>
                    <p className="font-semibold md:text-lg xl:text-xl 2xl:text-2xl"><b className="text-red-600 md:text-2xl xl:text-3xl 2xl:text-4xl">développeuse fullstack</b></p>

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
