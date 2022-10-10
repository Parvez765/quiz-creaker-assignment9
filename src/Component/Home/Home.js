import React from 'react';
import { Link } from 'react-router-dom';
import HeaderImage from "../../images/HeaderImage-01.png"
import "./Home.css"

const Home = () => {
    return (
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
    );
};

export default Home;