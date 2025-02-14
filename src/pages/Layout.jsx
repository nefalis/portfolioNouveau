import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar/Sidebar';

const Layout = ({ isOn, setIsOn }) => {
    return (
        <div className={`Layout min-h-screen transition-all duration-500 ${isOn ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
            <Header isOn={isOn} setIsOn={setIsOn} />

            <div className={`flex ${isOn ? 'justify-center' : ''} transition-all duration-500`}>
                {/* Sidebar cachée si isOn est activé */}
                {!isOn && <Sidebar isOn={isOn} setIsOn={setIsOn} />}
                
                {/* Contenu principal avec transmission de isOn */}
                <div className={`main-content flex-1 p-6 ${isOn ? 'w-full' : 'w-3/4'}`}>
                    <Outlet context={{ isOn }} />
                </div>
            </div>

            {/* Transmettre isOn comme prop au Footer */}
            <Footer isOn={isOn} />
        </div>
    );
};

export default Layout;

