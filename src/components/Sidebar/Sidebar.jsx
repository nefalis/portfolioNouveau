import React from 'react';
import { NavLink } from 'react-router-dom';

import Jellyfish from '../jellyfish/Jelly';
import Name from '../Name/NameMe';

import { SiAiqfome } from "react-icons/si";
import { SiChainguard } from "react-icons/si";
import { GiRoundBottomFlask } from "react-icons/gi";
import { GiBallHeart } from "react-icons/gi";

import pew from '../../assets/pew.mp3'



import './sidebar.css';

const audio = new Audio(pew);

const Sidebar = () => {
    return (
        <div className='sidebarContainer'>
            <nav>
                <div className='jellyfishComponent'>
                    <Jellyfish />
                </div>

                <div className='nameComponent'>
                    <Name />
                </div>



                <div className='sidebar'>
                    <ul>

                        <li className="sidebarHome" onClick={() => audio.play()} >
                            <NavLink to='/home'
                                className={({ isActive }) => (isActive ? "link-active" : "sidebar")} >
                                <span><SiAiqfome /> Accueil</span>
                            </NavLink>
                        </li>


                        <li className="sidebarAbout" onClick={() => audio.play()}>
                            <NavLink to='/about'
                                className={({ isActive }) => (isActive ? "link-active" : "sidebar")}>
                                <span><SiChainguard /> Présentation</span>
                            </NavLink>
                        </li>


                        <li className="sidebarProject" onClick={() => audio.play()}>
                            <NavLink to='/project'
                                className={({ isActive }) => (isActive ? "link-active" : "sidebar")}>
                                <span> <GiRoundBottomFlask /> Projets </span>
                            </NavLink>
                        </li>

                        <li className="sidebarContact" onClick={() => audio.play()}>
                            <NavLink to='/contact'
                                className={({ isActive }) => (isActive ? "link-active" : "sidebar")}>
                                <span><GiBallHeart />  Contact </span>
                            </NavLink>
                        </li>


                    </ul>
                </div>

            </nav>
        </div>


    );
};

export default Sidebar;