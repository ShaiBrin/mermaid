"use client";
import React from 'react';
import DropdownBoxMaid from "./DashboardMaid/DropdownBoxMaid";
import DropdownPickUp from "../Leftside/DashboardPickUp/DropdownPickUp"
import DashBoardBook from '../Client/LeftSide/DashboardBook/dashboardBook';
import { usePathname } from 'next/navigation';


const LeftSide = () => {
    const pathname = usePathname();
    const isPickup = pathname.includes('/maid/book');
  
    return (
    
        <div className="flex flex-grow">
            <div className="w-full">
                <DropdownBoxMaid/>
            </div>
            {isPickup && (
            <div className="w-3/5 h-full pl-5">
                <DropdownPickUp/>
            </div>
             )}
        </div>
    );
}
export default LeftSide;