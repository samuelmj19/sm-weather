
import Home from './components/Home';
import AppContext from './context/AppContext';
import useWeatherState from './hooks/useWeatherState';

function App() {
  const weatherState = useWeatherState();
  return (
    <AppContext.Provider value={weatherState}>
      <Home/>
    </AppContext.Provider>
    
  );
}

export default App;
