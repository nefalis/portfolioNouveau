import React from "react";
import { IoMdMail } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import imgFooter from "../assets/footer.png";

const Footer = () => {
    return (
    <div className="relative mx-auto flex h-[250px] w-full max-w-[1200px] flex-col items-center justify-center border-8 border-white shadow-md rounded-2xl ">
        <img
        className="absolute h-full w-full rounded-2xl object-cover opacity-50"
        src={imgFooter}
        alt="image fond footer plage"
        />
        <nav className="relative flex space-x-12">
            <a
                href="mailto:charron.emily@gmail.com"
                className="text-5xl text-black transition-colors hover:text-red-500"
            >
                <IoMdMail />
            </a>
            <a
                href="https://www.linkedin.com/in/emiliec-devweb/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl text-black transition-colors hover:text-red-500"
            >
                <IoLogoLinkedin />
            </a>
            <a
                href="https://github.com/nefalis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl text-black transition-colors hover:text-red-500"
            >
                <IoLogoGithub />
            </a>
        </nav>

        <p className="relative font-['Press Start 2P'] text-center">
        Copyright © Charron Emilie
        </p>

    </div>
    );
};

export default Footer;
