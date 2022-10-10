import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz/Quiz';

const Classes = () => {
    const courseClasses = useLoaderData()
    console.log(courseClasses.data.name)
    return (
        <div>
            <h2>Quiz for {courseClasses.data.name}</h2>
            {
                courseClasses.data.questions.map(quiz => <Quiz
                    key={quiz.id}
                    quiz ={quiz}
                ></Quiz>)
            }
        </div>
    );
};

export default Classes;