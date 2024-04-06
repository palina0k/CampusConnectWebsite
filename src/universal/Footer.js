import React from "react";
// import { Link } from "react-router-dom";
import './Footer.css'

export default function Footer(){
    return(
        <footer className="footer">
            <div>
                <a href="https://sfhacks-2024.devpost.com/" target="__blank">
                    <img src="https://seeklogo.com/images/D/devpost-logo-95FF685C5D-seeklogo.com.png" alt="devpost_logo" style={{height:30,paddingRight:20,paddingBottom:20}}/>
                </a>
                <a href="https://sfhacks.io/" target="__blank">
                    <img src="https://sfhacks.io/brand-assets/head-logo.svg" alt="sfhacks_logo" style={{height:70}}/>
                </a>
            </div>
            <div>
                <h4 style={{fontWeight:"normal", fontFamily:"sans-serif"}}>© 2024 CampusConnect | Made With &lt;3 At Our First Hackathon</h4>
            </div>
        </footer>
    )
}