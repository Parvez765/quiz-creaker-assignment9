import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Classes = () => {
    const courseClasses = useLoaderData()
    console.log(courseClasses.data.name)
    return (
        <div>
            <h2>Quiz for {courseClasses.data.name}</h2>
        </div>
    );
};

export default Classes;