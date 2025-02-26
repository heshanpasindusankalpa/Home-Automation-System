import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './light.css'; 
import LeftPane from '../../../components/LeftPane/LeftPane';
import LightOn from '../../../images/light_off.PNG';
import LightOff from '../../../images/light_on.PNG';
import Dnavbar from '../../../components/DashNavigation/Dnavbar';

const Light = () => {
  const [lights, setLights] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/components')
      .then((response) => {
        const lightComponents = response?.data?.response.filter(
          (component) => component.type === 'light'
        );
        setLights(lightComponents || []);
      })
      .catch(() => {
        alert('Failed to fetch lights. Please try again later.');
      });
  }, []);

  const toggleLight = (id, currentStatus) => {
    const newStatus = currentStatus === 'on' ? 'off' : 'on';
    Axios.put('http://localhost:3001/api/updatecomponent', { id, status: newStatus })

      .then(() => {
        setLights((prevLights) => 
          prevLights.map((light) =>
            light.id === id ? { ...light, status: newStatus } : light
          )
        );
      })
      .catch((error) => {
        alert(`Failed to update light status. Please try again later. Error: ${error.message}`);
      });
  };

  return (
    <div>
      <div>
        <Dnavbar/>
      </div>
    <div className="light-page">
    <div className="leftPaneContainer2">
  <LeftPane />
</div>
<div className="main-content2">
  <h2>Lights</h2>
  <div className="components-list2">
    {lights.length > 0 ? (
      lights.map((light) => (
        <div key={light.id} className="light-item">
          <img src={light.status === 'on' ? LightOn : LightOff} alt={light.name} />
          <p>{light.name}</p>
          <button 
  onClick={() => toggleLight(light.id, light.status)}
  className={light.status === 'on' ? 'btn-on' : 'btn-off'}
>
  {light.status === 'on' ? 'Off' : 'On'}
</button>

          
        </div>
      ))
    ) : (
      <p>No lights found</p>
    )}
  </div>
</div>
    </div>
    </div>
  );
};

export default Light;
