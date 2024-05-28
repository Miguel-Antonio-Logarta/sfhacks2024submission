'use client';

import './styles.css';
import React, { useState, useEffect, useContext } from 'react';
import Navbar from '../component/navbar';
import Sidebar from './Sidebar';
import { APIProvider, Map, Marker, useMapsLibrary } from '@vis.gl/react-google-maps';
import { MapContext } from '@react-google-maps/api';
import MapView from './MapView';
import { DrivewayMap, DrivewayMapContext } from './DrivewayMapContext';

// Fetch data based on previous page load
// If there is no query, just load the default map

// async function getData() {
//   const res = await fetch('localhost:3000/driveway', {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       lat: 37.72649002075195,
//       long: -122.4822769165039,
//       radius: 2.0,
//       address: "sample address",
//     })
//   })

//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }

//   return res.json()
// }

// Stuff to do
/*
  Procedure
    When user first visits map, set default location to their location
    Fetch data from default coordinates

    When user enters into the search bar,
      Google autocomplete kicks in
      When user selects, it changes location, else it gives an error
    
    Send request for location to api with radius
    Response comes back with listings

    User can choose to reserve
*/

// Move Google Context Here
// Move Listing Context Here
const sampleData = [
  {
    address: '123 Street by Hill',
    name: '123 Street by Hill',
    rating: 4.5,
    numRatings: 17,
    description: "Nice neighborhood where your car won't get jacked",
    price: 5,
    lat: 37.72675636631657,
    long: -122.48357839527878,
    listingID: 1,
    imgUrl: "/parking1.jpeg",
  },
  {
    address: '4212 B Street',
    name: '4212 B Street by Park',
    rating: 4.9,
    numRatings: 5,
    description: 'A little sketch, but well worth the price for what you get',
    price: 2.5,
    lat: 37.72701091489936,
    long: -122.48220508755398,
    listingID: 2,
  },
  {
    address: '42 Gregor Avenue',
    name: '42 Gregor Avenue',
    rating: 4.2,
    numRatings: 4,
    description: 'This place is okay',
    price: 3.2,
    lat: 37.72908132864706,
    long: -122.47844972767922,
    listingID: 3,
  },
];

const mapPage = () => {

  const [data, setData] = useState(sampleData);
  // console.log(`${process.env.G_API_KEY}`);
  return (
    <>
      <Navbar />
      {/* I know it's an exposed API key. I do not care */}
      <APIProvider apiKey={''}>
      {/* <APIProvider apiKey={process.env.G_API_KEY}> */}
        <DrivewayMap>
          <main className="map-body">
            <Sidebar />
            <div className="map">
              <MapView />
            </div>
          </main>
        </DrivewayMap>
      </APIProvider>

      {/* </MapContext.Provider> */}
    </>
  );
};

export default mapPage;
