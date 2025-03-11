import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Dnavbar from '../../../../components/DashNavigation/Dnavbar';
import LightOn from '../../../../images/light_on.PNG';
import LightOff from '../../../../images/light_off.PNG';
import FanOn from '../../../../images/fan_on.gif';
import FanOff from '../../../../images/fan_off.png';
import CameraOn from '../../../../images/camera_on.jpg';
import CameraOff from '../../../../images/camera_on.jpg';
import './bath.css';
import { Living } from '@mui/icons-material';

const LivingRoom = () => {
  const [kitchen, setKitchen] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/components')
      .then((response) => {
        const kitchenComponents = response?.data?.response.filter(
          (component) => component.place === 'Living Room'
        );
        setKitchen(kitchenComponents || []);
      })
      .catch(() => {
        alert('Failed to fetch kitchen components. Please try again later.');
      });
  }, []);

  const toggleKitchenComponent = (id, currentStatus) => {
    const newStatus = currentStatus === 'on' ? 'off' : 'on';
    Axios.put('http://localhost:3001/api/updatecomponent', { id, status: newStatus })
      .then(() => {
        setKitchen((prevKitchen) =>
          prevKitchen.map((item) =>
            item.id === id ? { ...item, status: newStatus } : item
          )
        );
      })
      .catch((error) => {
        alert(`Failed to update status. Please try again later. Error: ${error.message}`);
      });
  };

  const getComponentImage = (type, status) => {
    switch (type) {
      case 'light':
        return status === 'on' ? LightOn : LightOff;
      case 'fan':
        return status === 'on' ? FanOn : FanOff;
      case 'camera':
        return status === 'on' ? CameraOn : CameraOff;
      default:
        return LightOff;
    }
  };

  return (
    <div>
      <Dnavbar />
      <div className="kitchen-page">
        {/* Left Section - Lights (Top) and Cameras (Bottom) */}
        <div className="left-section">
          <div className="category">
            <h3>Lights</h3>
            <div className="components-list">
              {kitchen.filter((item) => item.type === 'light').map((item) => (
                <div key={item.id} className="item">
                  <img src={getComponentImage(item.type, item.status)} alt={item.name} />
                  <p>{item.name}</p>
                  <button onClick={() => toggleKitchenComponent(item.id, item.status)}>
                    {item.status === 'on' ? 'Off' : 'On'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="category">
            <h3>Cameras</h3>
            <div className="components-list">
              {kitchen.filter((item) => item.type === 'camera').map((item) => (
                <div key={item.id} className="item">
                  <img src={getComponentImage(item.type, item.status)} alt={item.name} />
                  <p>{item.name}</p>
                  <button onClick={() => toggleKitchenComponent(item.id, item.status)}>
                    {item.status === 'on' ? 'Off' : 'On'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - Fans (Top) and Other Devices (Bottom) */}
        <div className="right-section">
          <div className="category">
            <h3>Fans</h3>
            <div className="components-list">
              {kitchen.filter((item) => item.type === 'fan').map((item) => (
                <div key={item.id} className="item">
                  <img src={getComponentImage(item.type, item.status)} alt={item.name} />
                  <p>{item.name}</p>
                  <button onClick={() => toggleKitchenComponent(item.id, item.status)}>
                    {item.status === 'on' ? 'Off' : 'On'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="category">
  <h3>Other Devices</h3>
  <div className="components-list">
    {kitchen.filter((item) => !['light', 'fan', 'camera'].includes(item.type)).map((item) => (
      <div key={item.id} className="item">
        <p>{item.name}</p>
        <button onClick={() => toggleKitchenComponent(item.id, item.status)}>
          {item.status === 'on' ? 'Off' : 'On'}
        </button>
      </div>
    ))}
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default LivingRoom;
