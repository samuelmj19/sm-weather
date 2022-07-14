
import Home from './components/Home';
import AppContext from './context/AppContext';
import useWeatherState from './hooks/useWeatherState';
import './components/styles/mediaQ.css'

function App() {
  const weatherState = useWeatherState();
  return (
    <AppContext.Provider value={weatherState}>
      <Home/>
    </AppContext.Provider>
    
  );
}

export default App;
