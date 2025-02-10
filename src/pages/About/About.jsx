import React from 'react';

import './about.css';
import AboutMe from '../../components/aboutMe';
import timelineData from '../../data/timelineData';
import Timeline from '../../components/Timeline';
import ButtonCv from '../../components/ButtonCv';
import ImgTimeline from '../../assets/imgTimeline.png'


/* Pour récuperer les infos à afficher dans le timeline*/
const TimelineAbout = () =>
    timelineData.length > 0 && (
        <div className="timelineContainer m-8">
            <img className='imgtimeline' src={ImgTimeline} alt='pixel art paysage'></img>
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