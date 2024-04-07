import React, { useState, useEffect } from 'react';
import FloatingButton from './FloatingButton';
import './Feed.css';

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

  return (
    <div className="feed">
      <div className="feed-container">
        <h1>Campus Connect Feed</h1>
        <PostFeed posts={posts} />
        <FloatingButton />
      </div>
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
