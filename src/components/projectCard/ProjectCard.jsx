import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { GiJellyfish, GiCurledTentacle } from "react-icons/gi";
import projectData from '../../data/projectData';
import './projectCard.css';

const ProjectCard = ({ id, title, description, stack, github, link, pictures, isOn }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/project/${id}`);
    };

    return (
        <div 
            onClick={handleClick} 
            className={`border-4 border-white rounded-xl shadow-md p-4 text-center transition-transform duration-200 ease-in-out hover:transform hover:translate-y-[-5px] 
            ${isOn ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}
        >
            <div className="my-4">
                <h3 className="text-[#ff6f61] text-lg font-bold mb-2">{title}</h3>
                <a href={github} target="_blank" className="inline-flex items-center justify-center gap-2 m-2 text-white bg-[#ff6f61] hover:bg-[#d9584a] font-bold text-sm py-2 px-3 rounded-lg transition-all">
                    <GiJellyfish /> Lien Github
                </a>
                {link && (
                    <a href={link} target="_blank" className="inline-flex items-center justify-center gap-2 text-white bg-[#ff6f61] hover:bg-[#d9584a] font-bold text-sm py-2 px-3 rounded-lg transition-all">
                        <GiCurledTentacle /> Lien démo
                    </a>
                )}
            </div>

            <div>
                <img className="w-full max-h-[180px] object-cover rounded-lg" src={pictures[0]}  alt={title} />
                <p className="text-sm">{description}</p>
                <p className="font-bold text-sm">{stack}</p>
            </div>
        </div>
    );
};

const ProjectCardItem = () => {
    const { isOn } = useOutletContext();

    const categories = ['Back-end', 'Applications CLI', 'Full-stack', 'Front-end'];

    return (
        <div className="projectCardComponent">
            {categories.map(category => (
                <div key={category}>
                    <h2 className="titleCardComponent text-2xl mb-4">{category}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 justify-center">
                        {projectData
                            .filter(project => project.category === category)
                            .map((project, index) => (
                                <ProjectCard key={project.id} id={project.id} {...project} isOn={isOn} />

                            ))
                        }
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectCardItem;
