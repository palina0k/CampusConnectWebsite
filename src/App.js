import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './universal/Navbar';
import Home from './pages/Home';
import Feed from './pages/Feed';
import Posting from './pages/Posting';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/post" element={<Posting />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;