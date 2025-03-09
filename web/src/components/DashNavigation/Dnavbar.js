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
        <Link to="Dashboard/Place/place" className='DnavBarHome'>Home</Link>
        
      </div>

      <div className='DnavBarCenter'>
        
        <span className='DnavBarHome' onClick={() => navigate('/place')}>Kitchen</span>
      </div>

      
      
    
    </div>
  );
}
