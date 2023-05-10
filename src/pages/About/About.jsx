import React from 'react';

import './about.css';
import AboutMe from '../../components/aboutMe/aboutMe';
import timelineData from '../../data/timelineData';
import Timeline from '../../components/timeline/Timeline'
import ButtonCv from '../../components/buttonCV/ButtonCv';

const TimelineAbout = () =>
    timelineData.length > 0 && (
        <div className="timelineContainer">
            {timelineData.map((data, idx) => (
                <Timeline data={data} key={idx} />
            ))}
        </div>
    );


const About = () => {
    return (
        <div className='aboutContainer'>

            <div className='containerAbout'>
                <AboutMe />
            </div>

            <div className='ButtonCvContainer'>
                <ButtonCv />
            </div>

            <div className='timeline'>
                <TimelineAbout />
            </div>



        </div>
    );
};

export default About;