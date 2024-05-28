import ListingSearchBar from './(searchbar)/ListingSearchBar';
import Listing from './Listing';
import { useContext, useState } from 'react';
import { DrivewayMapContext } from './DrivewayMapContext';
import { useMap } from '@vis.gl/react-google-maps';
import DrivewayModal from './DrivewayModal';
import { useRouter } from 'next/navigation';


const Sidebar = () => {
  const router = useRouter();
  const { listings } = useContext(DrivewayMapContext);
  const map = useMap();
  const [activeId, setActiveId] = useState(null);
  const [activeListing, setActiveListing] = useState(null);

  const getListing = (listingId) => {
    const daListing = listings.find((listing) => listing.listingId = listingId);
    console.log(daListing);
    return daListing;
  }

  const handleClick = (listingId) => {
    // Look through listings
    
    console.log(listingId);

    if (!listings) return;
    if (!map) return;

    const driveway  = listings.find((listing) => listing.listingID == listingId);
    setActiveId(driveway.listingID);
    console.log(driveway);
    map.panTo({lat: driveway.lat, lng:driveway.lng});
    setActiveListing(driveway);
  }

  const handleReserveClick = () => {
    router.push("/reserve");
  }

  return (
    <div className="sidebar">
      <ListingSearchBar />
      <div className="listing">
        {listings && listings.map(listing => 
            <Listing
              key={listing.listingID}
              name={listing.name}
              streetAddress={listing.address}
              priceRate={listing.price}
              avgRating={listing.rating}
              numRatings={listing.numRatings}
              description={listing.description}
              listingId={listing.listingID}
              handleClick={handleClick}
              active={listing.listingID == activeId ? true : false}
          />
          )}
        <div className='remaining-space'></div>
      </div>
      {activeId ? <DrivewayModal 
        handleClose={() => setActiveId(null)} 
        name={activeListing.name}
        streetAddress={activeListing.address}
        priceRate={activeListing.price}
        avgRating={activeListing.rating}
        numRatings={activeListing.numRatings}
        description={activeListing.description}
        listingId={activeListing.listingID}
        handleClick={activeListing.handleClick}
        handleReserveClick={handleReserveClick}
        // active={activeListing.active}
        /> : <></>}
    </div>
  );
};

export default Sidebar;
