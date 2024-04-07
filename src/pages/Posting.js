import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Posting.css';

function Posting(){
const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [tag, setTag] = useState('safety'); // Default tag
  const navigate = useNavigate();

  const handlePost = () => {
    if (!title.trim() || !text.trim()) return;
    const newPost = {
      id: Date.now(),
      title: title.trim(),
      text: text.trim(),
      tag: tag
    };
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    localStorage.setItem('posts', JSON.stringify([...storedPosts, newPost]));
    setTitle('');
    setText('');
    setTag('Tag your post'); 
    navigate('/feed'); 
  };

  return (
    <div className="field">
        <div className="posting-container">
            <h1>Create a New Post</h1>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="post-input" />
            <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="What's on your mind?" className="post-textarea" />
            <select value={tag} onChange={(e) => setTag(e.target.value)} className="post-select">
              <option value="safety">Safety</option>
              <option value="tech">Tech</option>
              <option value="social">Social</option>
            </select>
            <button className="post-button" onClick={handlePost}>Post</button>
        </div>
    </div>
  );
}

export default Posting;