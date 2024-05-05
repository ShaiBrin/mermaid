"use client";
import React, { useState } from 'react';
import DropdownBoxMaid from "./DashboardMaid/DropdownBoxMaid";
import DropdownBoxPickUp from "./dashboardPickUp/DropdownPickUp";


const LeftSide = () => {
    const [currentComponent, setCurrentComponent] = useState<string>('/maid');
    console.log(currentComponent)
    const handleComponentSwitch = (destination: string) => {
        setCurrentComponent(destination);
    };
    
    return (
        <>
            {currentComponent === '/maid' && <DropdownBoxMaid onNavigate={handleComponentSwitch} />}
            {currentComponent === '/maid/pickup' && <DropdownBoxPickUp />}    
        </>
    );
}
export default LeftSide;