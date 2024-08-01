import React, { useState, useEffect } from 'react';

const WeatherForm = ({ addOrUpdateWeather, editingData }) => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [date, setDate] = useState('');
  const [weather, setWeather] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editingData) {
      setCity(editingData.city);
      setCountry(editingData.country);
      setDate(editingData.date);
      setWeather(editingData.weather);
      setDescription(editingData.description);
    }
  }, [editingData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrUpdateWeather({ city, country, date, weather, description });
    setCity('');
    setCountry('');
    setDate('');
    setWeather('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4" id='form'>
      <h2 className="mb-3">{editingData ? 'Edit Weather' : 'Add Weather'}</h2>
      <div className="form-group mb-2">
        <label>City:</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <div className="form-group mb-2">
        <label>Country:</label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <div className="form-group mb-2">
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <div className="form-group mb-2">
        <label>Weather:</label>
        <input
          type="text"
          value={weather}
          onChange={(e) => setWeather(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <div className="form-group mb-2">
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {editingData ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

export default WeatherForm;
