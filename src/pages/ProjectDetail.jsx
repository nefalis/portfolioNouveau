import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import projectData from '../data/projectData';
import projectclear from '../assets/projectclear.png'

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { isOn } = useOutletContext();
    
    const project = projectData.find(proj => proj.id === Number(id));

    if (!project) {
        return <h2 className="text-center text-red-500 text-2xl">Projet introuvable</h2>;
    }

    return (
        <div className="relative max-w-3xl mx-auto p-6 border border-gray-300 rounded-lg shadow-lg mt-10">
            <img 
                className="absolute inset-0 w-full h-full object-cover opacity-50 rounded-lg z-0" 
                src={projectclear} 
                alt="pixel art paysage" 
            />
            <div className="relative z-10">
                <button 
                    onClick={() => navigate(-1)} 
                    className="flex items-center gap-2 text-gray-700 hover:text-[#ff6f61] font-bold mb-4"
                >
                    <FaArrowLeft /> Retour
                </button>

                <h1 className="text-3xl font-bold text-center text-[#ff6f61]">{project.title}</h1>
                
                <div className="mt-6 flex justify-center space-x-4 text-2xl">
                    {project.github && (
                        <a href={project.github} target="_blank" className="bg-[#ff6f61] hover:bg-[#d9584a] text-white px-4 py-2 rounded-lg">
                            GitHub
                        </a>
                    )}
                    {project.link && (
                        <a href={project.link} target="_blank" className="bg-[#ff6f61] hover:bg-[#d9584a] text-white px-4 py-2 rounded-lg">
                            Voir la démo
                        </a>
                    )}
                </div>

                <p className="mt-4 font-bold text-xl">
                    {project.descriptionDetail.split("\n").map((line, index) => (
                        <span key={index}>
                            {line}
                            <br />
                        </span>
                    ))}
                </p>
                
                <p className="mt-2 font-bold text-2xl">Technologies : {project.stack}</p>

                <div className="flex gap-4 overflow-x-auto flex-col mt-4">
                    {project.pictures.map((pic, index) => (
                        <img key={index} src={pic} alt={`${project.title} - ${index + 1}`} className="object-cover rounded-lg border" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;

