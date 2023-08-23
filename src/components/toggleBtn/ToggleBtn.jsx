import React, { useState } from 'react';

import './toggle.css';

const ToggleButton = () => {
    const [isOn, setIsOn] = useState(false);

    const handleClick = () => {
        setIsOn(!isOn);
    };

    return (
<div className='toggleComponent'>
        <h2>Changement d'univer</h2>

        <button className={`on-off-button ${isOn ? 'on' : 'off'}`} onClick={handleClick}>
            {isOn ? 'ON' : 'OFF'}
        </button>

     </div>   
    );
};

export default ToggleButton;

