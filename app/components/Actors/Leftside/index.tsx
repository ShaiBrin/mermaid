'use client';
import React from 'react';
import DropdownBoxMaid from "@/app/components/Actors/Leftside/DashboardMaid/DropdownBoxMaid";
import { usePathname } from 'next/navigation';

const LeftSide = React.memo(() => {
  const pathname = usePathname();
  const isPickupOrChoose = pathname.includes('/maid/pickup') || pathname.includes('/maid/choose');

  return (
    <div className="flex flex-grow">
      {!isPickupOrChoose && (
        <div className="w-full">
          <DropdownBoxMaid />
        </div>
      )}
    </div>
  );
});

LeftSide.displayName = 'LeftSide';

export default LeftSide;
