import React from "react";
import './Navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar(){
    return(
        <nav>
            <div className="navbar">
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/90/San_Francisco_State_Athletics_Monogram.svg/800px-San_Francisco_State_Athletics_Monogram.svg.png" alt="sf_logo" width="50px"/>
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