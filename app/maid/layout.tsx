'use client';
import { usePathname } from "next/navigation";
import DropdownBoxMaid from "../components/Actors/Leftside/DashboardMaid/DropdownBoxMaid";
import RightSide from "../components/Actors/Rightside/Map";
import Navigation from "../components/Page/navigation";

export default function MaidLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    // Adjust this line if the actual path segment to check is different
    const isPickup = pathname.includes('/maid/contacts');

    // Conditionally adjust width classes based on isPickup
    const leftWidthClass = isPickup ? "w-3/5" : "w-2/5";
    const rightWidthClass = isPickup ? "w-2/5" : "w-3/5";

    return (
        <div className="flex flex-col h-screen">
            <div className="w-full">
                <Navigation />
            </div>
            <div className="flex flex-grow">
                <div className={`flex-initial ${leftWidthClass} pt-10 pl-10 pr-5`}>
                    <div className="w-full">
                        <DropdownBoxMaid/>
                    </div>
                    {children}
                </div>

                <div className={`flex-initial ${rightWidthClass} pt-10 pr-10 pl-5`}>
                    <RightSide />
                </div>
            </div>
        </div>
    );
}
