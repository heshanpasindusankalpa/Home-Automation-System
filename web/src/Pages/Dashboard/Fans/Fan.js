import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './fans.css'; // Create and customize CSS for Fan page
import LeftPane from '../../../components/LeftPane/LeftPane';
import FanI from '../../../images/fan2.webp';

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

  return (
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
                <img src={FanI} />
                <p>{fan.name}</p>
              </div>
            ))
          ) : (
            <p>No fans found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Fan;

