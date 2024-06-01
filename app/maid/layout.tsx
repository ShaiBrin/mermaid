'use client';
import React from 'react';
import { usePathname } from "next/navigation";
import RightSide from "../components/Actors/Rightside/Map";
import Navigation from "../components/Page/navigation";
import LeftSide from "../components/Actors/leftside";

export default function MaidLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isContacts = pathname.includes('/maid/contacts');

    const leftWidthClass = isContacts ? "w-3/5" : "w-2/5";
    const rightWidthClass = isContacts ? "w-2/5" : "w-3/5";

    return (
        <div className="flex flex-col h-screen">
            <div className="w-full">
                <Navigation />
            </div>
            <div className="flex flex-grow">
                <div className={`flex-initial ${leftWidthClass} pt-10 pl-10 pr-5`}>
                    <div className="w-full">
                        <LeftSide/>
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
