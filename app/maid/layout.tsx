'use client';
import LeftSide from "../components/Actors/Leftside"
import RightSide from "../components/Actors/Rightside/Map";
import Navigation from "../components/Page/navigation";

export default function MaidLayout({ children }: { children: React.ReactNode }) {


  return (
      <div className="flex flex-col h-screen">
        <div className="w-full">
            <Navigation />
        </div>
        <div className="flex flex-grow">
            <div className="w-1/4 pt-10 pl-20 pr-5"> 
                <LeftSide />
            </div>
            <div className="w-3/4 pt-10 pr-20 pl-5">
                <RightSide />
            </div>
        </div>
      </div>

  );
}
