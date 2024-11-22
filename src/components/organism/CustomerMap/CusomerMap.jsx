import React from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import CustomerMapStyle from './CustomerMapStyle';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet/dist/leaflet.css';
import locationIcon from '../../../assets/icons/location.svg';
import Text from '../../atom/Text/Text';

const CustomerMap = () => {
  const locations = [
    { name: 'San Francisco', position: [37.7749, -122.4194], customers: 201 },
    { name: 'Oakland', position: [37.8044, -122.2711], customers: 135 },
    { name: 'San Jose', position: [37.3382, -121.8863], customers: 92 },
    { name: 'Sacramento', position: [38.5816, -121.4944], customers: 78 },
    { name: 'Berkeley', position: [37.8715, -122.273], customers: 67 },
    { name: 'Fremont', position: [37.5483, -121.9886], customers: 120 },
    { name: 'Santa Rosa', position: [38.4405, -122.7144], customers: 95 },
    { name: 'Napa', position: [38.2975, -122.2869], customers: 50 },
    { name: 'Concord', position: [37.9779, -122.0311], customers: 83 },
  ];

  const customIcon = new L.Icon({
    iconUrl: locationIcon,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <CustomerMapStyle>
      <div className="customermap-header">
        <Text className="customermap-header__text" value={'Revenue'} />
      </div>
      <MapContainer
        center={[37.7749, -122.4194]}
        zoom={10}
        zoomControl={false}
        style={{ height: '500px', width: '100%' }}
      >
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          attribution="&copy; <a href='https://stadiamaps.com/'>Stadia Maps</a> contributors"
        />
        {locations.map((location, index) => (
          <Marker key={index} position={location.position} icon={customIcon}>
            <Tooltip>
              <div className="tooltip">
                <Text className="tooltip__location" value={location.name} />
                <Text className="tooltip__customer-count" value={`${location.customers}  Customers`} />
              </div>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </CustomerMapStyle>
  );
};

export default CustomerMap;
