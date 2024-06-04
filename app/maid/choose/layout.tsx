'use client';
import DashboardChoose from "@/app/components/Actors/Leftside/DashboardChoose/DashboardChoose";
import DropdownPickUp from "@/app/components/Actors/Leftside/dashboardPickUp/DropdownPickUp";
export default function MaidLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-grow">

            <div className="w-2/5">
                <DashboardChoose/>
            </div>

            <div className="w-3/5 pl-10">
                <DropdownPickUp/>
            </div>
        </div>
    );
}
