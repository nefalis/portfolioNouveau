import React from 'react';
import Landscape from '../assets/landscape.png';
import Cover from '../assets/cover.jpg';
import { NavLink } from 'react-router-dom';
import ToggleButton from '../components/toggleBtn/ToggleBtn';

const Header = ({ isOn, setIsOn }) => {
    return (
        <div 
            className={`border-8 border-white mx-auto shadow-md rounded-2xl max-w-[1200px] w-full h-[200px] relative overflow-hidden transition-all duration-500`}
        >
            <img 
                className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl opacity-50 transition-all duration-500"
                src={isOn ? Cover : Landscape} 
                alt="Paysage en pixel art"
            />

            <div 
                className={`relative flex flex-col items-center justify-center text-center 
                ${isOn ? 'top-[20px] text-white' : 'top-0 sm:top-[50px] md:top-[10px] lg:top-[100px] text-black'} 
                font-['Press_Start_2P']`}
            >
                <h2 className="text-lg sm:text-2xl md:text-4xl mt-4">Développeuse fullstack</h2>
            </div>

            {/* Boutons de navigation et Toggle */}
            {isOn ? (
                <div className="relative flex flex-col items-center justify-center mt-4 space-y-20 top-10">
                    <nav className="absolute flex space-x-6 font-bold">
                        <NavLink to='/home' className="bg-cyan-500 text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-sky-700">Accueil</NavLink>
                        <NavLink to='/about' className="bg-cyan-500 text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-sky-700">Présentation</NavLink>
                        <NavLink to='/project' className="bg-cyan-500 text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-sky-700">Projets</NavLink>
                    </nav>
                    <div className='toggle-header'>
                        <ToggleButton isOn={isOn} setIsOn={setIsOn}/>
                    </div>
                </div>
            ) : (
                <div className="lg:hidden flex flex-col items-center justify-center mt-4 space-y-6 ">
                    <nav className="relative flex space-x-6 font-bold mb-0">
                        <NavLink to='/home' className="bg-cyan-500 text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-sky-700">Accueil</NavLink>
                        <NavLink to='/about' className="bg-cyan-500 text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-sky-700">Présentation</NavLink>
                        <NavLink to='/project' className="bg-cyan-500 text-black px-4 py-2 rounded-lg cursor-pointer hover:bg-sky-700">Projets</NavLink>
                    </nav>
                    <div className='toggle-header'>
                        <ToggleButton isOn={isOn} setIsOn={setIsOn}/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
