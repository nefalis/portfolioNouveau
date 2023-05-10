import React from 'react';
import Jellyfish from '../jellyfish/Jelly';

import './header.css'


const Header = () => {
    return (
        <div className='headerContainer'>

            <div className='jellyfishCompenent'>
                <Jellyfish />
            </div>

        </div>


    );
};

export default Header;