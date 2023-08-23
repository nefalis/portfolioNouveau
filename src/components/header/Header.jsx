import React from 'react';
import Landscape from '../../assets/landscape.png'
import { GiSeedling } from "react-icons/gi";

import './header.css'


const Header = () => {
    return (
        <div className='headerContainer'>

            <img className='landscape'
                src={Landscape} alt='paysage en pixel art'>
            </img>

            <div className='MajHeader'>
                <h2> <GiSeedling /> Portfolio en cours de construction ! </h2>
                <h3>MAJ 23/08/2023</h3>
            </div>

        </div>

    );
};

export default Header;