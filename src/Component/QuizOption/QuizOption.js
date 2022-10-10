import React from 'react';
import Swal from 'sweetalert2'
import "./QuizOption.css"



const QuizOption = ({ option, correctAnswer }) => {
    
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
        <div onClick={() => quizAnswer(option)}>
           
            <h4 className='quizOption'>{option}</h4>
        </div>
    );
};

export default QuizOption;