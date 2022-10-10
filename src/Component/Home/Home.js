import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import HeaderImage from "../../images/HeaderImage-01.png"
import Course from '../Course/Course';
import "./Home.css"


const Home = () => {
    const courses = useLoaderData() 
    
    return (
        <div>
            <div className='headerContent'>
                <div className='headerText'>
                <h1>Lets Learn <br></br>Technology With Fun</h1>
                <div className='navBtn'>
                    <Link to="/classes">Our Classes</Link>
                </div>
            </div>
            <div className='headerImage'>
                <img src={HeaderImage} alt="" />
            </div>
            </div>
            <div className='courseSection'>
                <h2>Our Courses</h2>
                <div className='courseContent'>
                     {
                    courses.data.map(course => <Course
                        key={course.id}
                        course = {course}
                    ></Course>)
                }
               </div>
            </div>
        </div>
    );
};

export default Home;