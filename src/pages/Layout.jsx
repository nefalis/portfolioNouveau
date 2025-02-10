import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar/Sidebar';

const Layout = () => {
    return (
        <div className='Layout'>
            <Header />

            <div className='content'>
                <Sidebar />
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default Layout;