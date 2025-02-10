import React from 'react';
import Mountain from '../assets/montagne.png';

const AboutMe = () => {
    return (
        <div className="relative mx-auto mt-8 max-w-[1200px] rounded-2xl border-[10px] border-white bg-cyan-100 p-6 shadow-md font-['Press_Start_2P'] text-black">
            <img 
                className="absolute left-0 top-0 h-full w-full rounded-2xl object-cover opacity-30"
                src={Mountain} 
                alt="pixel art montagne"
            />
            
            <h1 className="relative text-xl md:text-2xl text-center">À propos de moi !</h1>

            <h2 className="relative mt-12 text-lg text-red-500">Actuellement</h2>
            <p className="relative leading-5">
                Développeuse web fullstack, je maîtrise aussi bien le front-end que le back-end.
                <span className="block">Après une reconversion professionnelle, il m’a semblé naturel de m’orienter vers ce domaine qui allie créativité, logique et résolution de problèmes. </span>
            </p>

            <h2 className="relative mt-12 text-lg text-red-500">Avant</h2>
            <p className="relative leading-5">
                Anciennement technicienne de laboratoire.
                <span className="block">J'ai dû repenser mon parcours professionnel en raison de problèmes de santé. L’arthrite qui se développe dans mes mains compliquait mon travail en laboratoire, ce qui m’a conduit à obtenir une reconnaissance RQTH.</span>
                <span className="block">Mais bonne nouvelle, pour être développeuse, ça ne me pose aucun souci !</span>
            </p>

            <h2 className="relative mt-12 text-lg text-red-500">Mon parcours</h2>
            <p className="relative leading-5">Vous trouverez ci-dessous le détail de mes expériences professionnelles, ainsi qu’un bouton pour télécharger mon CV.</p>
        </div>
    );
};

export default AboutMe;
