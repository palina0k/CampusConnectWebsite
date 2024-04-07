import React from 'react';
import { useState, useEffect } from 'react';
import "./Feed.css";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts'));
    if (storedPosts) {
      setPosts(storedPosts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const addPost = (text) => {
    const newPost = {
      id: Date.now(),
      text: text
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="Table">
      <h1>CampusConnect Feed</h1>
      <PostForm addPost={addPost} />
      <PostFeed posts={posts} />
    </div>
  );
}

function PostForm({ addPost }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addPost(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea className="placeholder" value={text} onChange={(e) => setText(e.target.value)} placeholder="What's on your mind?" />
      <button className="posting-button" type="submit">Post</button>
    </form>
  );
}

function PostFeed({ posts }) {
  return (
    <div className="post-feed">
      {posts.map(post => (
        <div key={post.id} className="post">
          {post.text}
        </div>
      ))}
    </div>
  );
}

export default Feed;