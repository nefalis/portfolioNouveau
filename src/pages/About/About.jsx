import React from 'react';
import { useOutletContext } from 'react-router-dom';
import './about.css';
import AboutMe from '../../components/aboutMe';
import timelineData from '../../data/timelineData';
import TimelineAbout from '../../components/Timeline';
import ButtonCv from '../../components/ButtonCv';


const About = () => {
    const { isOn } = useOutletContext();

    return (
        <div className={`aboutContainer ${isOn ? ' text-white' : ' text-black'}`}>
            <div className='containerAbout'>
                <AboutMe />
            </div>

            <div className='ButtonCvContainer'>
                <ButtonCv />
            </div>

            <div className='timeline'>
                {/* Passer isOn à TimelineAbout */}
                <TimelineAbout isOn={isOn} timelineData={timelineData} />
            </div>
        </div>
    );
};

export default About;

