'use client';
import LeftSide from "../components/Actors/leftside";
import DropdownBoxMaid from "../components/Actors/Leftside/DashboardMaid/DropdownBoxMaid";
import DropdownPickUp from "../components/Actors/Leftside/DashboardPickUp/DropdownPickUp";
import RightSide from "../components/Actors/Rightside/Map";
import Navigation from "../components/Page/navigation";
import { usePathname } from 'next/navigation';

export default function MaidLayout({ children }: { children: React.ReactNode }) {

  const pathname = usePathname();

  const getLeftSide = () => {
    if (pathname.includes('/maid/pickup')){
      return <DropdownPickUp/>
    }
    else {
      return <DropdownBoxMaid/>
    }
  }
  
  return (
      <div className="flex flex-col h-screen">
        <div className="w-full">
            <Navigation />
        </div>
        <div className="flex flex-grow">
            <div className="w-1/4 pt-10 pl-20 pr-5"> 
                {/* {children} */}
                {getLeftSide()}
            </div>
            <div className="w-3/4 pt-10 pr-20 pl-5">
                <RightSide />
            </div>
        </div>
      </div>

  );
}
