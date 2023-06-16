import React from 'react';
import Landscape from '../../assets/landscape.png'
import { GiSeedling } from "react-icons/gi";

import './header.css'


const Header = () => {
    return (
        <div className='headerContainer'>

            <div className='containerLandscape'>
                <img className='landscape'
                    src={Landscape} alt='paysage en pixel art'>
                </img>
            </div>

            <div className='MajHeader'>
                <h2> <GiSeedling /> Portfolio en cours de construction ! </h2>
                <h3>MAJ 16/06/2023</h3>
            </div>

        </div>


    );
};

export default Header;