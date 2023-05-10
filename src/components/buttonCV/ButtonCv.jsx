import React from 'react';
import CV from '../../assets/CV_Charron_Emilie.pdf'

import './buttonCv.css';

const ButtonCv = () => {
    return (
        <div className='buttonCvComponent'>
            <a href={CV} download>Cliquez pour télécharger mon CV</a>
        </div>
    );
};

export default ButtonCv;