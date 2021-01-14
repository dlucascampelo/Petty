import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import logoIcon from '../images/logoicon.svg';
import mapIcon from '../components/Map/mapIcon';
import api from '../services/api';
import '../styles/pages/shelter-map.css';

interface Shelter {
  id: number;
  latitude: number;
  longitude: number;
  name: string;

}


const SheltersMap = () => {
  const [shelters, setShelters] = useState<Shelter[]>([]);

  useEffect(() => {
    api.get('shelters').then(response => {
      setShelters(response.data);
    })
  }, []);


  return (
    <div id="page-map">
      <aside>
        <header>
          <Link to="/">
            <img src={logoIcon} alt="Petty" />
          </Link>

          <h2>Encontre o abrigo mais próximo no mapa</h2>
          <p>Seu novo melhor amigo esta te esperando =)</p>
        </header>
        <footer>
          <strong>Recife</strong>
          <span>Pernambuco</span>
        </footer>
      </aside>
      <Map
        center={[-8.0553022, -34.8947901]}
        zoom={13.5}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        /*url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}*/
        />

        {shelters.map(shelter => {
          return (
            <Marker key={shelter.id}
              icon={mapIcon}
              position={[shelter.latitude, shelter.longitude]}
            >
              <Popup
                closeButton={false}
                minWidth={200}
                maxWidth={200}
                max-height={40}
                className="map-popup"
              >
                {shelter.name}
                <Link to={`/shelters/${shelter.id}`}>
                  <FiArrowRight size={20} color="#FFF" />
                </Link>
              </Popup>
            </Marker>)
        })}
      </Map>

      <Link to="/shelters/create" className="create-shelter">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}
export default SheltersMap;