import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './fans.css'; 
import LeftPane from '../../../components/LeftPane/LeftPane';
import Fanon from '../../../images/fan_on.gif';
import Fanoff from '../../../images/fan_off.png';
import Dnavbar from '../../../components/DashNavigation/Dnavbar';

const Fan = () => {
  const [fans, setFans] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/components')
      .then((response) => {
        const fanComponents = response?.data?.response.filter(
          (component) => component.type === 'fan'
        );
        setFans(fanComponents || []);
      })
      .catch(() => {
        alert('Failed to fetch fans. Please try again later.');
      });
  }, []);

  const toggleFan = (id, currentStatus) => {
    const newStatus = currentStatus === 'on' ? 'off' : 'on';
    Axios.put('http://localhost:3001/api/updatecomponent', { id, status: newStatus })
      .then(() => {
        setFans((prevFans) => 
          prevFans.map((fan) =>
            fan.id === id ? { ...fan, status: newStatus } : fan
          )
        );
      })
      .catch((error) => {
        alert(`Failed to update fan status. Please try again later. Error: ${error.message}`);
      });
  };

  return (
    <div>
      <div>
        <Dnavbar/>
      </div>
      <div className="fan-page">
        <div className="leftPaneContainer1">
          <LeftPane />
        </div>
        <div className="main-content1">
          <h2>Fans</h2>
          <div className="components-list">
            {fans.length > 0 ? (
              fans.map((fan) => (
                <div key={fan.id} className="fan-item">
                  <img 
                    src={fan.status === 'on' ? Fanon : Fanoff} 
                    alt={fan.name} 
                  />
                  <p>{fan.name}</p>
                  <button 
                    onClick={() => toggleFan(fan.id, fan.status)}
                    className={fan.status === 'on' ? 'btn-off' : 'btn-on'}
                  >
                    {fan.status === 'on' ? 'Off' : 'On'}
                  </button>
                </div>
              ))
            ) : (
              <p>No fans found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fan;
