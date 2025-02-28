import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import SettingsIcon from '@mui/icons-material/Settings';
import Logo from '../../images/0107.png';
import './Dnavbar.css';

export default function Dnavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); 
  const [navTabs, setNavTabs] = useState(['Kitchen', 'Living Room', 'Bedroom']);

  return (
    <div className='navBarBox'>
      <div className='navBarLeft'>
        
        <Link to="/" className='navBarLink'>Home</Link>
      </div>
      
      <div className='navBarCenter'>
        {isLoggedIn ? (
          <div className='navBarLinks'>
            {navTabs.map((tab, index) => (
              <Link to={`/${tab.toLowerCase()}`} className='navBarLink' key={index}>
                {tab}
              </Link>
            ))}
          </div>
        ) : (
          <div className='navBarLinks'>
            <Link to="/" className='navBarLink'>HomePage</Link>
            <Link to="/about" className='navBarLink'>About</Link>
          </div>
        )}
      </div>
      
      {isLoggedIn && (
        <div className='navBarRight'>
          <div className='navBarIcons'>
            <div className='navBarIcon'><PersonIcon/></div>
            <div className='navBarIcon'><ContactPhoneIcon/></div>
            <div className='navBarIcon'><SettingsIcon/></div>
          </div>
        </div>
      )}
    </div>
  );
}
