import React from 'react';
import { useOutletContext } from 'react-router-dom';
import CVEmilie from '../assets/Charron_Emilie_CV.pdf';
import { GiBubbleField } from "react-icons/gi";
import ImgButton from "../assets/space.png";

const ButtonCv = () => {
    const { isOn } = useOutletContext();

    return (
        <div className={`relative flex items-center justify-center gap-5 border-10 border-white shadow-md rounded-lg m-10 w-4/5 transition-all duration-500 
            ${isOn ? 'bg-gray-800 text-white' : 'bg-transparent text-black'}`}
        >
            {!isOn && (
                <img 
                    className={`absolute w-full h-full object-cover opacity-40 rounded-lg transition-opacity duration-500 ${isOn ? 'hidden' : 'block'}`} 
                    src={ImgButton} 
                    alt="pixel art espace" 
                />
            )}

            <a href={CVEmilie} download className="relative flex items-center font-press-start hover:text-red-600 cursor-pointer transition-all duration-500">
                <GiBubbleField className="text-[40px] pr-2" />
                <p className='text-xl font-bold'>Cliquez pour télécharger mon CV</p>
            </a>
        </div>
    );
};

export default ButtonCv;


