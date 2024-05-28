'use client';

import { MapContext } from '@react-google-maps/api';
// Using the official api provided by google for the map
import { AdvancedMarker, APIProvider, Map, Marker, useMap, Pin } from '@vis.gl/react-google-maps';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
// import { DrivewayMapContext } from './DrivewayMapContext';

import { DrivewayMapContext } from './DrivewayMapContext';
import { RiParkingFill } from 'react-icons/ri';
import { fontSize } from '@mui/system';
import { useSearchParams } from 'next/navigation';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const INITIAL_CAMERA = {
  center: { lat: 37.72649002075195, lng: -122.4822769165039 },
  zoom: 18,
};

function MapView() {
  const searchParams = useSearchParams();
  const map = useMap();
  const [cameraProps, setCameraProps] = useState(INITIAL_CAMERA);
  const [currentMap, setCurrentMap] = useState(null);
  // const { mapCamera } = useContext(DrivewayMapContext);
  const handleCameraChange = useCallback((ev) => setCameraProps(ev.detail));

  // {[key: string]: Marker}
  //
  const [markers, setMarkers] = useState({});

  const { listings } = useContext(DrivewayMapContext);

  const setMarkerRef = (marker, key) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;

    setMarkers((prev) => {
      if (marker) {
        console.log('Old Marker');
        console.log(markers);
        return { ...prev, [key]: marker };
      } else {
        console.log('New Marker');
        const newMarkers = { ...prev };
        delete newMarkers[key];
        console.log(newMarkers);
        return newMarkers;
      }
    });
  };

  useEffect(() => {
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");

    console.log(lat, lng);

    if (!lat || !lng || !map) return;

    // console.log("pass", {lat: lat, lng: lng});
    // setCameraProps({center: {lat: lat, lng: lng}, zoom: cameraProps.zoom});
    map.setCenter({lat: parseFloat(lat), lng: parseFloat(lng)});
  }, [map])

  // console.log(listings.map((listing) => [listing.long, listing.lat, listing.listingID]));
  return (
    <Map
      {...cameraProps}
      onCameraChanged={handleCameraChange}
      gestureHandling={'greedy'}
      mapId={'bfc8011594bf2b62'}
      libraries={['marker']}
    >
      <Markers points={listings} />
    </Map>
  );
}

const Markers = ({ points }) => {
  const map = useMap();
  const [markers, setMarkers] = useState({});
  const clusterer = useRef(null);

  const handleMarkerClick = (listing) => {
    map.panTo({lat: listing.lat, lng: listing.lng});
    
  }

  // Initialize MarkerClusterer
  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({ map });
    }
  }, [map]);

  // Update markers
  useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
  }, [markers]);

  const setMarkerRef = (marker, key) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;

    setMarkers((prev) => {
      if (marker) {
        return { ...prev, [key]: marker };
      } else {
        const newMarkers = { ...prev };
        delete newMarkers[key];
        return newMarkers;
      }
    });
  };

  return (
    <>
      {points.map((point) => (
        <AdvancedMarker
          position={{ lng: point.lng, lat: point.lat }}
          key={point.listingID}
          ref={(marker) => setMarkerRef(marker, point.listingID)}
          clickable={true}
          onClick={() => handleMarkerClick(point)}
        >
          {/* <span className="tree">🌳</span> */}
          <Pin background={'#8a4fff'} borderColor={'#5006e2'} glyphColor={'#FFF'} scale={2}>
            <span className="car-icon">🚘</span>
            {/* <RiParkingFill style={{fontSize: 16}} />     */}
          </Pin>
        </AdvancedMarker>
      ))}
    </>
  );
};

export default MapView;
