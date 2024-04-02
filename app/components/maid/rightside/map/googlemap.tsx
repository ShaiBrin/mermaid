// components/MyGoogleMap.jsx
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '80%'
};

const center = {
  lat: -34.397,
  lng: 150.644
};

const MyGoogleMap = () => {
  return (
    <LoadScript
      googleMapsApiKey="YOUR_API_KEY" // Replace with your Google Maps API key
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        // center={center}
        zoom={10}
      >
        {/* Child components, like markers, info windows, etc. */}
      </GoogleMap>
    </LoadScript>
  );
}

export default MyGoogleMap;
