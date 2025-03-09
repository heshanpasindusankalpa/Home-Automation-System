import React from 'react';
import './about.css';
import NavBar from '../../components/Navigation/NavBar';

export default function About() {
  return (
    <div className="about-container">
      <NavBar />
      <div className="about-header">
        <h1>About Home Automation</h1>
        <p>Making your home smarter and your life easier!</p>
      </div>
      <div className="about-content">
        <p>
          Our home automation system integrates cutting-edge technology to provide seamless control over your home devices.
          With real-time temperature monitoring and the ability to control your lights remotely, our system ensures convenience,
          energy efficiency, and security.
        </p>
        <p>
          This project is built using modern web technologies like React.js for the frontend, Node.js for the backend, 
          and MongoDB for managing device data. The ESP32 microcontroller connects your physical devices to the cloud,
          enabling real-time updates and actions.
        </p>
        <p>
          Join us in transforming homes into smart living spaces. Experience the future of home automation today!
        </p>
      </div>
    </div>
  );
}
