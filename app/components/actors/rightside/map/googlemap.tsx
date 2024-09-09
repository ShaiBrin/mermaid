// components/MyGoogleMap.tsx

import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectClientGeolocation } from '@/app/store/geoLocationsSlice';
import { RootState } from '@/app/store';

// Define your default map container style, zoom, and options
const defaultMapContainerStyle = {
  width: '100%',
  height: '100vh',
  borderRadius: '15px 0px 0px 15px',
};

const defaultMapZoom = 18;

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: 'auto',
};

// Define your location coordinates (this should be based on a real geocoding solution)
const locationCoordinates: { [key: string]: { lat: number, lng: number } } = {
  'Montreal': { lat: 45.5017, lng: -73.5673 },
  'Laval': { lat: 45.5882, lng: -73.7125 },
  // Add other locations here
};

const MyGoogleMap = () => {
  const clientGeoLocations = useSelector((state: RootState) => state.geoLocations.clientGeoLocations);
  const selectedLocation = useSelector((state: RootState) => state.preferences.selectedLocation);
  const dispatch = useDispatch();

  const [mapCenter, setMapCenter] = useState({ lat: 45.5017, lng: -73.5673 }); // Default to Montreal

  useEffect(() => {
    // Update map center based on selected location
    setMapCenter(locationCoordinates[selectedLocation] || mapCenter);
  }, [selectedLocation]);

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const clickedLat = event.latLng.lat();
      const clickedLng = event.latLng.lng();
      dispatch(setSelectClientGeolocation({ lat: clickedLat, lng: clickedLng }));
    }
  };

  return (
    <div className="w-full">
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={mapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
        onClick={handleMapClick}
      >
        <Marker
          position={mapCenter}
          draggable={true}
          onDragEnd={(e) => {
            if (e.latLng) {
              dispatch(
                setSelectClientGeolocation({
                  lat: e.latLng.lat(),
                  lng: e.latLng.lng(),
                })
              );
            }
          }}
        />
      </GoogleMap>
    </div>
  );
};

export { MyGoogleMap };
