import React from 'react';
import { Link } from "react-router-dom";

import './projectCard.css';
import ImgProjectCard from '../../assets/ocean.png';
import { GiJellyfish } from "react-icons/gi";
import { GiCurledTentacle } from "react-icons/gi";




const ProjectCard = ({ idProject, imgProject, nameProject, descriptionPorject, stackProject, githubProject, demoProject }) => {
    return (
        <div className='projectCardComponent'>
            <Link className='card' to={"../Project/" + idProject} >

                <img className='imgProjectCard' src={ImgProjectCard} alt='pixel art paysage'></img>

                <div className='projectContent'>

                    <h2>{nameProject}</h2>

                    <div className='imgContentProjet'>
                        <img src={imgProject} alt="photo du site" />
                    </div>

                    <p>{descriptionPorject}</p>
                    <h3>{stackProject}</h3>

                    <div className='buttonComponent'>
                        <a className='buttonLink' href={githubProject} download> <GiCurledTentacle /> Lien Github</a>
                        <a className='buttonLink' href={demoProject} download> <GiJellyfish /> Lien demo</a>
                    </div>

                </div>
            </Link>

        </div>
    );
};

export default ProjectCard;