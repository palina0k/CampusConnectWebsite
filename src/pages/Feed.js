import React, { useState, useEffect } from 'react';
import FloatingButton from './FloatingButton';
import './Feed.css';
// import { useNavigate } from "react-router-dom";
// import SignIn from '../googleSignin/signin';
import {signInWithPopup,GoogleAuthProvider,signOut,onAuthStateChanged} from "firebase/auth";
import { auth } from '../googleSignin/config';

function Feed() {
  const [posts, setPosts] = useState([]);
  // const navigate = useNavigate();
  const[isLoggedIn,setIsLoggedIn]=useState(false)
  const [userData, setUserData]= useState({})

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(result)=> {
      console.log({result});
      if(result){
        const {displayName,email}=result
        setUserData({displayName,email})
        setIsLoggedIn(true)
      }else{
        setIsLoggedIn(false)
      }
    })
    return ()=> unsubscribe();
  },[])



  const SignUpUsingGoogle = ()=> {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
    .then((result) => {
      const {displayName,email} = result.user;
      setUserData({displayName,email})
      setIsLoggedIn(true)
    }).catch((error) => {
      console.log({error})
    });
    
    console.log("SignUpUsingGoogle")
  }
  const Logout = ()=> {
    signOut(auth).then(() => {
      setUserData({})
      setIsLoggedIn(false)
    }).catch((error) => {
      console.log({error})
    });
    
    console.log("Logout")
  }
  // const logout =()=>{
  //   localStorage.clear()
  //   window.location.reload()
  //   navigate("/login");
  // }

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts'));
    if (storedPosts) {
      setPosts(storedPosts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  return (
    <div>
      {!isLoggedIn && 
      <div>
        <div className="signin">
              <div className="signinbox">
                  <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/90/San_Francisco_State_Athletics_Monogram.svg/800px-San_Francisco_State_Athletics_Monogram.svg.png" alt="sf_logo" width="50px"/>
                  <h2>CampusConnect</h2>
                  <h4 style={{fontWeight:'lighter'}}>Connect with your Campus</h4>
                  <h3>Sign In</h3>
                  
                    <button onClick={SignUpUsingGoogle} className='center'><img src="https://www.deliverlogic.com/wp-content/uploads/2021/04/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="google" width={20} style={{paddingRight:'5px'}}/>Sign In With Google</button>
                  
              </div>
          </div>
        
      </div>
      }
      {isLoggedIn && 
      <div className="feed">
        <div className="feed-container">
          <h1>Campus Connect Feed</h1>
          <button onClick={Logout}>Logout</button>
          <PostFeed posts={posts} />
          <FloatingButton />
        </div>
      </div>
    }
    </div>
  );
}

function PostFeed({ posts }) {
  return (
    <div className="post-feed">
      {posts.map(post => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.text}</p>
          <p>#{post.tag}</p>
        </div>
      ))}
    </div>
  );
}

export default Feed;
