import React from 'react';
import Landscape from '../../assets/landscape.png'

import './header.css'


const Header = () => {
    return (
        <div className='headerContainer'>

            <div className='containerLandscape'>
                <img className='landscape'
                    src={Landscape} alt='paysage en pixel art'>
                </img>
            </div>

        </div>


    );
};

export default Header;