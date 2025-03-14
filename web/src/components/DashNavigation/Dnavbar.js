import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dnavbar.css';

export default function Dnavbar() {
  const navigate = useNavigate();

  return (
    <div className="DnavBarBox">
      {/* Left Section */}
      <div className="DnavBarLeft">
        <span className="DnavBarHome" onClick={() => navigate('/')}>Home</span>
        <span className="DnavBarHome" onClick={() => navigate('/dashboard')}>Dashboard</span>
      </div>

      {/* Center Section */}
      <div className="DnavBarCenter">
        <span className="DnavBarHome" onClick={() => navigate('/living')}>Living Room</span>
        <span className="DnavBarHome" onClick={() => navigate('/kitchen')}>Kitchen</span>
        <span className="DnavBarHome" onClick={() => navigate('/bath')}>Bathroom</span>
        <span className="DnavBarHome" onClick={() => navigate('/bed')}>Bedroom</span>
      </div>
    </div>
  );
}
