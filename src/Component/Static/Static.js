import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./static.css"

const Static = () => {
    const [quizes, setQuizes] = useState([])
    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/quiz`)
            .then(res => res.json())
            .then(data => {
                const loadedData = data.data
                const quiz = loadedData.map(quizTotal => {
                //    console.log(quizTotal.total)
                    const totalNumberofQuiz = {
                    names : quizTotal.name,
                    quiz: quizTotal.total
                    
                }
                return totalNumberofQuiz
                })
                setQuizes(quiz)
            })
        
        
    }, [])
  
   
    return (
       
        <div>
            <h2>Total Quiz Number</h2>
            <div className='barchart'>
            
             <BarChart width={300} height={400} data={quizes}>
                <Bar dataKey="quiz" fill="#8884d8" />
                 <XAxis dataKey="names" />
                <YAxis />
                <Tooltip />
        </BarChart>
       </div>
        </div>
      
    );
};

export default Static;