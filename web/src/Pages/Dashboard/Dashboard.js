import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './dashboard.css'; // Adjust CSS path
import LeftPane from '../../components/LeftPane/LeftPane'; // Adjust path
//import Graph from '../../components/Dashboard/Graph'; // Adjust path

const socket = io('http://localhost:3000'); // Replace with your backend's URL

export default function Dashboard() {
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [lightOn, setLightOn] = useState(false);
  const [fanOn, setFanOn] = useState(false);

  useEffect(() => {
    // Listen for real-time updates
    socket.on('temperatureUpdate', (data) => setTemperature(data));
    socket.on('humidityUpdate', (data) => setHumidity(data));
    socket.on('deviceUpdate', (data) => {
      if (data.type === 'light') setLightOn(data.state);
      if (data.type === 'fan') setFanOn(data.state);
    });

    // Clean up
    return () => {
      socket.off('temperatureUpdate');
      socket.off('humidityUpdate');
      socket.off('deviceUpdate');
    };
  }, []);

  const toggleLight = () => {
    const newState = !lightOn;
    setLightOn(newState);
    socket.emit('updateDevice', { type: 'light', state: newState });
  };

  const toggleFan = () => {
    const newState = !fanOn;
    setFanOn(newState);
    socket.emit('updateDevice', { type: 'fan', state: newState });
  };

  return (
    <div className="dashboard">
      <div className="leftPane">
        <LeftPane />
      </div>
      <div className="graph">
        
      </div>
      <div className="widgets">
        <div className="widget">
          <h3>Temperature</h3>
          <p>{temperature} °C</p>
        </div>
        <div className="widget">
          <h3>Humidity</h3>
          <p>{humidity} %</p>
        </div>
        <div className="widget">
          <h3>Light</h3>
          <button className={`toggle ${lightOn ? 'on' : 'off'}`} onClick={toggleLight}>
            {lightOn ? 'Turn Off' : 'Turn On'}
          </button>
        </div>
        <div className="widget">
          <h3>Fan</h3>
          <button className={`toggle ${fanOn ? 'on' : 'off'}`} onClick={toggleFan}>
            {fanOn ? 'Turn Off' : 'Turn On'}
          </button>
        </div>
      </div>
    </div>
  );
}
