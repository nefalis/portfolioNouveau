import React from 'react';

import './projectCard.css';
import ImgProjectCard from '../../assets/ocean.png';
import { GiJellyfish } from "react-icons/gi";
import { GiCurledTentacle } from "react-icons/gi";


const ProjectCard = ({ data }) => {
    return (
        <div className='projectCardComponent'>

            <img className='imgProjectCard' src={ImgProjectCard} alt='pixel art paysage'></img>

            <div className='projectContent'>

                <h2>{data.name}</h2>

                <div className='imgContentProjet'>
                    <img src={data.pictures[0]} alt="photo du site" />
                </div>

                <p>{data.description}</p>
                <h3>{data.stack}</h3>

                <div className='buttonComponent'>
                    <a className='buttonLink' href={data.github} download> <GiCurledTentacle /> Lien Github</a>
                    <a className='buttonLink' href={data.link} download> <GiJellyfish /> Lien demo</a>
                </div>

            </div>


        </div>
    );
};

export default ProjectCard;