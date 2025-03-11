import React, { useState } from 'react';

import PersonIcon from '@mui/icons-material/Person';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import SettingsIcon from '@mui/icons-material/Settings';
import Logo from '../../images/0107.png';
import './Dnavbar.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Dnavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); 
  const [navTabs, setNavTabs] = useState(['Kitchen', 'Living Room', 'Bedroom']);
   const navigate = useNavigate();

  return (
    <div className='DnavBarBox'>
      <div className='DnavBarLeft'>
      <span className='DnavBarHome' onClick={() => navigate('/')}>Home</span>
      <span className='DnavBarHome' onClick={() => navigate('/dashboard')}>Dash Board</span>
        
      </div>

      <div className='DnavBarCenter'>
        
        <span className='DnavBarHome' onClick={() => navigate('/living')}>Living Room</span>
        <span className='DnavBarHome' onClick={() => navigate('/kitchen')}>Kitchen</span>
        <span className='DnavBarHome' onClick={() => navigate('/bath')}>Bath Room</span>
        <span className='DnavBarHome' onClick={() => navigate('/bed')}>Bed Room</span>
      </div>

      
      
    
    </div>
  );
}
