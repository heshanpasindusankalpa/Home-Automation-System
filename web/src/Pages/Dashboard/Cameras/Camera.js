import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './camera.css'; // Change the filename if needed.
import LeftPane from '../../../components/LeftPane/LeftPane';
import CameraOn from '../../../images/camera_on.jpg'; // Add camera ON image
import CameraOff from '../../../images/camera_on.jpg'; // Add camera OFF image
import Dnavbar from '../../../components/DashNavigation/Dnavbar';

const Camera = () => {
  const [cameras, setCameras] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/components')
      .then((response) => {
        const cameraComponents = response?.data?.response.filter(
          (component) => component.type === 'camera'
        );
        setCameras(cameraComponents || []);
      })
      .catch(() => {
        alert('Failed to fetch cameras. Please try again later.');
      });
  }, []);

  const toggleCamera = (id, currentStatus) => {
    const newStatus = currentStatus === 'on' ? 'off' : 'on';
    Axios.put(`http://localhost:3001/api/components/${id}`, { status: newStatus })
      .then(() => {
        setCameras((prevCameras) =>
          prevCameras.map((camera) =>
            camera.id === id ? { ...camera, status: newStatus } : camera
          )
        );
      })
      .catch((error) => {
        alert(`Failed to update camera status. Please try again later. Error: ${error.message}`);
      });
  };

  return (
    <div>
    <div>
          <Dnavbar/>
    
        </div>
    <div className="camera-page">
      <div className="leftPaneContainer2">
        <LeftPane />
      </div>
      <div className="main-content2">
        <h2>Cameras</h2>
        <div className="components-list2">
          {cameras.length > 0 ? (
            cameras.map((camera) => (
              <div key={camera.id} className="camera-item">
                <img
                  src={camera.status === 'on' ? CameraOn : CameraOff}
                  alt={camera.name}
                />
                <p>{camera.name}</p>
                <button onClick={() => toggleCamera(camera.id, camera.status)}>
                  Turn {camera.status === 'on' ? 'Off' : 'On'}
                </button>
              </div>
            ))
          ) : (
            <p>No cameras found</p>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Camera;
