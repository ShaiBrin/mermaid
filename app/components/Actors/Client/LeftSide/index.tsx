"use client";
import React, { useState } from 'react';
import DashBoardClient from "../LeftSide/DashboardMain/DashboardClient"
import DashboardBook from "../LeftSide/DashboardBook/dashboardBook"


const LeftSide = () => {
    const [currentComponent, setCurrentComponent] = useState<string>('/client');
    console.log(currentComponent)
    const handleComponentSwitch = (destination: string) => {
        setCurrentComponent(destination);
    };
    
    return (
       
        <>
            {currentComponent === '/client' && <DashBoardClient onNavigate={handleComponentSwitch} />}
            {currentComponent === '/client/book' && <DashboardBook />}    
        </>
           
       
    );
}
export default LeftSide;