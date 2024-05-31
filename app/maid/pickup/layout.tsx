'use client';
import DropdownBoxMaid from "../components/Actors/Leftside/DashboardMaid/DropdownBoxMaid";
import DropdownPickUp from "../../components/Actors/Leftside/DashboardPickUp/DropdownPickUp"
import LeftSide from "../components/Actors/leftside/index";
import RightSide from "../components/Actors/Rightside/Map";
import Navigation from "../components/Page/navigation";
import { usePathname } from 'next/navigation';

export default function MaidLayout({ children }: { children: React.ReactNode }) {

    return (
        <div>
            <DropdownPickUp />
        </div>
    );
}
