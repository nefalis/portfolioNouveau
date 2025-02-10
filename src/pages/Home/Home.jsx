import React from 'react';
import "./home.css"
import PresentationCard from '../../components/PresentationCard';
import ButtonCv from '../../components/ButtonCv';


const Home = () => {
    return (

        <main className='home'>

            <div className='presentation'>
                <PresentationCard />
            </div>

            <div className='buttonCvHome'>
                <ButtonCv />
            </div>

        </main>

    );
};

export default Home;