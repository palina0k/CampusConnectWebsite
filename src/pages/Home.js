import React from 'react';
import { Link } from 'react-router-dom';
// import alligator from '../alligator.png'
import alligator2 from '../alligator2.png'
import './Home.css'; 

export default function Home(){
    return(
        <div className="container">
            <div className = "titlecontainer">
                <h1 className="title">Connect with your fellow Gators to improve the Campus</h1>
                <h2 className="subtitle">Voice campus concerns through CampusConnect!</h2>
                <Link to="/feed" style={{justifyContent:'center',alignContent:'center',alignItems:'center',display:'flex'}}>
                    <button className='home-button'>Get Started</button>
                </Link>
                <img src={alligator2} alt="gator" height={250}/>
            </div>
            <div className = "titlecontainer">
                <h2 className="subtitle">Mission Statement:</h2>
                <p className="description">Welcome to CampusConnect, where your voice matters. Share your concerns and ideas on our platform to directly influence the decisions made by SFSU's student government. Let's create a positive change on our campus together!</p>
                <h2 className="subtitle">Our Goals:</h2>
                <p className="description">1. Facilitate Communication: Our platform allows students to openly express their concerns and ideas, fostering open and transparent communication between the student body and the campus's student government.</p >
                <p className="description">2. Empower Student Body: Encourage active participation and engagement from the SFSU student body by providing a platform where their voices are heard and where they can directly inform the decision-making process.</p>
                <p className="description"> 3. Drive Positive Change: Harness the collective input of students to drive positive changes and improvements on campus.</p>
            </div>
        </div>
    );
}