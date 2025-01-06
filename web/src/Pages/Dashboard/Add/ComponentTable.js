import React from 'react';
import './componenttable.css';

const ComponentTable = ({ rows, selectComponent, deleteComponent }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Type</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {rows.length > 0 ? (
          rows.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.type}</td>
              <td>{row.status}</td>
              <td>
                <button className="EDit" onClick={() => selectComponent(row)}>Edit</button>
                <button className="Delete" onClick={() => deleteComponent(row.id)}>Delete</button>
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
