import React from 'react'
import "./leftPane.css"
import GridViewIcon from '@mui/icons-material/GridView'; 
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import TapAndPlayIcon from '@mui/icons-material/TapAndPlay';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link, useNavigate } from 'react-router-dom';

export default function LeftPane() {
  const Navigate=useNavigate();
  return (
    <div className='leftPaneBox'>
      <div className="leftPaneContainer">
        <div className="leftPaneMenu">
            <div className="leftPaneMenuItem">
              < GridViewIcon className='OverallIcon'/>
              <span className='overall'>Overall</span>

            </div>
            <div className="leftPaneMenuItem">
              < LightbulbIcon className='lightIcon'/>
              <span className='lights'>Lights</span>

            </div>
            <div className="leftPaneMenuItem">
              < TapAndPlayIcon className='addIcon'/>
              <span className='addText' onClick={()=> Navigate("/add")}>Add</span>
              
            </div>
            <div className="leftPaneMenuItem">
              < NotificationsIcon className='OverallIcon'/>
              <span className='overall'>Notifications</span>

            </div>
            <div className="leftPaneMenuItem">
              < GridViewIcon className='OverallIcon'/>
              <span className='overall'>Overall</span>

            </div>
        </div>
      </div>
    </div>
  )
}
