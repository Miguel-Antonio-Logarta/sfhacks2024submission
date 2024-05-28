"use client"

import React, { useState } from 'react';
import { PiMagnifyingGlassDuotone } from 'react-icons/pi';
import { PiSlidersHorizontalDuotone } from 'react-icons/pi';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

const ListingSearchBar = () => {
  const valuetext = (value) => {
    return `${value} mi`; // Customizes the display of the slider value
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className="listing-search">
      <div className="listing-search-input rounded-md px-4 py-2">
        <PiMagnifyingGlassDuotone className="icon purple-icon me-2 text-2xl" />
        {/* Your search input */}
        <input type="text" placeholder="Search..." />
        <Button
          aria-describedby={id}
          variant="contained"
          onClick={handleClick}
        >
          <PiSlidersHorizontalDuotone className="purple-icon text-2xl" />
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          PaperProps={{
            style: {
              width: '400px', // Adjust width as needed
              
            },
          }}
        >
          <div className="dropdown-content">
            <Typography variant="h6">Radius</Typography>
            <Slider
              aria-label="Temperature"
              defaultValue={30}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              shiftStep={30}
              step={1}
              marks
              min={.5}
              max={10}
            />
            {/* Add additional content for the popover */}
          </div>
        </Popover>
      </div>
    </div>
  );
};

export default ListingSearchBar;


