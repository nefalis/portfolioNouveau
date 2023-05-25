import React from 'react';
import CVEmilie from '../../assets/DevWeb_Charron_Emilie.pdf'
import { GiBubbleField } from "react-icons/gi";
import ImgButton from "../../assets/space.png"

import './buttonCv.css';

const ButtonCv = () => {
    return (
        <div className='buttonCvComponent'>
            <img className='imgButton' src={ImgButton} alt='pixel art espace'></img>
            <a href={CVEmilie} download> <GiBubbleField /> Cliquez pour télécharger mon CV</a>
        </div>
    );
};

export default ButtonCv;