import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { useEffect } from 'react';
import { useStationStore } from '../store/useStationStore';
import 'leaflet/dist/leaflet.css';

// Fix for default Leaflet icon issue in Webpack/Vite
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({ iconUrl: icon, shadowUrl: iconShadow, iconSize: [25, 41], iconAnchor: [12, 41] });
L.Marker.prototype.options.icon = DefaultIcon;

function MapController({ selectedStation }: { selectedStation: any }) {
  const map = useMap();
  useEffect(() => {
    if (selectedStation) {
      map.flyTo([selectedStation.lat, selectedStation.lng], 13);
    }
  }, [selectedStation, map]);
  return null;
}

export const StationMap = () => {
  const { filteredStations, selectedStation, selectStation } = useStationStore();

  return (
    <MapContainer 
      center={[51.1657, 10.4515]}
      zoom={7} 
      className="h-full w-full rounded-lg shadow-inner"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MapController selectedStation={selectedStation} />
      <MarkerClusterGroup chunkedLoading>
        {filteredStations.map((station) => (
          <Marker 
            key={station.id} 
            position={[station.lat, station.lng]}
            eventHandlers={{ click: () => selectStation(station) }}
          >
            <Popup>
              <div className="font-semibold">{station.name}</div>
              <div className="text-sm text-gray-600">{station.city}</div>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};