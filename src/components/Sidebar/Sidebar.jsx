import React from 'react';
import { NavLink } from 'react-router-dom';
import Jellyfish from '../jellyfish/Jelly';
import Name from '../Name/NameMe';
import ImgSidebar from '../../assets/sidebarImg.png';
import Toggle from '../../components/toggleBtn/ToggleBtn';
import { SiAiqfome, SiChainguard } from "react-icons/si";
import { GiRoundBottomFlask } from "react-icons/gi";
import pew from '../../assets/pew.mp3';
import './sidebar.css';

const audio = new Audio(pew);

const Sidebar = () => {
    return (
        <div className="min-h-screen border-10 border-white shadow-lg rounded-lg m-6 relative w-80">

            <img className="absolute w-full h-full object-cover opacity-40 rounded-lg" src={ImgSidebar} alt="pixel art paysage" />

            <div className="relative flex justify-center p-4">
                <Toggle />
            </div>

            <nav className="relative flex flex-col items-center space-y-10 pt-12">
                <Jellyfish />
                <Name />

                <ul className="sidebar flex flex-col space-y-6 w-full">

                    <li className="sidebarItem bg-[#f998cf] rounded-lg w-2/3 ml-15">
                        <NavLink to='/home' className="sidebarLink flex items-center gap-2" onClick={() => audio.play()}>
                            <SiAiqfome className="icon" /> Accueil
                        </NavLink>
                    </li>

                    <li className="sidebarItem bg-[#f5f994] rounded-lg w-2/3 ml-20">
                        <NavLink to='/about' className="sidebarLink flex items-center gap-2" onClick={() => audio.play()}>
                            <SiChainguard className="icon" /> Présentation
                        </NavLink>
                    </li>

                    <li className="sidebarItem bg-[#7ef8c7] rounded-lg w-2/3 ml-15">
                        <NavLink to='/project' className="sidebarLink flex items-center gap-2" onClick={() => audio.play()}>
                            <GiRoundBottomFlask className="icon" /> Projets
                        </NavLink>
                    </li>

                </ul>
            </nav>

        </div>
    );
};

export default Sidebar;
