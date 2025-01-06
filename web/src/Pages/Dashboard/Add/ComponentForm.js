import React, { useState, useEffect } from 'react';
import './componentform.css';

const ComponentForm = ({ addComponent, updateComponent, data, isEdit }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('off');

  useEffect(() => {
    if (data?.id) {
      setId(data.id);
      setName(data.name);
      setType(data.type);
      setStatus(data.status);
    }
  }, [data]);

  const handleSubmit = () => {
    if (id && name && type) {
      const payload = { id, name, type, status };
      isEdit ? updateComponent(payload) : addComponent(payload);
      setId('');
      setName('');
      setType('');
      setStatus('off');
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div>
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
        <option value="other">Other</option>
      </select>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="off">Off</option>
        <option value="on">On</option>
      </select>
      <button onClick={handleSubmit}>{isEdit ? 'Update' : 'Add'}</button>
    </div>
  );
};

export default ComponentForm;
