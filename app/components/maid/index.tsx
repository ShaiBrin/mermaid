"use client";
import React from 'react';
import Box from '@mui/material/Box';
import RightSide from "./rightside/map";
import LeftSide from "./leftside";
import Navigation from "./navigation";

const Maid = () => {
    return (
        <div className="flex flex-col h-screen">
            {/* Navigation on top */}
            <div className="w-full p-1">
                <Navigation />
            </div>
            {/* Main content area: Left and Right side split view below the Navigation */}
            <div className="flex flex-grow">
                {/* Left Side */}
                <div className="w-1/2 p-5"> 
                    <LeftSide />
                </div>
                {/* Right Side */}
                <div className="w-1/2 p-4">
                    <RightSide />
                </div>
            </div>
        </div>
    );
}
export default Maid;
