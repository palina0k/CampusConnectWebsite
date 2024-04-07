import React from 'react';
import { Link } from 'react-router-dom';
import './FloatingButton.css';

function FloatingButton() {
  return (
    <Link to="/post" className="floating-button">
        Add Post
    </Link>
  );
}

export default FloatingButton;