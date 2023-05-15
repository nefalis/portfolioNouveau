import React from 'react';
import Mountain from '../../assets/montagne.png'
import './aboutMe.css'

const aboutMe = () => {
    return (


        <div className='presentationAbout'>
            <img className='imgAbout' src={Mountain} alt='pixel art montagne'></img>
            <h1>A propos de moi !</h1>

            <h2>Actuellement</h2>
            <p>
                Je suis une développeuse web front-end qui souhaite approfondir le back-end.
                <span>Suite à une reconversion professionel, je me suis trounée tout naturellement vers le developement web. J'ai suivi alors une formation de 8 mois chez Open classrooms.</span>
            </p>

            <h2> Avant</h2>
            <p>Avant j'étais technicienne de laboratoire.
                <span>J'ai du changer de metier suite à des problèmes de santé. J'ai de l'arthrite qui se developpe dans mes mains ce qui pose problème en travaillant des les laboratoires. Ce problème m'a permis de bénéficier d'une reconnaissance RQTH.</span>
                <span>Mais bonne nouvelle, pour etre developpeuse web ca ne me pose aucun soucis !  </span>
            </p>
            <h2>Mon parcours</h2>
            <p>Vous trouverez ci dessous mes expériences professionnelles ainsi qu'un bouton pour telecharger mon CV !</p>

        </div>


    );
};

export default aboutMe;