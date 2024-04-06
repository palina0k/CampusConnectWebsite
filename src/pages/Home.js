import React from 'react';
import { Link } from 'react-router-dom';
import alligator from '../alligator.png'
import alligator2 from '../alligator2.png'
import './Home.css'; 

export default function Home(){
    return(
        <div className="container">
            <div className = "titlecontainer">
                <h1 className="title">Connect with your fellow Gators to improve the Campus</h1>
                <h2 className="subtitle">Voice campus concerns through CampusConnect!</h2>
                <Link to="/post">
                    <button className="home-button">Get Started</button>
                </Link>
                <img src={alligator2} alt="gator" height={400}/>
            </div>
            <div className = "titlecontainer">
                <h2 className="subtitle">Statement</h2>
                <p className="description">Text here</p>
                <h2 className="subtitle">Goals</h2>
                <p className="description">text here</p >
            </div>
        </div>
    );
}