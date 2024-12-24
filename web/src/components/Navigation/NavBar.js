import React from 'react'
//import SearchIcon from '@mui/icons-material/Search';
//import PersonIcon from '@mui/icons-material/Person';
//import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
//import SettingsIcon from '@mui/icons-material/Settings';
import "./navBar.css"

export default function NavBar() {
  return (
    
    <div className='navBarBox'>
      <div className='navBarLeft'><span className='logo'>Home Automation</span></div>
      <div className='navBarCenter'>
        <div className='searchBarBox'>
           
            <input placeholder="Search" className='searchInput'/>
        </div>
      </div>
      <div className='navBarRight'>
        <div className='navBarLinks'>
          <span className='navBarLink'>HomePage</span>
          <span className='navBarLink'>DashBoard</span>
          <span className='navBarLink'>About</span>
        </div>
        <div className='navBarIcons'>
          <div className='navBarIcon'>
          
          </div>
          <div className='navBarIcon'>
          
          </div>
          <div className='navBarIcon'>
          
          </div>
          

        </div>
      </div>
    </div>
  )
}
