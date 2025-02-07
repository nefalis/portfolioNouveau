import React, { useState } from 'react';
import { CiRainbow, CiCloudRainbow  } from "react-icons/ci";
import './toggle.css';

const ToggleButton = () => {
    const [isOn, setIsOn] = useState(false);

    const handleClick = () => {
        setIsOn(!isOn);
    };

    return (
        <div className='toggleComponent'>
            <h2 className='text-2xl font-bold'>Changement d'univers</h2>

            <button className={`on-off-button ${isOn ? 'on' : 'off'}`} onClick={handleClick}>
                <span className="text-3xl">
                    {isOn ? <CiCloudRainbow  /> : <CiRainbow />}
                </span>
            </button>
        </div> 
    );
};

export default ToggleButton;
