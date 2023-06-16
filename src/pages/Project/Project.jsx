import React from 'react';
import { getAllProject } from '../../data/apidata';
import './project.css';
import ProjectCard from '../../components/projectCard/ProjectCard';
// import ImgProjectCard from '../../assets/ocean.png';
// import CardProject from '../../components/projectCard/CardProject';




/* Pour récuperer les infos à afficher dans les projectCard*/
const ProjectCardPage = () => {

    return (

        <div className="projectCardContainer">

            {getAllProject().map((data) => {
                return (
                    <ProjectCard
                        key={data.id}
                        idProject={data.id}
                        imgProject={data.pictures}
                        nameProject={data.name}
                        descriptionPorject={data.description}
                        stackProject={data.stack}
                        githubProject={data.github}
                        demoProject={data.link}

                    />
                )
            }
            )}
        </div>
    )
};


export default ProjectCardPage;



// /* Pour récuperer les infos à afficher dans les projectCard*/
// const ProjectCardPage = () =>

//     <div className="projectCardContainer">

//         {getAllProject().map((data, i) => (
//             <ProjectCard data={data} key={idProject} />
//         ))}
//     </div>


// const Project = () => {
//     return (
//         <div className='ProjectContainer'>

//             {/* <img className='imgProjectCard' src={ImgProjectCard} alt='pixel art paysage'></img> */}

//             <div className='projectCard'>
//                 <ProjectCardPage />
//             </div>

//             {/* <div className='projectCard'>
//              <ProjectCardPage />
//             </div> */}

//         </div>
//     );
// };

// export default Project;