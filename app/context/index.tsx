import React, { createContext, useState } from 'react';

export const MaidContext = createContext({
  services: [],
  locations: [],
  selectedServices: [],
  selectedLocation: '',
  selectedDate: null,
  selectedTime: '',
  setSelectedServices: () => {},
  setSelectedLocation: () => {},
  setSelectedDate: () => {},
  setSelectedTime: () => {},
});

export const MaidProvider = ({ children }) => {
  const services = ['Broom', 'Window', 'Kitchen'];
  const locations = ['Montreal', 'Laval'];
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');

  return (
    <MaidContext.Provider value={{
      services,
      locations,
      selectedServices,
      selectedLocation,
      selectedDate,
      selectedTime,
      setSelectedServices,
      setSelectedLocation,
      setSelectedDate,
      setSelectedTime,
    }}>
      {children}
    </MaidContext.Provider>
  );
};
