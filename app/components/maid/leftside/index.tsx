"use client";
import React, { useState } from 'react';
import DropdownBoxMaid from "./dashboardMaid/dashboardMain/DropdownBoxMaid";
import DropdownBoxPickUp from "./dashboardMaid/dashboardPickUp/DropDownPickUp";

const LeftSide = () => {
    const [currentComponent, setCurrentComponent] = useState<string>('/maid');

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