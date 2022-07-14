import React from 'react'
import { useContext } from 'react';
import { useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import './styles/CurrentWeather.css';
import { format, fromUnixTime  } from 'date-fns';



const API = 'https://api.openweathermap.org/data/2.5/onecall?'

const CurrentWeather = () => {
  
 
  

  const [weather, setWeather] = useState([]);
  const [daily, setDaily] = useState([]);
  const {lat, lon, city, loading,setLoading} = useContext(AppContext);
  
  useEffect(() => {
    async function fetchData() {
     
      const response = await fetch(`${API}lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`);
      const data = await response.json();
      setWeather(data);
      console.log(data);
      setLoading(false);
      setDaily(data.daily)
      
    }
    fetchData();
  }, [lat]);

  const CurrentWeather = weather.current;
  if (loading) {
    return <p>Loading...</p>
  }
  console.log(daily)
  return (
    <div className='CurrentWeather'>
      <div className="CurrentWeather-info">
        <h2>{city}</h2>
        <h4>{weather.timezone}</h4>
        <p>{format(fromUnixTime(CurrentWeather.dt),'PPPP p').toString()}</p>
        <span className='weather-span'><img src={`https://openweathermap.org/img/wn/${CurrentWeather.weather[0].icon}.png`} alt="weather icon" /> {CurrentWeather.weather[0].main}</span>
        <p>Temp: {CurrentWeather.temp}°C</p>
      </div>
      <div className="CurrentWeather-weekly">
          {daily.map(day =>{
            const result= format(fromUnixTime(day.dt),'eee do').toString()
            return(
            <article className='days-card' key={day.dt}>
              <h6>{day.weather[0].main}</h6>
              <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt="weather icon" />
              <p>{result}</p>
            </article>
            )
            }).slice(1, 7)}
          {/* <p>{result}</p> */}
      </div>
    </div>
  )
}

export default CurrentWeather