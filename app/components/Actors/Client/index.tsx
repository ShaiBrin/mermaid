"use client";
import React from 'react';
import RightSide from "../Rightside/Map"
import DashboardClient from "../Client/DashboardClient/index"
import Navigation from "../../Page/navigation"

const Client = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="w-full">
                <Navigation />
            </div>
            <div className="flex flex-grow">
                <div className="w-1/4 pt-10 pl-20 pr-5"> 
                    <DashboardClient />
                </div>
                <div className="w-3/4 pt-10 pr-20 pl-5">
                    <RightSide />
                </div>
            </div>
        </div>
    );
}
export default Client;
