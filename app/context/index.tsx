import React, { createContext, useState, Dispatch, SetStateAction } from 'react';

type MaidContextType = {
  services: string[];
  locations: string[];
  selectedServices: string[];
  selectedLocation: string;
  selectedDate: Date | null;
  selectedTime: string;
  setSelectedServices: Dispatch<SetStateAction<string[]>>;
  setSelectedLocation: Dispatch<SetStateAction<string>>;
  setSelectedDate: Dispatch<SetStateAction<Date | null>>;
  setSelectedTime: Dispatch<SetStateAction<string>>;
};

export const MaidContext = createContext<MaidContextType>({
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

export const MaidProvider = ({ children }: { children: React.ReactNode }) => {
  const services = ['Broom', 'Window', 'Kitchen'];
  const locations = ['Montreal', 'Laval'];
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');

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
