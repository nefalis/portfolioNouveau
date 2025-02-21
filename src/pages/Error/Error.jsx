import React from 'react';
import Img404 from '../../assets/page404.png';

import './error.css'

const Error = () => {
    return (

    <div className="container404">
        <img className="imagePage404" src={Img404} alt='pixel art paysage' />
    </div>
    );
};

export default Error;