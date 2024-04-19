"use client";
import React from 'react';
import RightSide from "./rightside/map";
import LeftSide from "./leftside";
import Navigation from "./navigation";
import DropdownBoxMaid from './leftside/dashboardMaid/dashboardMain/DropdownBoxMaid';

const Maid = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="w-full">
                <Navigation />
            </div>
            <div className="flex flex-grow">
                <div className="w-1/4 pt-10 pl-20 pr-5"> 
                    <LeftSide />
                </div>
                <div className="w-3/4 pt-10 pr-20 pl-5">
                    <RightSide />
                </div>
            </div>
        </div>
    );
}
export default Maid;
