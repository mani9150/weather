import React, { useState } from 'react';
import "./App.css";
import WeatherForm from './WeatherForm';
import WeatherTable from './WeatherTable';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const addOrUpdateWeather = (data) => {
    if (editingIndex !== null) {
      const updatedData = weatherData.map((item, index) =>
        index === editingIndex ? data : item
      );
      setWeatherData(updatedData);
      setEditingIndex(null);
    } else {
      setWeatherData([...weatherData, data]);
    }
  };

  const editWeather = (index) => {
    setEditingIndex(index);
  };

  const deleteWeather = (index) => {
    setWeatherData(weatherData.filter((_, i) => i !== index));
  };

  return (
    <div className="fluid-container mt-4" id='app'>
      <WeatherForm
        addOrUpdateWeather={addOrUpdateWeather}
        editingData={editingIndex !== null ? weatherData[editingIndex] : null}
      />
      <WeatherTable
        data={weatherData}
        onEdit={editWeather}
        onDelete={deleteWeather}
      />
    </div>
  );
}

export default App;
