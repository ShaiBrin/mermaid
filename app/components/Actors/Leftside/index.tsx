'use client';
import React from 'react';
import DropdownBoxMaid from "@/app/components/Actors/Leftside/DashboardMaid/DropdownBoxMaid";
import { usePathname } from 'next/navigation';

const LeftSide = () => {
    const pathname = usePathname();
    const isPickup = pathname.includes('/maid/pickup');
  
    return (
        <div className="flex flex-grow">
            {!isPickup && (
                <div className="w-full">
                    <DropdownBoxMaid/>
                </div>
            )}
        </div>
    );
}

export default LeftSide;
