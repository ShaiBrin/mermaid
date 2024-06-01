'use client';
import DropdownPickUp from "@/app/components/Actors/Leftside/dashboardPickUp/DropdownPickUp";
import DateTimePicker from "@/app/components/Actors/Leftside/DateTimePicker/DateTimePicker";

export default function MaidLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-grow">
            <DateTimePicker/>
        </div>
    );

   
}
