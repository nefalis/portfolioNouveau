import React from 'react';
import './quiz.css';


const Quiz = () => {
    return (
        <div className='quizz_container'>
            <h1>Est ce que je suis faite pour votre entreprise ? </h1>

            <div className='quizz_block'>
                <h4>Caractéristique </h4>
                <div>
                    <input type='radio' id='organisee' className='q1' value='a' checked>
                        <label for='organisée'>Organisée</label>
                    </input>
                </div>
                <div>
                    <input type='radio' id='motivee' classeName='q1' value='b' checked>
                        <label for='motivee'>Motivée</label>
                    </input>
                </div>
                <div>
                    <input type='radio' id='serieuse' className='q1' value='c' checked>
                        <label for='serieuse'>Sérieuse</label>
                    </input>
                </div>
            </div>


            <div className='quizz_block'>
                <h4>Expérience </h4>
                <div>
                    <input type='radio' id='debutant' className='q2' value='a' checked>
                        <label for='debutant'>Débutant</label>
                    </input>
                </div>
                <div>
                    <input type='radio' id='junior' className='q2' value='b' checked>
                        <label for='junior'>1 an d'expérience</label>
                    </input>
                </div>
                <div>
                    <input type='radio' id='senior' className='q2' value='c' checked>
                        <label for='senior'>plusieurs années d'expériences</label>
                    </input>
                </div>
            </div>

            <div className='quizz_block'>
                <h4>Connaissance</h4>
                <div>
                    <input type='radio' id='react' className='q3' value='a' checked>
                        <label for='react'>React</label>
                    </input>
                </div>
                <div>
                    <input type='radio' id='java' className='q3' value='b' checked>
                        <label for='java'>Java</label>
                    </input>
                </div>
                <div>
                    <input type='radio' id='php' className='q3' value='c' checked>
                        <label for='php'>PHP</label>
                    </input>
                </div>
            </div>


            <div className='quizz_block'>
                <h4>Contrat</h4>
                <div>
                    <input type='radio' id='alternance' className='q4' value='a' checked>
                        <label for='alternance'>Alternance</label>
                    </input>
                </div>
                <div>
                    <input type='radio' id='cdd' className='q4' value='b' checked>
                        <label for='cdd'>CDD</label>
                    </input>
                </div>
                <div>
                    <input type='radio' id='cdi' className='q4' value='c' checked>
                        <label for='cdi'>CDI</label>
                    </input>
                </div>
            </div>

            <div className='button_result'>
                <button type='submit'>Valider</button>
            </div>

            <div className='results'>
                <h2>Cliquez sur <span>Valider</span> pour voir les <span>résultats.</span></h2>
                <p className='text_result'></p>
            </div>

        </div>
    );
};

export default Quiz;