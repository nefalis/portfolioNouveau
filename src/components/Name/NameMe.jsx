import React from 'react';

import './name.css';

const NameMe = () => {
    return (
        <div className='name font-bold'>

            <div className='firstName flex flex-row'>
                <span>Emilie</span>
            </div>

            <div className='lastName flex flex-row'>
                <span>Charron</span>
            </div>

        </div>
    );
};

export default NameMe;