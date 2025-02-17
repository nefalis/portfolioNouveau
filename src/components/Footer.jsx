import React from "react";
import { IoMdMail } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import imgFooter from "../assets/footer.png";

const Footer = ({ isOn }) => {  // Accepter isOn en tant que prop
    return (
        <div className={`relative mx-auto flex h-[250px] w-full max-w-[1200px] flex-col items-center justify-center border-8 border-white shadow-md rounded-2xl transition-all duration-500
            ${isOn ? 'bg-gray-800 text-white' : 'bg-transparent text-black'}`}
        >
            {/* Afficher l'image de fond si isOn est désactivé, sinon fond gris */}
            {!isOn && (
                <img
                    className="absolute h-full w-full rounded-2xl object-cover opacity-50"
                    src={imgFooter}
                    alt="image fond footer plage"
                />
            )}

            {/* Liens sociaux */}
            <nav className={`relative flex space-x-12 ${isOn ? 'text-white' : 'text-black'}`}>
                <a
                    href="mailto:charron.emily@gmail.com"
                    className="text-5xl transition-colors hover:text-red-500"
                >
                    <IoMdMail />
                </a>
                <a
                    href="https://www.linkedin.com/in/emiliec-devweb/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-5xl transition-colors hover:text-red-500"
                >
                    <IoLogoLinkedin />
                </a>
                <a
                    href="https://github.com/nefalis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-5xl transition-colors hover:text-red-500"
                >
                    <IoLogoGithub />
                </a>
            </nav>

            <p className={`relative font-['Press Start 2P'] text-center ${isOn ? 'text-white' : 'text-black'}`}>
                Copyright © Charron Emilie
            </p>
        </div>
    );
};

export default Footer;
