import React, { useContext, useEffect } from "react";
import { useState } from "react";
import AppContext from "../context/AppContext";
import MapWeather from "./MapWeather";
import "./styles/InputSearch.css";

const apiCity = "https://api.openweathermap.org/data/2.5/weather?";

const InputSearch = () => {
  const {
    setCity,
    setLat,
    setLon,
    lat,
    lon,
    loading,
    setBackground,
    handleActiveInfo,
    currentWeather,
    searchContent,
    ShowWeaklyBtn,
    InputSearchContainer
  } = useContext(AppContext);
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [searchCity, setSearchCity] = useState("london");
  const [searchCoord, setSearchCoord] = useState({ lat: lat, lon: lon });
  

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `${apiCity}q=${searchCity}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      );
      setData(await response.json());
   
    }
    fetchData();
  }, [searchCity]);

  const handleSubmitCity = (event) => {
    event.preventDefault();
    setSearchCity(input);
    setSearchCoord({ lat: data.coord.lat, lon: data.coord.lon });
   
    currentWeather.classList.remove("active");
    searchContent.classList.remove("active");
    ShowWeaklyBtn.classList.remove("active");
    InputSearchContainer.classList.remove("active");
    console.log(data);
  };

  const handleShowInfo = () => {
    setLat(data.coord.lat);
    setLon(data.coord.lon);
    setCity(data.name);
    handleActiveInfo();
    setBackground(data.weather[0].icon);
  };

  if (loading) {
    return <p>loading</p>;
  }
  return (
    <div className="InputSearch">
      <div className="InputSearch-container">
        <form onSubmit={handleSubmitCity} className="InputSearch-form">
          <div className="InputSearch-searchBar-container">
            <input
              type="search"
              placeholder="Search City"
              name="search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="InputSearch-searchBar"
            />
            <button type="submit" className="InputSearch-searchBar-btn">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div className="Search-city-options">
            <button
              type="submit"
              className="btn"
              onClick={() => setInput("new york")}
            >
              New York
            </button>
            <button
              type="submit"
              className="btn"
              onClick={() => setInput("Tokyo")}
            >
              Tokyo
            </button>
            <button
              type="submit"
              className="btn"
              onClick={() => setInput("London")}
            >
              London
            </button>
            <button
              type="submit"
              className="btn"
              onClick={() => setInput("Paris")}
            >
              Paris
            </button>
          </div>
        </form>
        <div className="Search-info">
          <div className="Search-info-left">
            <p className="lat-searched">
              <i className="fa-solid fa-location-dot"></i> Lat:{" "}
              {searchCoord.lat}
            </p>
            <p className="lon-searched">
              <i className="fa-solid fa-location-dot"></i> Lon:{" "}
              {searchCoord.lon}
            </p>
            <h3>{data.name}</h3>
            <h5>Country: {data.sys.country}</h5>
          </div>
          <div className="Search-info-right">
            <p>Temp: {data.main.temp}° C</p>
            <p>Humid: {data.main.humidity}%</p>
            <p>Wind: {data.wind.speed}m/s</p>
            <p className="Search-info-right-weather">
              <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                alt="weather icon"
              />{" "}
              {data.weather[0].main}
            </p>
          </div>
        </div>
        <MapWeather />
      </div>
      <div className="Show-weakly-btn-container">
        <button onClick={handleShowInfo} className="Show-weakly-btn">
          <i className="fa-solid fa-arrow-right"></i> <p>Show Weekly Weather</p>
        </button>
      </div>
    </div>
  );
};

export default InputSearch;
