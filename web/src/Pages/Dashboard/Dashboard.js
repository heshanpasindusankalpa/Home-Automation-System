import React, { useEffect, useState } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './dashboard.css'; // Adjust CSS path
import LeftPane from '../../components/LeftPane/LeftPane'; // Adjust path

const socket = io('http://localhost:3000'); // Replace with your backend's URL

const API_KEY = '7ff3f1c7505846dce72c394d2588a9cc'; // Replace with your OpenWeatherMap API key
const CITY_ID = '1248991'; // Replace with your city's ID

export default function Dashboard() {
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [weatherDescription, setWeatherDescription] = useState('');
  const [icon, setIcon] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    // Fetch weather data from API
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${CITY_ID}&appid=${API_KEY}&units=metric`);
        const data = response.data;
        setTemperature(data.main.temp);
        setHumidity(data.main.humidity);
        setWeatherDescription(data.weather[0].description);
        setIcon(`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`); // Use @2x or @4x for higher resolution
      } catch (error) {
        console.error('Error fetching weather data', error);
      }
    };

    // Fetch weather forecast data from API
    const fetchForecastData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=${CITY_ID}&appid=${API_KEY}&units=metric`);
        const data = response.data;
        // Extract forecast for the next 5 days at noon (12:00)
        const forecastData = data.list.filter(item => item.dt_txt.includes('12:00:00'));
        setForecast(forecastData);
      } catch (error) {
        console.error('Error fetching forecast data', error);
      }
    };

    fetchWeatherData();
    fetchForecastData();

    // Listen for real-time updates
    socket.on('temperatureUpdate', (data) => setTemperature(data));
    socket.on('humidityUpdate', (data) => setHumidity(data));

    // Get current date
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setCurrentDate(formattedDate);

    // Clean up
    return () => {
      socket.off('temperatureUpdate');
      socket.off('humidityUpdate');
    };
  }, []);

  return (
    <div className="dashboard">
      <div className="leftPaneContainer">
        <LeftPane />
      </div>

      <div className="mainContent">
        
          <h2>Weather</h2>
          <div className="TodayandHumidity">
          <div className="weatherWidget">
            <div className="weatherHeader">
              <h3>Weather Today</h3>
              <img src={icon} alt="Weather icon" />
            </div>
            <div className="weatherDetails">
              <div className="temperature">
                <h3 className='tem'>Temperature</h3>
                <p>{temperature} °C</p>
              </div>
              <div className="description">
                <h3>Condition</h3>
                <p>{weatherDescription}</p>
              </div>
            </div>
          </div>
          
          <div className="widget">
            <h3>Humidity</h3>
            <CircularProgressbar 
              value={humidity} 
              text={`${humidity}%`} 
              styles={buildStyles({
                textColor: "#fff",
                pathColor: "#F96E2A",
                trailColor: "#d6d6d6"
              })}
            />
          </div>
        </div>

          

          <div className="forecastSection">
            <h3>5-Day Forecast</h3>
            <div className="forecast">
              {forecast.map((day, index) => (
                <div className="forecastItem" key={index}>
                  <p>{new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</p>
                  <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="Weather icon" /> 
                  <p>{day.main.temp} °C</p>
                </div>
              ))}
            </div>
          </div>
        

          
      </div>

      <div className="rightPane">
        <div className="widgetSection">
          <h2>Date & Time</h2>
          <div className="Datewidget">
            <h3>Current Date</h3>
            <p>{currentDate}</p>
          </div>
          
        </div>

        <div className="widgetSection">
          <h2>Date & Time</h2>
          <div className="Datewidget">
            <h3>Current Date</h3>
            <p>{currentDate}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
