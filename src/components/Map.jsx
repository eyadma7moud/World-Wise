import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent } from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesContext";
import City from "./City";

function Map() {
  const navigate = useNavigate();
  const { cities } = useCities();

  const [searchParams, setSearchParams] = useSearchParams();
  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");

  const [mapPosition, setMapPosition] = useState([40, 0]);

  useEffect(
    function () {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng],
  );

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        className={styles.map}
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            key={city.id}
            position={[city.position.lat, city.position.lng]}
          >
            <Popup>{city.cityName} </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
        <DetectClick/>
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position, 6);
  return null;
}

function DetectClick(){
  const navigate = useNavigate();

  useMapEvent({
    click: e=> navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
  })
}

export default Map;
