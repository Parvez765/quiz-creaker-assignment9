import React from 'react';
import QuizOption from '../QuizOption/QuizOption';
import "./Quiz.css"

const Quiz = ({ quiz }) => {
    const { question, options, id, correctAnswer } = quiz
    console.log(quiz)
    
    const quizAnswer = () => {
        
    }
    return (
        <div className='questionContainer'>
            <h3>{question}</h3>
            <div onClick={()=> quizAnswer()} className='quizAnswer'>
                {
                    options.map(option => <QuizOption
                        option = {option}
                    ></QuizOption>)
               }
            </div>
            
        </div>
    );
};

export default Quiz;