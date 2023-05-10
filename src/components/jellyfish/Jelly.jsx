import React from 'react';
import './jellyfish.css';

const Jelly = () => {
    return (
        <div className='containerJelly'>
            <div className="jellyfish">

                <div className="arms">
                    <div className="arm" ></div>
                    <div className="arm" ></div>
                    <div className="arm" ></div>
                    <div className="arm" ></div>
                    <div className="arm" ></div>
                    <div className="arm" ></div>
                    <div className="arm" ></div>
                    <div className="arm" ></div>
                </div>

                <div className="tentacles">
                    <div className="tentacle"></div>
                    <div className="tentacle"></div>
                    <div className="tentacle"></div>
                    <div className="tentacle"></div>
                    <div className="tentacle"></div>
                </div>


                <div className="body"></div>
                

                <div className="eyes">
                    <div className="eye left">
                        <div className="eyelid"></div>
                    </div>
                    <div className="eye right">
                        <div className="eyelid"></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Jelly;