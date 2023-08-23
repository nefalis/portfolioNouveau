import React from 'react';
import { NavLink } from 'react-router-dom';

import Jellyfish from '../jellyfish/Jelly';
import Name from '../Name/NameMe';
import ImgSidebar from '../../assets/sidebarImg.png'
import Toggle from '../../components/toggleBtn/ToggleBtn'

import { SiAiqfome } from "react-icons/si";
import { SiChainguard } from "react-icons/si";
import { GiRoundBottomFlask } from "react-icons/gi";
import { IoMdMail } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";

import pew from '../../assets/pew.mp3'



import './sidebar.css';

const audio = new Audio(pew);

const Sidebar = () => {
    return (
        <div className='sidebarContainer'>

            <img className='imgAbout' src={ImgSidebar} alt='pixel art paysage'></img>

            <div className='SidebarToggle'>
                <Toggle/>
            </div>




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

                    </ul>

                    <div className='sidebarContact' >
                        <a href="mailto:charron.emily@gmail.com"> <IoMdMail /> </a>
                        <a href='https://www.linkedin.com/in/emiliec-devweb/' target='_blank' rel="noopener noreferrer"> <IoLogoLinkedin /> </a>
                        <a href='https://github.com/nefalis' target='_blank' rel="noopener noreferrer"> <IoLogoGithub /> </a>
                    </div>

                </div>

            </nav>
        </div>


    );
};

export default Sidebar;