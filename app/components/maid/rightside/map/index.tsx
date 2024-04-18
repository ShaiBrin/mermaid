"use client";
import { useState } from "react";
import React from 'react';
import Box from '@mui/material/Box';
import MyGoogleMap from "./googlemap";

const RightSide = () => {
    return (
      <div className="h-full">
      < MyGoogleMap/>
      </div>
        // <div className="flex h-screen">
            // <div className="flex-initial w-1/2 p-5"> 
                // < MyGoogleMap/>
            // </div>
        // </div>
    );
  }
export default RightSide;