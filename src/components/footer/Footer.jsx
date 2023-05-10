import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footerContainer'>
        <nav>
                <Link to='/contact' className="footbar">Contact </Link>
        </nav>
    </div>
    );
};

export default Footer;