"use client"

import React, {useRef, useEffect, useState} from 'react';
import { useMapsLibrary } from '@vis.gl/react-google-maps';

const GoogleAutoComplete = ({onAutoCompleteResult, className, placeholder}) => {
    const [placeAutocomplete, setPlaceAutocomplete] = useState(null);
  
    // Reference to input for google autocomplete
    const inputRef = useRef(null);
  
    // Autocomplete API
    const placesLib = useMapsLibrary('places');
  
    // Input ref is loading, but placesLib is not loading
    // Initialize autocomplete once places library and input reference is loaded
    useEffect(() => {
      if (!placesLib || !inputRef.current) {
        console.log(!placesLib, !inputRef.current);
        console.log("This has not been loaded yet");
        return;
      }
  
      // setPlacesService(new placesLib.PlacesService(map));
      const options = {
        fields: ['geometry', 'name', 'formatted_address']
      };
  
      console.log("This has been loaded");
  
      setPlaceAutocomplete(new placesLib.Autocomplete(inputRef.current, options));
    }, [placesLib]);
  
    // onAutoCompleteResult is of type (place: google.maps.places.PlaceResult | null) => void;
    useEffect(() => {
      if (!placeAutocomplete) return;
  
      placeAutocomplete.addListener('place_changed', () => {
        // placeAutocomplete.getPlace() returns a PlaceResult type
        onAutoCompleteResult(placeAutocomplete.getPlace())
      })
      // ...use placesService...
    }, [onAutoCompleteResult, placeAutocomplete]);

    return (
        <input className={className} ref={inputRef} placeholder={placeholder} />
    )
}

export default GoogleAutoComplete