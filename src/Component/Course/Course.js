import React from 'react';
import { Link } from 'react-router-dom';
import "./Course.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import {faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Course = ({ course }) => {
    const {logo, name, id, total} = course
    return (
        <div className='courseContainer'>
            <img src={logo} alt="" />
            <h2>{name}</h2>
            <h3>Total Quiz: {total}</h3>
            <Link to={`/classes/${id}`}>
                <div className='btnContainer'>
                     <button className='classBtn'>Start Class
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
               </div>
            </Link>
        </div>
    );
};

export default Course;