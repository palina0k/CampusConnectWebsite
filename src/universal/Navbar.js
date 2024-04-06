import React from "react";
import "./Navbar.css"

export default function Navbar(){
    return(
        <Navbar>
            <nav>
                <a href="/home">
                    <button>Home</button>
                </a>
                <a href="/post">
                    <button>Post</button>
                </a>
                <a href="/feed">
                    <button>Feed</button>
                </a>
            </nav>
        </Navbar>
    )
}