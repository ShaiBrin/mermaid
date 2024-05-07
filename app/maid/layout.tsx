'use client';
import LeftSide from "../components/Actors/leftside/index";
import RightSide from "../components/Actors/Rightside/Map";
import Navigation from "../components/Page/navigation";
import { usePathname } from 'next/navigation';

export default function MaidLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isPickup = pathname.includes('/maid/pickup');


    return (
        <div className="flex flex-col h-screen">
            <div className="w-full">
                <Navigation />
            </div>
            <div className="flex flex-grow">
                <div className={`flex-initial ${isPickup ? 'w-2/5' : 'w-1/4'} pt-10 pl-10 pr-5`}>
                    <LeftSide />
                    {children}
                </div>
                <div className={`flex-initial ${isPickup ? 'w-3/5' : 'w-3/4'} pt-10 pr-10 pl-5`}>
                    <RightSide />
                </div>
            </div>
        </div>

    );
}
