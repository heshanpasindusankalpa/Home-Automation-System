import React, { useState, useEffect } from 'react';
import './componentform.css';

const ComponentForm = ({ addComponent, updateComponent, data, isEdit }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [place, setPlace] = useState('');
  const [status, setStatus] = useState('off');

  useEffect(() => {
    if (data?.id) {
      setId(data.id);
      setName(data.name);
      setType(data.type);
      setPlace(data.place); // Added for 'place'
      setStatus(data.status);
    }
  }, [data]);

  const handleSubmit = () => {
    if (id && name && type && place) {
      const payload = { id, name, type, place, status };
      isEdit ? updateComponent(payload) : addComponent(payload);
      setId('');
      setName('');
      setType('');
      setPlace(''); // Reset place
      setStatus('off');
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="form-container">
      <h1>{isEdit ? 'Edit Component' : 'Add Component'}</h1>
      <input
        type="number"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="" disabled>Select Type</option>
        <option value="fan">Fan</option>
        <option value="light">Light</option>
        <option value="camera">Camera</option>
        <option value="other">Other</option>
      </select>
     
      <input
        type="text"
        placeholder="Place"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="off">Off</option>
        <option value="on">On</option>
      </select>
      <button className="button2" onClick={handleSubmit}>{isEdit ? 'Update' : 'Add'}</button>
    </div>
  );
};

export default ComponentForm;
