import React, { useEffect, useState } from "react";
import { MapContainer,TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import './styles/MapWeather.css'
import AppContext from "../context/AppContext";

const MapWeather = () => {
    const {lat, lon} = React.useContext(AppContext);
    const [deployMap, setDeployMap] = useState(null)

    useEffect(()=>{
        setDeployMap(
        <MapContainer center={[lat, -lon]} zoom={13} scrollWheelZoom={true} className='MapContainer'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        </MapContainer>)
    },[lat])

  return (
    <div className="MapWeather">
      {deployMap}
    </div>
  );
};

export default MapWeather;
