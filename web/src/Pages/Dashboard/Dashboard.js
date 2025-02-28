import React, { useEffect, useState } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './dashboard.css';
import LeftPane from '../../components/LeftPane/LeftPane';
import BaloonLight from '../../images/BaloonLight.webp';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import Dnavbar from '../../components/DashNavigation/Dnavbar';

const socket = io('http://localhost:3000'); 
const API_KEY = '7ff3f1c7505846dce72c394d2588a9cc';
const CITY_ID = '1248991';

export default function Dashboard() {
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [weatherDescription, setWeatherDescription] = useState('');
  const [icon, setIcon] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [forecast, setForecast] = useState([]);
  const [time, setTime] = useState(new Date());
  const [lights, setLights] = useState([]);
  const [lightPercentage, setLightPercentage] = useState(0);

  const calculateLightPercentage = (lights) => {
    if (lights.length === 0) return 0;
    const onLights = lights.filter(light => light.status === 'on').length;
    return (onLights / lights.length) * 100;
  };

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchLights = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/components');
        const lightComponents = response.data.response.filter(
          component => component.type === 'light'
        );
        setLights(lightComponents);
        setLightPercentage(calculateLightPercentage(lightComponents));
      } catch (error) {
        console.error('Error fetching lights:', error);
      }
    };

    fetchLights();

    socket.on('lightUpdate', (updatedLight) => {
      setLights(prevLights => {
        const updated = prevLights.map(light => 
          light.id === updatedLight.id ? updatedLight : light
        );
        setLightPercentage(calculateLightPercentage(updated));
        return updated;
      });
    });

    return () => {
      socket.off('lightUpdate');
    };
  }, []);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?id=${CITY_ID}&appid=${API_KEY}&units=metric`);
        const data = response.data;
        setTemperature(data.main.temp);
        setHumidity(data.main.humidity);
        setWeatherDescription(data.weather[0].description);
        setIcon(`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
      } catch (error) {
        console.error('Error fetching weather data', error);
      }
    };

    const fetchForecastData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=${CITY_ID}&appid=${API_KEY}&units=metric`);
        const data = response.data;
        const forecastData = data.list.filter(item => item.dt_txt.includes('12:00:00'));
        setForecast(forecastData);
      } catch (error) {
        console.error('Error fetching forecast data', error);
      }
    };

    fetchWeatherData();
    fetchForecastData();

    socket.on('temperatureUpdate', (data) => setTemperature(data));
    socket.on('humidityUpdate', (data) => setHumidity(data));

    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setCurrentDate(formattedDate);

    return () => {
      socket.off('temperatureUpdate');
      socket.off('humidityUpdate');
    };
  }, []);

  return (
    <div>
      <Dnavbar />
      <div className="dashboard">
        <div className="leftPaneContainer">
          <LeftPane />
        </div>

        <div className="mainContent">
          <div className="widgetSection">
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
          </div>

          <div className="widgetSection">
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
        </div>

        <div className="rightPane">
          <div className="widgetSection">
            <h2>Date & Time</h2>
            <div className="TimeandDate">
              <div className="Datewidget">
                <h3>Current Date</h3>
                <p>{currentDate}</p>
              </div>
              <div className="clockwidget">
                <Clock value={time} />
              </div>
            </div>
          </div>

          <div className="widgetSection">
            <h2>Lighting</h2>
            <div className="lightand">
            <div className='widget'>
              <img 
                src={BaloonLight} 
                alt="light" 
                className="baloonLight-image" 
                
              />
              </div>
           
              <div className='widget'>
                <h2>ON</h2>
                  <div className="vertical-progress-container">
    <div 
      className="vertical-progress-bar" 
      style={{ height: `${lightPercentage}%` }} 
    />
  </div>
  <p style={{ textAlign: 'center', color: '#fff', marginTop: '10px' }}>
    {Math.round(lightPercentage)}%
  </p>
</div>

              
            
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
