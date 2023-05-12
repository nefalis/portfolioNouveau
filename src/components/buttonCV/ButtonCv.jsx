import React from 'react';
import CV from '../../assets/CV_Charron_Emilie.pdf'
import { GiBubbleField } from "react-icons/gi";

import './buttonCv.css';

const ButtonCv = () => {
    return (
        <div className='buttonCvComponent'>
            <a href={CV} download> <GiBubbleField/> Cliquez pour télécharger mon CV</a>
        </div>
    );
};

export default ButtonCv;