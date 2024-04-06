import React from "react";
import './Navbar.css'

export default function Navbar(){
    return(
        <nav>
            <div className="navbar">
                <div>
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/90/San_Francisco_State_Athletics_Monogram.svg/800px-San_Francisco_State_Athletics_Monogram.svg.png" alt="sf_logo" width="50px"/>
                </div>
                <div>
                    <a href="/">
                        <button>Home</button>
                    </a>
                    <a href="/post">
                        <button>Post</button>
                    </a>
                    <a href="/feed">
                        <button>Feed</button>
                    </a>
                </div>  
            </div>
        </nav> 
    )
}