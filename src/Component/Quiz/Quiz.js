import React from 'react';
import QuizOption from '../QuizOption/QuizOption';
import "./Quiz.css"


const Quiz = ({ quiz }) => {
    const { question, options, id, correctAnswer } = quiz
    console.log(quiz)
    
    
    return (
        <div className='questionContainer'>
            <h3>{question}</h3>
            <div className='quizAnswer'>
                
                
                {
                    options.map(option => <QuizOption
                        option={option}
                        correctAnswer={correctAnswer}
                        
                        ></QuizOption>)
               }
            </div>
            
        </div>
    );
};

export default Quiz;