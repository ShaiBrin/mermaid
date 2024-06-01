import { createContext, useState } from "react";

export const MaidContext = createContext({
  services: [],
  locations: [],
  selectedServices: [],
  selectedLocation: '',
  setSelectedServices: () => {},
  setSelectedLocation: () => {},
});

export const MaidProvider = ({ children }) => {
  const services = ['Broom', 'Window', 'Kitchen'];
  const locations = ['Montreal', 'Laval'];
  const [selectedServices, setSelectedServices] = useState<never[]>([]);
  const [selectedLocation, setSelectedLocation] = useState('');

  return (
    <MaidContext.Provider value={{
      services,
      locations,
      selectedServices,
      selectedLocation,
      setSelectedServices,
      setSelectedLocation,
    }}>
      {children}
    </MaidContext.Provider>
  );
};
