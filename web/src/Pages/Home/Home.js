import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import Slider from "react-slick";
import './home.css';
import lightControlImage from '../../images/BaloonLight.webp';
import temperatureImage from '../../images/weather.gif';
import securityImage from '../../images/camera_on.jpg';
import sliderImage1 from '../../images/slider1.jpg';
import sliderImage2 from '../../images/slider2.jpg';
import sliderImage3 from '../../images/slider4.webp';
import bottomImage from '../../images/smarthome7.gif'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NavBar from '../../components/Navigation/NavBar';
import fb from '../../images/fb.png';
import twitter from '../../images/twitter.png';
import linkedin from '../../images/linkedin.png';
import inst from '../../images/inst.png';
import { Link } from 'react-router-dom';

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
    <div>
      <NavBar />
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
          <motion.div className="feature" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <img src={lightControlImage} alt="Light Control" className="feature-icon" />
            <h3>Light Control</h3>
            <p>Manage your home lighting with a single tap.</p>
          </motion.div>
          <motion.div className="feature" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <img src={temperatureImage} alt="Temperature Control" className="feature-icon" />
            <h3>Temperature Monitoring</h3>
            <p>Stay comfortable by monitoring and controlling temperature.</p>
          </motion.div>
          <motion.div className="feature" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <img src={securityImage} alt="Security Control" className="feature-icon" />
            <h3>Home Security</h3>
            <p>Ensure your home is safe and secure at all times.</p>
          </motion.div>
        </div>

        <div className="bottom-image-section">
          <img src={bottomImage} alt="Bottom" className="bottom-image" />
          <div className="iot-text-overlay">
            <p>IoT Tech Details: Smart Home Automation, Real-Time Monitoring, Energy Efficiency</p>
          </div>
        </div>


    <div className='footer'>
      <div className='sb_footer section_padding'>
        <div className='sb_footer_links'>
          <div className='sb_footer_links_div'>
            <h4>Products</h4>
            <Link to='/smart-lighting'><p>Smart Lighting</p></Link>
            <Link to='/security-systems'><p>Security Systems</p></Link>
            <Link to='/climate-control'><p>Climate Control</p></Link>
            <Link to='/voice-control'><p>Voice Control</p></Link>
          </div>
          <div className='sb_footer_links_div'>
            <h4>Support</h4>
            <Link to='/faq'><p>FAQs</p></Link>
            <Link to='/installation'><p>Installation Guides</p></Link>
            <Link to='/customer-service'><p>Customer Support</p></Link>
          </div>
          <div className='sb_footer_links_div'>
            <h4>Company</h4>
            <Link to='/about'><p>About Us</p></Link>
            <Link to='/partners'><p>Our Partners</p></Link>
            <Link to='/career'><p>Careers</p></Link>
            <Link to='/contact'><p>Contact</p></Link>
          </div>
          <div className='sb_footer_links_div'>
            <h4>Resources</h4>
            <Link to='/blog'><p>Blog</p></Link>
            <Link to='/case-studies'><p>Case Studies</p></Link>
            <Link to='/smart-home-tips'><p>Smart Home Tips</p></Link>
          </div>
        </div>

        <div className='socialmedia'>
          <img src={fb} alt="Facebook" />
          <img src={twitter} alt="Twitter" />
          <img src={linkedin} alt="LinkedIn" />
          <img src={inst} alt="Instagram" />
        </div>
      </div>

      <hr />

      <div className='sb_footer-below'>
        <p>©{new Date().getFullYear()} SmartHomeTech. All rights reserved.</p>
        <div className='sb_footer-below-links'>
          <Link to='/terms'>Terms & Conditions</Link>
          <Link to='/privacy'>Privacy Policy</Link>
          <Link to='/security'>Security</Link>
          <Link to='/cookie'>Cookie Policy</Link>
        </div>
      </div>
    </div>
      </motion.div>
    </div>
  );
}
