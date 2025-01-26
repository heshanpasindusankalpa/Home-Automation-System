import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import ComponentForm from './ComponentForm';
import ComponentTable from './ComponentTable';
import LeftPane from '../../../components/LeftPane/LeftPane';
import './Components.css';

const Components = () => {
  const [components, setComponents] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState({});

  useEffect(() => {
    getComponents();
  }, []);

  const getComponents = () => {
    Axios.get('http://localhost:3001/api/components')
      .then((response) => {
        setComponents(response?.data?.response || []);
      })
      .catch(() => {
        alert('Failed to fetch components. Please try again later.');
      });
  };

  const addComponent = (data) => {
    Axios.post('http://localhost:3001/api/addcomponent', data)
      .then(() => {
        getComponents();
        setIsEdit(false);
      })
      .catch(() => {
        alert('Failed to add component. Please try again.');
      });
  };

  const updateComponent = (data) => {
    Axios.put('http://localhost:3001/api/updatecomponent', data)
      .then(() => {
        getComponents();
        setIsEdit(false);
      })
      .catch(() => {
        alert('Failed to update component. Please try again.');
      });
  };

  const deleteComponent = (id) => {
    Axios.delete('http://localhost:3001/api/deletecomponent', { data: { id } })
      .then(() => getComponents())
      .catch(() => alert('Failed to delete component. Please try again.'));
  };

  return (
    <div className="components-page">
      <div className="leftPaneContainer4">
        <LeftPane />
      </div>
      <div className="main-content4">
        <div className="form-container">
          <ComponentForm
            addComponent={addComponent}
            updateComponent={updateComponent}
            data={selectedComponent}
            isEdit={isEdit}
          />
        </div>
        <div className="table-container">
          <ComponentTable
            rows={components}
            selectComponent={(data) => {
              setSelectedComponent(data);
              setIsEdit(true);
            }}
            deleteComponent={(id) =>
              window.confirm('Are you sure?') && deleteComponent(id)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Components;
