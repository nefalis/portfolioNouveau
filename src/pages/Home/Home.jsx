import React from 'react';
import "./home.css"
import PresentationCard from '../../components/PresentationCard/PresentationCard';


const Home = () => {
    return (

        <main className='home'>

            <div className='presentation'>
                <PresentationCard />
            </div>


        </main>

    );
};

export default Home;