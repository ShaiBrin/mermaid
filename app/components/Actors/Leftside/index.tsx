"use client";
import React from 'react';
import DropdownBoxMaid from "./DashboardMaid/DropdownBoxMaid";
import DropdownPickUp from "../Leftside/DashboardPickUp/DropdownPickUp"
import { usePathname } from 'next/navigation';


const LeftSide = () => {
    const pathname = usePathname();
    const changeDropDown = () => {
        if (pathname.includes('/maid/pickup')){
            return <DropdownPickUp/>
        }
        else {
            return <DropdownBoxMaid/>
        }
    }
    return (
        <>
            {changeDropDown()}
        </>
    );
}
export default LeftSide;