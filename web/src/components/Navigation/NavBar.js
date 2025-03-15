import React from 'react';
import { Link } from 'react-router-dom';
//import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import SettingsIcon from '@mui/icons-material/Settings';
import "./navBar.css";
import Logo from '../../images/03102.png';


export default function NavBar() {
  return (
    <div className='navBarBox'>
      <div className='navBarLeft'>
        <span className='logo'>Home Automation</span>
        <img src={Logo} alt="Logo" className='navBarLogo' />
      </div>
      <div className='navBarCenter'>
      </div>
      <div className='navBarRight'>
        <div className='navBarLinks'>
          <Link to="/" className='navBarLink'>HomePage</Link>
          <Link to="/about" className='navBarLink'>About</Link>
        </div>
        
      </div>
    </div>
  );
}
