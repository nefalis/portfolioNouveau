import React from 'react';
import { CiRainbow, CiCloudRainbow } from "react-icons/ci";
import './toggle.css';

const ToggleButton = ({ isOn, setIsOn }) => {
    const handleClick = () => {
        setIsOn(!isOn);
    };

    return (
        <div className="toggleComponent">
            <h2 className="text-2xl font-bold">Changement d'univers</h2>

            <button 
                className={`on-off-button ${isOn ? 'on' : 'off'} ${isOn ? 'border-white' : 'border-black'}`} 
                onClick={handleClick}
            >
                <span className="text-3xl">
                    {isOn ? <CiRainbow /> : <CiCloudRainbow />}
                </span>
            </button>
        </div>
    );
};

export default ToggleButton;
