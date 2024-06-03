'use client';
import DashboardChoose from "@/app/components/Actors/Leftside/DashboardChoose/DashboardChoose";
export default function MaidLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-grow">
            <DashboardChoose/>
        </div>
    );
}
