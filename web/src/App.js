import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navigation/NavBar'; // Adjust path if necessary
import HomePage from './Pages/Home/Home'; // Adjust path if necessary
import Dashboard from './Pages/Dashboard/Dashboard'; // Adjust path if necessary
import Add from './Pages/Dashboard/Add/Users';
import Login from './Pages/Login/Login';
import About from './Pages/About/About';


export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={< Add/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/about" element={<About/>} />
       
        
      </Routes>
    </Router>
  );
}

