import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar/Sidebar';

const Layout = ({ isOn, setIsOn }) => {
    return (
        <div className={`Layout min-h-screen transition-all duration-500 ${isOn ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
            {/* HEADER avec navigation intégrée en mode mobile */}
            <Header isOn={isOn} setIsOn={setIsOn} />

            <div className="flex">
                {/* Sidebar affichée uniquement en mode desktop */}
                {!isOn && <Sidebar isOn={isOn} setIsOn={setIsOn} className="hidden lg:block" />}
                
                {/* Contenu principal */}
                <div className={`main-content flex-1 p-6 ${isOn ? 'w-full' : 'lg:w-3/4 w-full'}`}>
                    <Outlet context={{ isOn }} />
                </div>
            </div>

            <Footer isOn={isOn} />
        </div>
    );
};

export default Layout;
