import { createContext, useState } from "react";

const MaidContext = createContext(
    {
        services:['Broom', 'Window', 'Kitchen'], 
        locations:['Montreal', 'Laval']
})

export interface MaidContextState {
    services: string[]
    locations: string[]
    selectedServices: string[]
    selectedLocation: string 
    setSelectedServices: string
    setSelectedLocation: string
}

export function MaidProvider({children } ) {

    const services= ['Broom', 'Window', 'Kitchen'];
    const locations = ['Montreal', 'Laval'];
    const [selectedServices, setSelectedServices] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');  

    return  (
        <MaidContext.Provider value = {{ 
            services, 
            locations,
            selectedServices,
            selectedLocation,
            setSelectedServices,
            setSelectedLocation
            }
        }
    >
        {children}
    </MaidContext.Provider>
    )
}

export {MaidContext};
export default MaidProvider;

