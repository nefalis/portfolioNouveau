import React from 'react';
import Landscape from '../assets/landscape.png';
import Cover from '../assets/cover.jpg';
import { GiSeedling } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import ToggleButton from '../components/toggleBtn/ToggleBtn';

const Header = ({ isOn, setIsOn }) => {
    return (
        <div 
            className={`border-8 border-white mx-auto shadow-md rounded-2xl max-w-[1200px] w-full h-[300px] relative overflow-hidden transition-all duration-500`}
        >
            {/* Image de fond */}
            <img 
                className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl opacity-50 transition-all duration-500"
                src={isOn ? Cover : Landscape} 
                alt="Paysage en pixel art"
            />

            {/* Texte centré */}
            <div 
                className={`relative flex flex-col items-center justify-center text-center 
                ${isOn ? 'top-[20px] text-white' : 'top-0 sm:top-[50px] md:top-[10px] lg:top-[100px] text-black'} 
                font-['Press_Start_2P']`}
            >
                <h2 className="text-lg sm:text-2xl md:text-4xl">Développeuse fullstack</h2>
                <h2 className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl">
                    <GiSeedling className="text-4xl" /> Portfolio en cours de construction !
                </h2>
                <h3 className="text-sm sm:text-base md:text-lg">MAJ 14/02/2025</h3>
            </div>

            {/* Boutons de navigation et Toggle */}
            {isOn ? (
                // Mode sombre : Afficher dans le header pour tous les écrans
                <div className="relative flex flex-col items-center justify-center mt-4 space-y-4">
                    <nav className="absolute flex space-x-6 font-bold">
                        <NavLink to='/home' className="bg-cyan-500 text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-sky-700">Accueil</NavLink>
                        <NavLink to='/about' className="bg-cyan-500 text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-sky-700">Présentation</NavLink>
                        <NavLink to='/project' className="bg-cyan-500 text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-sky-700">Projets</NavLink>
                    </nav>
                    <ToggleButton isOn={isOn} setIsOn={setIsOn} />
                </div>
            ) : (
                // Mode clair : Boutons et toggle cachés en PC (déplacés dans la sidebar)
                <div className="lg:hidden flex flex-col items-center justify-center mt-4 space-y-4">
                    <nav className="absolute flex space-x-6 font-bold">
                        <NavLink to='/home' className="bg-cyan-500 text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-sky-700">Accueil</NavLink>
                        <NavLink to='/about' className="bg-cyan-500 text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-sky-700">Présentation</NavLink>
                        <NavLink to='/project' className="bg-cyan-500 text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-sky-700">Projets</NavLink>
                    </nav>
                    <ToggleButton isOn={isOn} setIsOn={setIsOn} />
                </div>
            )}
        </div>
    );
};

export default Header;
