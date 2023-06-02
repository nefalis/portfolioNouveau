import React from 'react';

import './project.css';
import projectData from '../../data/projectData';
import ProjectCard from '../../components/projectCard/ProjectCard';
// import CardProject from '../../components/projectCard/CardProject';




/* Pour récuperer les infos à afficher dans les projectCard*/
const ProjectCardPage = () =>
    projectData.length > 0 && (
        <div className="projectCardContainer">

            {projectData.map((data, i) => (
                <ProjectCard data={data} key={i} />
            ))}
        </div>
    );

const Project = () => {
    return (
        <div className='ProjectContainer'>

            <div className='projectCard'>
                <ProjectCardPage />
            </div>

             {/* <div className='projectCard'>
             <ProjectCardPage />
            </div> */}

        </div>
    );
};

export default Project;