'use client';
import React from 'react';
import { usePathname } from "next/navigation";
import RightSide from "../components/actors/rightside/map";
import Navigation from "../components/page/navigation";
import LeftSide from "../components/actors/leftside";

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
    // const pathname = usePathname();
    // const isChoose = pathname.includes('/maid/choose');

    // const leftWidthClass = isChoose ? "w-3/5" : "w-1/3";
    // const rightWidthClass = isChoose ? "w-2/5" : "w-2/3";

    return (
        <div className="flex flex-col h-screen">
            <div className="w-full">
                <Navigation />
            </div>
            {/* <div className="flex flex-grow">
                <div className={`flex-initial ${leftWidthClass} pt-10 pl-10 pr-5`}>
                    <div className="w-full">
                        <LeftSide/>
                    </div>
                    {children}
                </div>
                <div className={`flex-initial ${rightWidthClass} pt-10 pr-10 pl-5`}>
                    <RightSide/>
                </div>
            </div> */}
        </div>
    );
}
