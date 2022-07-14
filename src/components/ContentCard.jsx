import React from 'react';
import CurrentWeather from './CurrentWeather';
import SearchContent from './SearchContent';
import './styles/ContentCard.css';

const ContentCard = () => {
  return (
    <div className='ContentCard'>
        <CurrentWeather/>
        <SearchContent/>
    </div>
  )
}

export default ContentCard