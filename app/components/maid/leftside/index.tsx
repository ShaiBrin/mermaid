"use client";
import { useState } from "react";
import React from 'react';
import Box from '@mui/material/Box';

import DropdownBoxMaid from "./dashboardMaid/dropdown/DropdownBoxMaid";

const LeftSide = () => {
    return (
        <>
            {/* <div className="flex-initial w-1/2 p-5">  */}
                <DropdownBoxMaid />
            {/* </div> */}
        </>
    );
  }
export default LeftSide;