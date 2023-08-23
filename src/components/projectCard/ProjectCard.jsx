import React from 'react';
import './projectCard.css';
import ImgOcean from '../../assets/oceanBis.png'

import Quiz from '../quiz/Quiz'

import Booki from '../../assets/booki1.png'
import Hottake from '../../assets/hottake2.png'
import Kanap from '../../assets/kanap1.png'
import Kasa from '../../assets/kasa1.png'
import Ohmyfood from '../../assets/ohmyfood1.png'
import Panthere from '../../assets/panthere1.png'
import Webee from '../../assets/webee.png'
import Portfolio from '../../assets/portfolio.png'

import { GiJellyfish } from "react-icons/gi";
import { GiCurledTentacle } from "react-icons/gi";

const ProjectCard = ({ title, description, stack, github, link, picture }) => {
    return (
        <div className="project-card">

            <div className='project_link'>
                <h3>{title}</h3>
                <a href={github} download target="_blank" className="link"><GiJellyfish /> Lien Github</a>
                {link && (
                    <a href={link} download target="_blank" className="link"><GiCurledTentacle /> Lien démo</a>
                )}
            </div>

            <div className='project_description'>
                <img src={picture} alt="Project" />

                <p>{description}</p>
                <p className='stack'>{stack}</p>
            </div>



        </div>
    );
};

const ProjectCardItem = () => {

    return (
        <div className='projectCardComponent'>

            {/* <img className='imgProjectCard' src={ImgOcean} alt='pixel art paysage'></img> */}

            

                <h2>Projets professionalisants</h2>

            <div className="Card">    

                <ProjectCard
                    title="Booki"
                    picture={Booki}
                    description="Réalisation d'un prototype conformément à la maquette en HTML et CSS."
                    stack="HTML - CSS - Responsive - Validation W3C"
                    github="https://github.com/nefalis/Booki-P2"
                    link="https://nefalis.github.io/Booki-P2/"
                />

                <ProjectCard
                    title="La Panthère"
                    picture={Panthere}
                    description="Optimisation d'un site existant. Amélioration de performance et accessibilité. Création d'un rapport SEO pour montrer les optimisations apportés au site."
                    stack="HTML - CSS - Lighthouse - SEO"
                    github="https://github.com/nefalis/La-Panthere"
                    link="https://nefalis.github.io/La-Panthere/"
                />

                <ProjectCard
                    title="OhMyFood"
                    picture={Ohmyfood}
                    description="Conception d'une page web en mobile first et en intégrant des animations."
                    stack="HTML - CSS - Sass - Responsive"
                    github="https://github.com/nefalis/ohmyfood"
                    link="https://nefalis.github.io/ohmyfood/"
                />

                <ProjectCard
                    title="Kanap"
                    picture={Kanap}
                    description="Construction du frontend d'un site de e-commece avec des données issue d'une API. L'utilisateur peut ajouter/ modifier ou supprimer des articles dans son panier avant de passer commande."
                    stack="HTML - CSS - JavaScript"
                    github="https://github.com/nefalis/Kanap"
                />

                <ProjectCard
                    title="Hot Takes"
                    picture={Hottake}
                    description="Mise en place d'une API sécurisée avec NodeJS et Express. Création d'une authentification sécurisée. Utilisation de MongoDB pour stocker les données. Gestion des likes/dislikes."
                    stack="HTML - CSS - MongoDB - Express - NodeJS"
                    github="https://github.com/nefalis/Projet-6"
                />

                <ProjectCard
                    title="Kasa"
                    picture={Kasa}
                    description="Création d'une application avec React en suivant une maquette Figma "
                    stack="HTML - CSS - React"
                    github="https://github.com/nefalis/projet-7"
                    link="https://projet-7-five.vercel.app/"
                />

                <ProjectCard
                    title="Mon portfolio"
                    picture={Portfolio}
                    description="Création de mon portfolio "
                    stack="HTML - CSS - React"
                    link=""
                />

                {/* <ProjectCard
                    title="Projet en cours"
                    picture={Webee}
                    description="Projet collectif en cours de developement. Aide à l'organisation du projet, MLD, création de composant "
                    stack="HTML - CSS - React - Tailwind - Jira - Notion - Penpot"
                    link=""
                /> */}

                </div>

                <h2>Jeux</h2>

                {/* <Quiz /> */}
                <div className="Card"> 
                
                </div>

            
        </div>

    );
};

export default ProjectCardItem;