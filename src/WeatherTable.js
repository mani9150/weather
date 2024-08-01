import React from 'react';

const WeatherTable = ({ data, onEdit, onDelete }) => {
  return (
    <div id='table'>
        <table className="table table-striped" >
      <thead>
        <tr>
          <th>City</th>
          <th>Country</th>
          <th>Date</th>
          <th>Weather</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.city}</td>
            <td>{item.country}</td>
            <td>{item.date}</td>
            <td>{item.weather}</td>
            <td>{item.description}</td>
            <td>
              <button
                onClick={() => onEdit(index)}
                className="btn btn-warning btn-sm mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(index)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default WeatherTable;
