import React from 'react';
import Landscape from '../../assets/landscape.png';
import { GiSeedling } from "react-icons/gi";

const Header = () => {
    return (
        <div className="border-8 border-white m-4 shadow-md rounded-2xl max-w-[1440px] w-full h-[250px] relative overflow-hidden">

            <img 
                className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl opacity-50"
                src={Landscape} 
                alt="Paysage en pixel art"
            />

            <div className="relative flex flex-col items-center justify-center text-center top-[100px] font-['Press_Start_2P'] text-black">
                <h2 className="text-lg md:text-4xl">Développeuse fullstack</h2>
                <h2 className="flex items-center gap-2 text-lg md:text-xl">
                    <GiSeedling className="text-4xl" /> Portfolio en cours de construction !
                </h2>
                <h3 className="text-sm md:text-base">MAJ 03/02/2025</h3>
            </div>

        </div>
    );
};

export default Header;
