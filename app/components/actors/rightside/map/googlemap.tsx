// MyGoogleMap.tsx

import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectClientGeolocation } from '@/app/store/geoLocationsSlice';
import { RootState } from '@/app/store';

const defaultMapContainerStyle = {
  width: '100%',
  height: '100vh',
  borderRadius: '15px 0px 0px 15px',
};

const defaultMapCenter = {
  lat: 35.8799866,
  lng: 76.5048004,
};

const defaultMapZoom = 18;

const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
  gestureHandling: 'auto',
};

const MyGoogleMap = () => {
  const clientGeoLocations = useSelector((state: RootState) => state.geoLocations.clientGeoLocations);
  const dispatch = useDispatch();

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
        center={{ lat: clientGeoLocations.lat || defaultMapCenter.lat, lng: clientGeoLocations.lng || defaultMapCenter.lng }}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
        onClick={handleMapClick}
      >
        {/* Render marker for selected location */}
        <Marker
          position={{ lat: clientGeoLocations.lat || defaultMapCenter.lat, lng: clientGeoLocations.lng || defaultMapCenter.lng }}
          draggable={true} // Optional: Allow marker to be dragged
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
