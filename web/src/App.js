import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navigation/NavBar'; // Adjust path if necessary
import HomePage from './Pages/Home/Home'; // Adjust path if necessary
import Dashboard from './Pages/Dashboard/Dashboard'; // Adjust path if necessary
import Add from './Pages/Dashboard/Add/Users';
import Login from './Pages/Login/Login';
import About from './Pages/About/About';
import Light from './Pages/Dashboard/Lights/Light';
import Fan from './Pages/Dashboard/Fans/Fan';
import Camera from './Pages/Dashboard/Cameras/Camera';
import LeftPane from './components/LeftPane/LeftPane';
import Other from './Pages/Dashboard/Other/Other';


import Kitchen from './Pages/Dashboard/Place/Kitchen';
import { Bathroom } from '@mui/icons-material';
import BedRoom from './Pages/Dashboard/Place/Bed Room/BedRoom';
import BathRoom from './Pages/Dashboard/Place/BathRoom/BathRoom';
import LivingRoom from './Pages/Dashboard/Place/LivingRoom/LivingRoom';



export default function App() {
  return (
    <Router>
    
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={< Add/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/Lights" element={<Light/>}/>
        <Route path="/Fan" element={<Fan/>}/>
        <Route path="/camera" element={<Camera/>}/>     
        <Route path="/other" element={<Other/>}/>  
        <Route path="/kitchen" element={<Kitchen/>}/>     
        <Route path="/bed" element={<BedRoom/>}/>  
        <Route path="/bath" element={<BathRoom/>}/>  
        <Route path="/living" element={<LivingRoom/>}/>  
    
      </Routes>
    </Router>
  );
}

