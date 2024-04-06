import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

export default function Home(){
    return(
        <div className="container">
            <img src = "https://marcomm.sfsu.edu/sites/default/files/images/donot-marks-.jpg" alt = "San Francisco State University Logo"/>
            <div className = "titlecontainer">
                <h1 className="title"> Campus Connect</h1>
                <h2 className="subtitle">Statement</h2>
                <p className="description">Text here</p>
                <h2 className="subtitle">Goals</h2>
                <p className="description">text here</p>
            </div>
            <Link to="/post">
                <button>Get Started</button>
            </Link>
        </div>
    );
}