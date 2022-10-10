import React from 'react';

const Quiz = ({ quiz }) => {
    const {question, options} = quiz
    return (
        <div className='questionContainer'>
            <h3>{question}</h3>
            <h4>1. {options[0]}</h4>
            <h4>2. {options[1]}</h4>
            <h4>3. {options[2]}</h4>
            <h4>4. {options[3]}</h4>
            
        </div>
    );
};

export default Quiz;