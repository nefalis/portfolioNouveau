import React from 'react';


import './timeline.css'

const Timeline = ({ data }) => {
    return (
        <div className='timelineComponent'>
            
            <div className='timelineContent'>

                <span className='tag' style={{ background: data.category.color }}>
                    {data.category.tag}
                </span>
                <h2>{data.job}</h2>
                <time>{data.date}</time>
                <h3>{data.entreprise}</h3>

                <div className='timelineDescription'>
                <p>{data.description}</p>
                </div>
                
                <p>{data.competence}</p>

            </div>

        </div>
    );
};

export default Timeline;