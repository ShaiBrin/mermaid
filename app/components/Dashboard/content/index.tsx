"use client";
import { useState } from "react";
import React from 'react';
import Box from '@mui/material/Box';
import DropdownBox from "./dropdown";
import MyGoogleMap from './map';

const Content = () => {
    return (
        <div className="grid grid-cols-8 h-screen"> {/* Divide the container into 4 columns */}
      <Box className="col-span-5 flex flex-col"> {/* DropdownBox takes up 1 column */}
          <DropdownBox />
        </Box>
        <Box className="col-span-3"> {/* MyGoogleMap takes up the remaining 3 columns */}
          <MyGoogleMap />
        </Box>
      </div>
    );
  }
export default Content;