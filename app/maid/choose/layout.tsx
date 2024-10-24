'use client';
import DropdownPickUp from "../../components/actors/leftside/DashboardChooseMaid/DropDownChooseMaid";
import DashboardPreferences from "../../components/actors/leftside/DashboardPreferences/DashboardPreferences";
export default function MaidLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-grow">

            <div className="w-2/5">
                <DashboardPreferences/>
            </div>

            <div className="w-3/5 pl-10">
                <DropdownPickUp />
            </div>
        </div>
    );
}
