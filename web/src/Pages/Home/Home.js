import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import Slider from "react-slick";
import './home.css';
import lightControlImage from '../../images/BaloonLight.webp';
import temperatureImage from '../../images/weather.gif';//temperature.jpeg
import securityImage from '../../images/camera_on.jpg';
import sliderImage1 from '../../images/slider1.jpg';
import sliderImage2 from '../../images/slider2.jpg';
import sliderImage3 from '../../images/slider4.webp';
import bottomImage from '../../images/smarthome7.gif'; // Import the new bottom image
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/login');
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 4100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <motion.div 
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="background-slider">
        <Slider {...sliderSettings}>
          <div className="slide">
            <img src={sliderImage2} alt="Slide 1" className="background-slider-image" />
            <div className="slide-text">Welcome to Our Smart Home</div>
          </div>
          <div className="slide">
            <img src={sliderImage1} alt="Slide 2" className="background-slider-image" />
            <div className="slide-text">Experience the Future of Living</div>
          </div>
          <div className="slide">
            <img src={sliderImage3} alt="Slide 3" className="background-slider-image" />
            <div className="slide-text">Connect and Control with Ease</div>
          </div>
        </Slider>
      </div>

      <motion.div 
        className="hero-section"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="title">Welcome to Smart Home Automation</h1>
        <p className="subtitle">Control your home devices with ease and efficiency.</p>
        <motion.button
          className="cta-button glow"
          onClick={handleGetStartedClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get Started
        </motion.button>
      </motion.div>

      <div className="features-section">
        <div 
          className="feature"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={lightControlImage} alt="Light Control" className="feature-icon" />
          <h3>Light Control</h3>
          <p>Manage your home lighting with a single tap.</p>
        </div>
        <div 
          className="feature"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={temperatureImage} alt="Temperature Control" className="feature-icon" />
          <h3>Temperature Monitoring</h3>
          <p>Stay comfortable by monitoring and controlling temperature.</p>
        </div>
        <div 
          className="feature"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={securityImage} alt="Security Control" className="feature-icon" />
          <h3>Home Security</h3>
          <p>Ensure your home is safe and secure at all times.</p>
        </div>
      </div>


      {/* Add the new section for the bottom image */}
      <div className="bottom-image-section">
  <img src={bottomImage} alt="Bottom" className="bottom-image" />
  <div className="iot-text-overlay">
    <p>IoT Tech Details: Smart Home Automation, Real-Time Monitoring, Energy Efficiency</p>
  </div>
</div>

      <motion.div
        className="extra-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <h2>How It Works</h2>
        <p>Our system connects all your devices for seamless control.</p>
      </motion.div>

      
    </motion.div>
  );
}
