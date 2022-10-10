import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import graduationCap from "../../images/graduationCap-01.png"
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className='navContainer'>
            <div className='titleContainer'>
                <img src={graduationCap} alt="" className='headerIcon'></img>
                <h2>EduExpert</h2>
            </div>
            <div className='navLink'>
                 <NavLink className={({isActive}) => isActive ? "active" : undefined} to="/home">Home</NavLink>
                <NavLink to="/classes">Classes</NavLink>
                <NavLink to="/statics">Statics</NavLink>
                <NavLink to="/blog">Blog</NavLink>
           </div>
        </div>
    );
};

export default Navbar ;