import React from 'react';
import lostImg from "../../images/dizzy-face-cross-error-emoji-37675-removebg-preview.png"
import "./Error.css"

const Error = () => {
    return (
        <div className='errorContainer'>
            <div className='errorImg'>
                <img src={lostImg} alt=""></img>
            </div>
            <div className='textContainer'>
                <h1>404</h1>
                <p>Oops! <br></br>The Route You Are Trying Is Not Found</p>
            </div>
        </div>
    );
};

export default Error;