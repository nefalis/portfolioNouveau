import React from 'react';
import Landscape from '../assets/landscape.png';
import Cover from '../assets/cover.jpg';
import { GiSeedling } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import ToggleButton from '../components/toggleBtn/ToggleBtn';


const Header = ({ isOn, setIsOn }) => {
    return (
        <div 
            className={`border-8 border-white mx-auto shadow-md rounded-2xl max-w-[1200px] w-full ${isOn ? 'h-[280px]' : 'h-[250px]'} relative overflow-hidden transition-all duration-500`}
        >
            {/* Changement dynamique d'image selon l'état isOn */}
            <img 
                className={`absolute top-0 left-0 w-full h-full object-cover rounded-2xl opacity-50 transition-all duration-500`}
                src={isOn ? Cover : Landscape} 
                alt="Paysage en pixel art"
            />

            {/* Texte centré avec position et couleur ajustées */}
            <div 
                className={`relative flex flex-col items-center justify-center text-center ${isOn ? 'top-[20px] text-white' : 'top-[100px] text-black'} font-['Press_Start_2P']`}
            >
                <h2 className="text-lg md:text-4xl">Développeuse fullstack</h2>
                <h2 className="flex items-center gap-2 text-lg md:text-xl">
                    <GiSeedling className="text-4xl" /> Portfolio en cours de construction !
                </h2>
                <h3 className="text-sm md:text-base">MAJ 17/02/2025</h3>
            </div>

            {/* Boutons visibles sous le header si le sidebar est caché */}
            {isOn && (
            <>
                <nav className="flex justify-center space-x-6 mt-6 relative">
                    <NavLink to='/home' className="bg-cyan-500 text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-sky-700">Accueil</NavLink>
                    <NavLink to='/about' className="bg-cyan-500 text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-sky-700">Présentation</NavLink>
                    <NavLink to='/project' className="bg-cyan-500 text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-sky-700">Projets</NavLink>
                </nav>
                <div className="relative flex justify-center p-4">
                    <ToggleButton isOn={isOn} setIsOn={setIsOn} />
                </div>
            </>
        )}

        </div>
    );
};
export default Header;
