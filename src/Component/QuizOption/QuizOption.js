import React from 'react';
import Swal from 'sweetalert2'
import "./QuizOption.css"



const QuizOption = ({ option, correctAnswer, showCorrect }) => {
    
    const quizAnswer = (option) => {
        if (option === correctAnswer) {
            Swal.fire(
                'Good job!',
                'The Answer Is Right!',
                'success'
            )
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'The Answer Is wrong!',
                footer: 'Please Try again'
            })
        }
        
    }
   
    return (
        <div>
             <div onClick={() => quizAnswer(option)}>
          
            <h4 className={`quizOption ${(showCorrect && option === correctAnswer) && 'green'}`}>{option}</h4>
            </div>
           
       </div>
    );
};

export default QuizOption;