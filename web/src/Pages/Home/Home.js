import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import Slider from "react-slick";
import './home.css';
import lightControlImage from '../../images/light-control.webp';
import temperatureImage from '../../images/temperature.jpeg';
import securityImage from '../../images/security.jpg';
import sliderImage1 from '../../images/slider1.jpg';
import sliderImage2 from '../../images/slider2.jpg';
import sliderImage3 from '../../images/slider3.jpg';
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
    slidesToShow: 1, // Display three images at a time
    slidesToScroll: 1, // Scroll one image at a time
    autoplay: true,
    autoplaySpeed: 3000, // Adjust autoplay speed for smooth transitions
    arrows: true, // Enable arrows for manual control
    responsive: [
      {
        breakpoint: 768, // Adjust for smaller screens
        settings: {
          slidesToShow: 1, // Show one image on small screens
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
      {/* Auto Image Slider */}
<div className="background-slider">
  <Slider {...sliderSettings}>
    <div>
      <img src={sliderImage1} alt="Slide 1" className="background-slider-image" />
    </div>
    <div>
      <img src={sliderImage2} alt="Slide 2" className="background-slider-image" />
    </div>
    <div>
      <img src={sliderImage3} alt="Slide 3" className="background-slider-image" />
    </div>
    {/* Add more images as needed */}
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
          className="cta-button"
          onClick={handleGetStartedClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get Started
        </motion.button>
      </motion.div>
      
      {/* Auto Image Slider */}
      {/* Auto Image Slider */}

      
      <div className="features-section">
        <motion.div 
          className="feature"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={lightControlImage} alt="Light Control" className="feature-icon" />
          <h3>Light Control</h3>
          <p>Manage your home lighting with a single tap.</p>
        </motion.div>
        <motion.div 
          className="feature"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={temperatureImage} alt="Temperature Control" className="feature-icon" />
          <h3>Temperature Monitoring</h3>
          <p>Stay comfortable by monitoring and controlling temperature.</p>
        </motion.div>
        <motion.div 
          className="feature"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={securityImage} alt="Security Control" className="feature-icon" />
          <h3>Home Security</h3>
          <p>Ensure your home is safe and secure at all times.</p>
        </motion.div>
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
