import React from "react";
import { FaBuilding, FaCalendarAlt } from "react-icons/fa";

const Timeline = ({ data }) => {
    return (
        <div className="relative w-full max-w-xl mx-auto my-6 p-6 bg-white shadow-lg border-l-4 border-red-500 rounded-lg">
            {/* Tag en haut */}
            <span
                className="absolute top-2 left-2 px-3 py-1 text-xs font-bold text-white rounded"
                style={{ backgroundColor: data.category.color }}
            >
                {data.category.tag}
            </span>

            {/* Titre du poste */}
            <h2 className="text-xl font-bold">{data.job}</h2>

            {/* Date et entreprise */}
            <div className="flex items-center space-x-4 text-gray-600">
                <FaCalendarAlt className="text-lg" />
                <time className="text-sm">{data.date}</time>
            </div>
            <div className="flex items-center space-x-4 text-gray-800">
                <FaBuilding className="text-lg" />
                <h3 className="text-sm font-semibold">{data.entreprise}</h3>
            </div>

            {/* Description */}
            {data.description && (
                <p className="mt-2 text-gray-700 text-sm">{data.description}</p>
            )}

            {/* Compétences */}
            {data.competence && (
                <p className="mt-2 text-xs font-semibold text-gray-800">
                    {data.competence}
                </p>
            )}
        </div>
    );
};

const TimelineAbout = ({ isOn, timelineData }) => {
    return (
        <div className={`timelineContainer m-8 ${isOn ? 'bg-gray-800' : 'bg-transparent'}`}>
            {/* Afficher l'image de fond si isOn est désactivé, sinon fond gris */}
            <img 
                className={`imgtimeline ${isOn ? 'opacity-50' : ''}`} 
                src={timelineData.length > 0 ? timelineData[0]?.image : ''} 
                alt='pixel art paysage' 
            />
            {timelineData.map((data, idx) => (
                <Timeline data={data} key={idx} />
            ))}
        </div>
    );
};

export default TimelineAbout;
