import React from 'react';
import CVEmilie from '../assets/Charron_Emilie_CV.pdf';
import { GiBubbleField } from "react-icons/gi";
import ImgButton from "../assets/space.png";

const ButtonCv = () => {
    return (
        <div className="relative flex items-center justify-center gap-5 border-10 border-white shadow-md rounded-lg m-10 w-4/5">

            <img className="absolute w-full h-full object-cover opacity-40 rounded-lg" src={ImgButton} alt="pixel art espace" />

            <a href={CVEmilie} download className="relative flex items-center text-black font-press-start hover:text-red-600 cursor-pointer">
                <GiBubbleField className="text-[40px] pr-2" />
                <p className='text-xl font-bold'>Cliquez pour télécharger mon CV</p>
            </a>

        </div>
    );
};

export default ButtonCv;
