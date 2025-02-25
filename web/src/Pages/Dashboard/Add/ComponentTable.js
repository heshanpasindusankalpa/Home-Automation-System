import React from 'react';
import './componenttable.css';

const ComponentTable = ({ rows, selectComponent, deleteComponent }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Place</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {rows.length > 0 ? (
          rows.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.type}</td>
              <td>{row.place}</td>
              <td>{row.status}</td>
              <td>
                <button className="EditB" onClick={() => selectComponent(row)}>Edit</button>
                <button className="DeleteB" onClick={() => deleteComponent(row.id)}>Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5">No components found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ComponentTable;
