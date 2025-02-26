import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dnavbar.css';
export default function Dnavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Change to false for guest view
  const [showModal, setShowModal] = useState(false);
  const [newTabName, setNewTabName] = useState('');
  const [navTabs, setNavTabs] = useState(['Kitchen', 'Living Room', 'Bedroom']);

  const handleAddTab = () => {
    if (newTabName) {
      setNavTabs([...navTabs, newTabName]);
      setNewTabName('');
      setShowModal(false);
    }
  };

  return (
    <div className='navBarBox'>
      <div className='navBarLeft'>
        <span className='Nlogo'></span>
      </div>
      
      <div className='navBarCenter'>
        {isLoggedIn ? (
          <div className='navBarLinks'>
            {navTabs.map((tab, index) => (
              <Link to={`/${tab.toLowerCase()}`} className='navBarLink' key={index}>
                {tab}
              </Link>
            ))}
          </div>
        ) : (
          <div className='navBarLinks'>
            <Link to="/" className='navBarLink'>HomePage</Link>
            <Link to="/about" className='navBarLink'>About</Link>
          </div>
        )}
      </div>
      
      {isLoggedIn && (
        <div className='navBarRight'>
          <button className='addButton' onClick={() => setShowModal(true)}>Add</button>
        </div>
      )}

      {showModal && (
        <div className='modal'>
          <div className='modalContent'>
            <h3>Add New Tab</h3>
            <input 
              type='text' 
              value={newTabName} 
              onChange={(e) => setNewTabName(e.target.value)} 
              placeholder='New tab name' 
            />
            <button onClick={handleAddTab}>Add Tab</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

