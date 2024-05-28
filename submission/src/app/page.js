'use client';
import * as React from 'react';
import Navbar from './component/navbar';
import Link from 'next/link';
// import TextField from '@mui/material/TextField';
import { SearchForParkingCard, BookYourSpotCard, ParkAndEnjoyCard } from './component/card'; // Adjust the import statement based on the actual file structure and component names
import GoogleAutoComplete from './component/GoogleAutoComplete';
import './styles.css';
import { APIProvider, Map, Marker, useMapsLibrary } from '@vis.gl/react-google-maps';
import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const [address, setAddress] = React.useState('');
  const [error, setError] = React.useState('');

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
    setError('');
  };

  const handleButtonClick = () => {
    if (address.trim() === '') {
      setError('Please enter your address');
    } else {
      // Navigate to the next page
      console.log('Navigate to the next page');
    }
  };

  const handleGoogleAutoComplete = (placeResult) => {
    console.log(placeResult);
    console.log(placeResult);
    if (!placeResult.hasOwnProperty('geometry')) {
      console.log('Not a valid result!');
    } else {
      const coordinates = placeResult.geometry.location;
      const latitutude = coordinates.lat();
      const longitude = coordinates.lng();
      // map.setCenter({ lat: latitutude, lng: longitude });

      console.log('Place results: lat ', latitutude, 'long ', longitude);

      router.push(`/map?lat=${latitutude}&lng=${longitude}&formatted_address=\"${placeResult.formatted_address}\"`);
    }
  };

  return (
    <main>
      <Navbar />
      <div className="flex flex-col items-center bg-gray-100 min-h-screen">
        <div className="text-center mt-8">
          <h1 className="text-3xl ">Parking Made Simple: Where Convenience Meets Sustainability</h1>
        </div>

        <div className="flex flex-wrap justify-center mt-8">
          <div className="card-container">
            <SearchForParkingCard />
          </div>
          <div className="card-container">
            <BookYourSpotCard />
          </div>
          <div className="card-container">
            <ParkAndEnjoyCard />
          </div>
        </div>

        <div className="max-w-6xl w-full bg-white p-12 rounded-lg shadow-lg flex items-center mt-20">
          <div className="flex-1 mr-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold">Find parking near you!</h1>
            </div>
            <div className="mb-8">
              {' '}
              <APIProvider apiKey={'AIzaSyBTo3LHkRP2MrocWorE9iCkK5Z-JAdQY7A'}>
                <GoogleAutoComplete
                  className="w-full autocomplete-home"
                  onAutoCompleteResult={handleGoogleAutoComplete}
                  placeholder={"Street Address"}
                />
              </APIProvider>
              {/* <TextField
                label="Your address"
                variant="outlined"
                type="text"
                className="w-full"
                value={address}
                onChange={handleAddressChange}
                error={error !== ''}
                helperText={error}
              /> */}
            </div>
            <div className="flex justify-between">
              <Link
                href="/looking"
                className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 focus:outline-none"
              >
                Looking
              </Link>
              <Link
                href="/offering"
                className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 focus:outline-none"
              >
                Offering
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-gray-200 p-4 rounded-lg">
              <img
                src="https://media.istockphoto.com/id/1297933309/photo/asian-chinese-couple-unloading-luggage-with-their-daughter-from-their-car-at-their-house.jpg?s=612x612&w=0&k=20&c=uStLACesmxdyCHB9UKInOVPn0RosSEkiAUbRHog0P_E="
                alt="Image Description"
                className="w-full h-auto"
                style={{ width: '700px', height: '400px' }}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-8 max-w-6xl w-full">{/* Additional content can be placed here */}</div>
      </div>
    </main>
  );
}
