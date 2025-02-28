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
    <div className='DnavBarBox'>
      <div className='DnavBarLeft'>
        <Link to="/" className='DnavBarHome'>Home</Link>
      </div>
      
      <div className='DnavBarCenter'>
        {isLoggedIn ? (
          <div className='DnavBarLinks'>
            {navTabs.map((tab, index) => (
              <Link to={`/${tab.toLowerCase()}`} className='DnavBarLink' key={index}>
                {tab}
              </Link>
            ))}
          </div>
        ) : (
          <div className='DnavBarLinks'>
            <Link to="/" className='DnavBarLink'>HomePage</Link>
            <Link to="/about" className='DnavBarLink'>About</Link>
          </div>
        )}
      </div>
      
      {isLoggedIn && (
        <div className='DnavBarRight'>
          <div className='DnavBarIcons'>
            <div className='DnavBarIcon'><PersonIcon/></div>
            <div className='DnavBarIcon'><ContactPhoneIcon/></div>
            <div className='DnavBarIcon'><SettingsIcon/></div>
          </div>
        </div>
      )}
    </div>
  );
}
