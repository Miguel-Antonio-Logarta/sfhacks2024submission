'use client';

import React, { useState } from 'react';
import { PiMagnifyingGlassDuotone } from 'react-icons/pi';
import { PiSlidersHorizontalDuotone } from 'react-icons/pi';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import GoogleAutoComplete from '../../component/GoogleAutoComplete';
import Filters from './Filters';
import { useMap } from '@vis.gl/react-google-maps';
import { useSearchParams } from 'next/navigation'

const ListingSearchBar = () => {
  const searchParams = useSearchParams();  
  const [revealFilters, setRevealFilters] = useState(false);
  const [range, setRange] = useState(2);
  const map = useMap();
  const address = searchParams.get("formatted_address");

  const onRangeChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setRange(value);
    e.preventDefault();
  };

  const handleAutoCompleteResult = (placeResult) => {
    console.log(placeResult);
    console.log(placeResult);
    if (!placeResult.hasOwnProperty('geometry')) {
      console.log('Not a valid result!');
    } else {
      const coordinates = placeResult.geometry.location;
      const latitutude = coordinates.lat();
      const longitude = coordinates.lng();

      map.setCenter({ lat: latitutude, lng: longitude });

      console.log('Place results: lat ', latitutude, 'long ', longitude);
    }
  };

  return (
    <div className="listing-search">
      <div className="listing-search-input rounded-md px-4 py-2">
        <PiMagnifyingGlassDuotone className="icon purple-icon me-2 text-2xl" />
        <GoogleAutoComplete onAutoCompleteResult={handleAutoCompleteResult} placeholder={address ?? "Street Address"}/>
        {/* Your search input */}
        {/* <input type="text" placeholder="Search..." /> */}
        <button onClick={() => setRevealFilters(!revealFilters)} className="filters-button">
          <PiSlidersHorizontalDuotone className="purple-icon text-2xl" />
        </button>
      </div>
      {revealFilters && <Filters range={range} onRangeChange={onRangeChange} />}
    </div>
  );
};

export default ListingSearchBar;
