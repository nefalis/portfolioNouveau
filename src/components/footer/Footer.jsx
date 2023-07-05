import React from 'react';
import './footer.css';


import { IoMdMail } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import imgFooter from '../../assets/footer.png'


const Footer = () => {
    return (
        <div className='footerContainer'>

            <img className='imgfooter' src={imgFooter} alt='image fond footer plage'></img>

            <nav >
                <a href="mailto:charron.emily@gmail.com"> <IoMdMail /> </a>
                <a href='https://www.linkedin.com/in/emiliec-devweb/' target='_blank' rel="noopener noreferrer"> <IoLogoLinkedin /> </a>
                <a href='https://github.com/nefalis' target='_blank' rel="noopener noreferrer"> <IoLogoGithub /> </a>

            </nav>

            <p>Copyright © Charron Emilie</p>

        </div>
    );
};

export default Footer;