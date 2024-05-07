'use client';
import LeftSide from "@/app/components/Actors/leftside";
import RightSide from "@/app/components/Actors/Rightside/Map";
import Navigation from "@/app/components/Page/navigation";
import DropdownPickUp from "@/app/components/Actors/Leftside/DashboardPickUp/DropdownPickUp";
import { usePathname } from 'next/navigation';

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isPickup = pathname.includes('/maid/services');

    return (
    //     <div className="flex flex-col h-screen">
    //     <div className="w-full">
    //         <Navigation />
    //     </div>
    //     <div className="flex flex-grow">
    //         <div className={`flex-initial ${isPickup ? 'w-4/5' : 'w-1/4'} pt-10 pl-10 pr-5`}>
    //             <LeftSide />
    //         </div>
    //         <div className={`flex-initial ${isPickup ? 'w-1/5' : 'w-3/4'} pt-10 pr-10 pl-5`}>
    //             <RightSide />
    //         </div>
    //     </div>
    // </div>
        <div className="flex flex-grow">
            <DropdownPickUp/>
            {/* <div className={`flex-initial ${isPickup ? 'w-4/5' : 'w-1/4'} pt-10 pl-10 pr-5`}>
                 <LeftSide />
             </div> */}
        </div>
    
    
    );
}
