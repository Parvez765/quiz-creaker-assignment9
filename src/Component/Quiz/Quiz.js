import React, { useState } from 'react';
import QuizOption from '../QuizOption/QuizOption';
import "./Quiz.css"
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faEye } from '@fortawesome/free-solid-svg-icons'

const Quiz = ({ quiz }) => {
    const { question, options, id, correctAnswer } = quiz
    console.log(quiz)
    
    const [showCorrect, setShowCorrect] = useState(false)

    const handleRightAnswer = () => {
        setShowCorrect(!showCorrect)
    }


    return (
        <div className='questionContainer'>
            <h3>{question}</h3>
            <div className='quizAnswer'>
                  <FontAwesomeIcon icon={faEye} className="eyeIcon" onClick={handleRightAnswer}></FontAwesomeIcon>
               {
                    options.map(option => <QuizOption
                        option={option}
                        correctAnswer={correctAnswer}
                        showCorrect = {showCorrect}
                        ></QuizOption>)
               }
            </div>
            
        </div>
    );
};

export default Quiz;