import React from 'react';
import { Link } from 'react-router-dom';
import "./Course.css"
const Course = ({ course }) => {
    const {logo, name, id, total} = course
    return (
        <div className='courseContainer'>
            <img src={logo} alt="" />
            <h2>{name}</h2>
            <h3>Total Quiz: {total}</h3>
            <Link to={`/classes/${id}`}>
                <button className='classBtn'>Start Class</button>
            </Link>
        </div>
    );
};

export default Course;