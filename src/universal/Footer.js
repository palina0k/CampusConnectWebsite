import React from "react";
// import { Link } from "react-router-dom";
import './Footer.css'

export default function Footer(){
    return(
        <div className="footer">
            <h3 style={{fontWeight:"initial"}}>Made With &lt;3 From Our First Hackathon</h3>
            <a href="https://sfhacks-2024.devpost.com/">
                <img src="https://moonpreneur.com/wp-content/uploads/2023/08/niu-business-olympics.png" alt="devpost_logo" style={{height:50}}/>
                {/* <p>Devpost</p> */}
            </a>
            <h4 style={{fontWeight:"normal", fontFamily:"sans-serif"}}>© 2024 CampusConnect</h4>
        </div>
    )
}