import logo from './logo.svg';
import './App.css';
import {useState } from "react";
// import {
//   Routes,
//   Route,
//   useRoutes,Router,
// } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./universal/Navbar.js";
// import Home from "./pages/Home.js";
// import Feed from "./pages/Feed.js";
// import Posting from "./pages/Posting.js";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/feed' element={<Feed />}></Route>
        <Route path='/post' element={<Posting />}></Route>
      </Routes>
    </div>
  );
}

export default App;
