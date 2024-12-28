import React from 'react';
//import NavBar from '../../components/Navigation/NavBar';
import './home.css';

export default function Home() {
  return (
    <div className="home-container">
      
      <div className="hero-section">
        <h1 className="title">Welcome to Smart Home Automation</h1>
        <p className="subtitle">Control your home devices with ease and efficiency.</p>
        <button className="cta-button">Get Started</button>
      </div>
      <div className="features-section">
        <div className="feature">
          <img src="/images/light-control.png" alt="Light Control" className="feature-icon" />
          <h3>Light Control</h3>
          <p>Manage your home lighting with a single tap.</p>
        </div>
        <div className="feature">
          <img src="/images/temperature-control.png" alt="Temperature Control" className="feature-icon" />
          <h3>Temperature Monitoring</h3>
          <p>Stay comfortable by monitoring and controlling temperature.</p>
        </div>
        <div className="feature">
          <img src="/images/security.png" alt="Security" className="feature-icon" />
          <h3>Home Security</h3>
          <p>Ensure your home is safe and secure at all times.</p>
        </div>
      </div>
    </div>
  );
}
