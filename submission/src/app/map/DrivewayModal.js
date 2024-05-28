import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { DrivewayMapContext } from './DrivewayMapContext';
import { PiStarDuotone, PiX } from 'react-icons/pi';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
const DrivewayModal  = ({ 
    // listing, 
    handleClose,
    handleReserveClick,
    name,
    streetAddress,
    priceRate,
    avgRating,
    numRatings,
    description,
    imgUrl,
    imgAlt,
    listingId,
    handleClick,
    active
}) => {

    const getImageURL = (listingId) => {
                if (listingId % 9 === 0) return'/streetDefault.jpg';
                if (listingId % 9 === 1) return'/parking1.jpeg';
                if (listingId % 9 === 2) return'/parking2.jpeg';
                if (listingId % 9 === 3) return'/parking3.jpeg';
                if (listingId % 9 === 4) return'/parking4.jpeg';
                if (listingId % 9 === 5) return'/parking5.jpeg';
                if (listingId % 9 === 6) return'/parking6.jpeg';
                if (listingId % 9 === 7) return'/parking7.jpeg';
                if (listingId % 9 === 8) return'/parking8.jpeg'; 
                else return'/parking9.jpeg'
    }
  return (
    <div className="driveway-modal-container">
      <div className="driveway-modal">
        <button className="driveway-close" onClick={handleClose}>
          <PiX className="purple-icon" />
        </button>
        <Image className="listing-image rounded-lg"
            width={256}
            height={256}
            alt={'Picture of the street'}
            src={getImageURL(listingId)}
        />
        <div className='listing-information'>
            <p className="street-address font-bold text-2xl">{name}</p>
            <p className="price text-right font-bold text-2xl">${priceRate}/hr</p>
            <p className="rating">
                <PiStarDuotone className="icon purple-icon me-1 text-lg" />
                {/* 4.5/5 (17) */}
                {avgRating}/5 ({numRatings})
            </p>
          <p className="description">{description}</p>
        </div>
        <div className='reservation-buttons'>
            <button onClick={handleReserveClick}>Reserve Now!</button>
        </div>
      </div>
    </div>
  );
};

export default DrivewayModal;

// <div className="driveway-modal">
//         <button className="driveway-close" onClick={handleClose}>
//           <PiX className="purple-icon" />
//         </button>
//         <Image className="listing-image rounded-lg"
//             width={256}
//             height={256}
//             alt={'Picture of the street'}
//             src={getImageURL(listingId)}
//         />
//         <div className='listing-information'>
//             <p className="street-address font-bold text-2xl">123 Street</p>
//             <p className="price text-right font-bold text-2xl">$5.00/hr</p>
//             <p className="rating">
//                 <PiStarDuotone className="icon purple-icon me-1 text-lg" />
//                 4.5/5 (17)
//             </p>
//           <p className="description">Nice cozy parking spot by the hill. Low chance of your cary getting dirty</p>
//         </div>
//         <div className='reservation-buttons'>
//             <button onClick={handleClose}>Reserve Now!</button>
//         </div>
//       </div>