import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './universal/Navbar';
import Home from './pages/Home';
import Feed from './pages/Feed';
import Posting from './pages/Posting';
import Footer from './universal/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Router>
          <Navbar/>
          <div className="App">
            <Routes>
              <Route path='/' element= {<Home/>}/>
              <Route path='/feed' element={<Feed/>}/>
              <Route path='/post' element={<Posting/>}/>
            </Routes>
          </div>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;