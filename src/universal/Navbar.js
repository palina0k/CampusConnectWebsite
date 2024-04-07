import React from "react";
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../logo.png'

export default function Navbar(){
    return(
        <nav>
            <div className="navbar">
                <div>
                    <img src={logo} alt="campus_connect_logo" width="300px"/>
                </div>
                <div>
                    <Link to = "/" >
                        <button className="primaryButton">Home</button>
                    </Link>
                    <Link to="/feed">
                        <button className="secondaryButton">Feed</button>
                    </Link>
                </div>  
            </div>
        </nav> 
    )
}