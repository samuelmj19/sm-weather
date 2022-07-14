import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import InputSearch from './InputSearch';
import './styles/SearchContent.css';

const SearchContent = () => {
  const {setCity} = useContext(AppContext)
  
  return (
    <div className='SearchContent'>
        <InputSearch/>
    </div>
  )
}

export default SearchContent