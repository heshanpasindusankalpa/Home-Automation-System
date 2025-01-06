import React from 'react';
import { Link } from 'react-router-dom';
//import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import SettingsIcon from '@mui/icons-material/Settings';
import "./navBar.css";

export default function NavBar() {
  return (
    <div className='navBarBox'>
      <div className='navBarLeft'><span className='logo'>Home Automation</span></div>
      <div className='navBarCenter'>
     
      </div>
      <div className='navBarRight'>
        <div className='navBarLinks'>
          <Link to="/" className='navBarLink'>HomePage</Link>
         
          <Link to="/about" className='navBarLink'>About</Link>
          
        </div>
        <div className='navBarIcons'>
          <div className='navBarIcon'><PersonIcon/></div>
          <div className='navBarIcon'><ContactPhoneIcon/></div>
          <div className='navBarIcon'><SettingsIcon/></div>
        </div>
      </div>
    </div>
  );
}
