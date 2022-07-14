import React, { useEffect, useState } from 'react';


const useWeatherState = (url) => {


  const currentWeather = document.querySelector('.CurrentWeather');
  const searchContent = document.querySelector('.SearchContent');
  const ShowWeaklyBtn = document.querySelector('.fa-arrow-right');
  const InputSearchContainer = document.querySelector('.InputSearch-container');
  
  const [city, setCity] = useState('london');
  const [lat, setLat] = useState(51.5085)
  const [lon, setLon] = useState(-0.1257)
  const [loading, setLoading] = useState(true);
  const [background, setBackground] = useState('01d')

  const handleActiveInfo = () =>{
    currentWeather.classList.toggle('active')
    searchContent.classList.toggle('active')
    ShowWeaklyBtn.classList.toggle('active')
    InputSearchContainer.classList.toggle('active')
  }


  return {
    city,
    setCity,
    lat,
    setLat,
    lon,
    setLon,
    loading,
    setLoading,
    background,
    setBackground,
    handleActiveInfo,
    currentWeather,
    searchContent,
    ShowWeaklyBtn,
    InputSearchContainer
  }
}

export default useWeatherState