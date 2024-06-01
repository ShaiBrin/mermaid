'use client';
import DropdownPickUp from "@/app/components/Actors/Leftside/dashboardPickUp/DropdownPickUp";

export default function MaidLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-grow">
            <DropdownPickUp/>
        </div>
    );

   
}
