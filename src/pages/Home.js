import React from 'react';
import { Link } from 'react-router-dom';
// import alligator from '../alligator.png'
import alligator2 from '../alligator2.png'
import alligator3 from '../alligator3.png'
import alligator4 from '../alligator4.png'
import './Home.css'; 

export default function Home(){
    return(
        <div>
        <div className="container">
            <div className = "titlecontainer">
                <h1 className="title">Connect with your fellow Gators to improve the Campus</h1>
                <h2 className="subtitle">Voice campus concerns through CampusConnect!</h2>
                <Link to="/login" style={{justifyContent:'center',alignContent:'center',alignItems:'center',display:'flex'}}>
                    <button className='home-button'>Get Started</button>
                </Link>
                <img src={alligator2} alt="gator" height={250}/>
            </div>
            
        
        <div className = "secondarycontainer">
                <div className='leftbox' style={{width:400, justifyContent:'flex-start'}}>
                    <h2 className="subtitle2">Mission Statement:</h2>
                    <p className="description">Welcome to CampusConnect, where your voice matters. Share your concerns and ideas on our platform to directly influence the decisions made by SFSU's student government. Let's create a positive change on our campus together!</p>
                </div>
                <div className='rightbox'>
                    <img src={alligator3} alt="gator" height={350}/>
                </div>
            </div>
            <div className = "secondarycontainer">
                <div className='leftbox'>
                    <img src={alligator4} alt="gator" height={400}/>
                </div>
                <div className='rightbox' style={{width:500, justifyContent:'flex-start'}}>
                    <h2 className="subtitle2">Our Goals:</h2>
                    <p className="description"><b>Facilitate Communication: </b>Our platform allows students to openly express their concerns and ideas, fostering open and transparent communication between the student body and the campus's student government.</p >
                    <p className="description"><b>Empower Student Body: </b>Encourage active participation and engagement from the SFSU student body by providing a platform where their voices are heard and where they can directly inform the decision-making process.</p>
                    <p className="description"><b>Drive Positive Change: </b>Harness the collective input of students to drive positive changes and improvements on campus.</p>
                </div>
            </div>
            </div>
        </div>
    );
}