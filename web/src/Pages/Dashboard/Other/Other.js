import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './other.css'; 
import LeftPane from '../../../components/LeftPane/LeftPane';
import Dnavbar from '../../../components/DashNavigation/Dnavbar';

const Other = () => {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/components')
      .then((response) => {
        const otherComponents = response?.data?.response.filter(
          (component) => component.type === 'other'
        );
        setComponents(otherComponents || []);
      })
      .catch(() => {
        alert('Failed to fetch other components. Please try again later.');
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

  const generateImageUrl = (componentName) => {
    // Example API call to an AI image generator
    return `https://api.dalle.ai/generate?prompt=${encodeURIComponent(componentName)}`;
  };

  return (
    <div>
      <Dnavbar />
      <div className="other-page">
        <div className="leftPaneContainer">
          <LeftPane />
        </div>
        <div className="main-content">
          <h2>Other Components</h2>
          <div className="components-list">
            {components.length > 0 ? (
              components.map((component) => (
                <div key={component.id} className="component-item">
                  <img 
                    src={generateImageUrl(component.name)} 
                    alt={component.name} 
                    className="component-image" 
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
              <p>No components found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Other;
