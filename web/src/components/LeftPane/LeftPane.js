import React from 'react';
import './leftPane.css';
import GridViewIcon from '@mui/icons-material/GridView';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import TapAndPlayIcon from '@mui/icons-material/TapAndPlay';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link, useNavigate } from 'react-router-dom';
import LogoL from "../../images/0107.png"

export default function LeftPane() {
  const navigate = useNavigate();
  return (
    <div className='leftPaneBox'>
      <div className='leftPaneContainer'>
        {/* Add an image at the top */}
        <div className="leftPaneLogo">
          <img 
            src={LogoL}
            alt="Logo" 
            className="sidebarLogo"
          />
        </div>
        <div className='leftPaneMenu'>
          <div className='leftPaneMenuItem'>
            <GridViewIcon className='OverallIcon' />
            <span className='overall' onClick={() => navigate('/dashboard')}>Dashboard</span>
          </div>
          <div className='leftPaneMenuItem'>
            <TapAndPlayIcon className='addIcon' />
            <span className='addText' onClick={() => navigate('/add')}>Add</span>
          </div>
          <div className='leftPaneMenuItem'>
            <LightbulbIcon className='lightIcon' />
            <span className='lights' onClick={() => navigate('/Lights')}>Lights</span>
          </div>
          <div className='leftPaneMenuItem'>
            <NotificationsIcon className='OverallIcon' />
            <span className='overall' onClick={() => navigate('/Fan')}>Fans</span>
          </div>
          <div className='leftPaneMenuItem'>
            <LightbulbIcon className='CameralIcon' />
            <span className='cameras' onClick={() => navigate('/camera')}>Cameras</span>
          </div>
          <div className='leftPaneMenuItem'>
            <GridViewIcon className='OverallIcon' />
            <span className='overall'>Other Devices</span>
          </div>
        </div>
      </div>
    </div>
  );
}
