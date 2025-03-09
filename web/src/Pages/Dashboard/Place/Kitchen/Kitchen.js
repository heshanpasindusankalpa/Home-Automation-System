import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './light.css'; 
import LeftPane from '../../../../components/LeftPane/LeftPane';
import LightOn from '../../../images/light_off.PNG';
import LightOff from '../../../images/light_on.PNG';
import Dnavbar from '../../../../components/DashNavigation/Dnavbar';

const Kitchen = () => {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/components')
      .then((response) => {
        const kitchenComponents = response?.data?.response.filter(
          (component) => component.place === 'Kitchen' // Filter by place
        );
        setComponents(kitchenComponents || []);
      })
      .catch(() => {
        alert('Failed to fetch kitchen components. Please try again later.');
      });
  }, []);

  const toggleComponent = (id, currentStatus) => {
    const newStatus = currentStatus === 'on' ? 'off' : 'on';
    Axios.put('http://localhost:3001/api/updatecomponent', { id, status: newStatus })
      .then(() => {
        setComponents((prevComponents) => 
          prevComponents.map((component) =>
            component.id === id ? { ...component, status: newStatus } : component
          )
        );
      })
      .catch((error) => {
        alert(`Failed to update component status. Error: ${error.message}`);
      });
  };

  return (
    <div>
      <Dnavbar />
      <div className="light-page">
        <div className="leftPaneContainer2">
          <LeftPane />
        </div>
        <div className="main-content2">
          <h2>Kitchen Devices</h2>
          <div className="components-list2">
            {components.length > 0 ? (
              components.map((component) => (
                <div key={component.id} className="light-item">
                  <img 
                    src={component.status === 'off' ? LightOn : LightOff} 
                    alt={component.name} 
                  />
                  <p>{component.name}</p>
                  <button 
                    onClick={() => toggleComponent(component.id, component.status)}
                    className={component.status === 'on' ? 'btn-off' : 'btn-on'}
                  >
                    {component.status === 'on' ? 'Off' : 'On'}
                  </button>
                </div>
              ))
            ) : (
              <p>No devices found in the Kitchen</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kitchen;