import React, {useEffect, useState} from "react";
import {auth,provider} from './config';
import {signInWithPopup} from "firebase/auth";
import Feed from "../pages/Feed"
import './signin.css';
import { useNavigate } from "react-router-dom";

function SignIn(){
    const [value,setValue] = useState('')
    const navigate = useNavigate();
    const handleClick=()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
            navigate("/feed");
        })
        
    }
    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })

    return(
        <div className="signin">
            
            <div className="signinbox">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/90/San_Francisco_State_Athletics_Monogram.svg/800px-San_Francisco_State_Athletics_Monogram.svg.png" alt="sf_logo" width="50px"/>
                <h2>CampusConnect</h2>
                <h4 style={{fontWeight:'lighter'}}>Connect with your Campus</h4>
                <h3>Sign In</h3>
                {value?<Feed/>:
                    <button onClick={handleClick} className="center"><img src="https://www.deliverlogic.com/wp-content/uploads/2021/04/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="google" width={20} style={{paddingRight:'5px'}}/>Continue With Google</button>
                }
            </div>
        </div>
        
    );
}
export default SignIn;