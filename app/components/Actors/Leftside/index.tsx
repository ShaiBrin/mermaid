"use client";
import React, { useState } from 'react';
import DropdownBoxMaid from "./DashboardMaid/DropdownBoxMaid";
import DropdownPickUp from "../Leftside/DashboardPickUp/DropdownPickUp"


const LeftSide = () => {
    const [currentComponent, setCurrentComponent] = useState<string>('/maid');
    
    return (
        <>
            {currentComponent === '/maid' && <DropdownBoxMaid/>}
            {currentComponent === '/maid/pickup' && <DropdownPickUp />}    
        </>
    );
}
export default LeftSide;