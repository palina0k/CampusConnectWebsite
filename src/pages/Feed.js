import React, { useState, useEffect } from 'react';
import FloatingButton from './FloatingButton';
import './Feed.css';
import { useNavigate } from "react-router-dom";
import SignIn from '../googleSignin/signin';

function Feed() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const[isLoggedIn,setIsLoggedIn]=useState(true)
  const SignUpUsingGoogle = ()=> {
    setIsLoggedIn(true)
    console.log("SignUpUsingGoogle")
  }
  const Logout = ()=> {
    setIsLoggedIn(false)
    console.log("Logout")
  }
  const logout =()=>{
    localStorage.clear()
    window.location.reload()
    navigate("/login");
  }

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
      {!isLoggedIn && <SignIn/>}
      {isLoggedIn && 
      <div className="feed">
        <div className="feed-container">
          <h1>Campus Connect Feed</h1>
          <a href="/login">
            <button onClick={logout}>Logout</button>
          </a>
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
          <p>Tag: {post.tag}</p>
        </div>
      ))}
    </div>
  );
}

export default Feed;
