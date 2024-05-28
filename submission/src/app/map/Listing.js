import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { PiStarDuotone } from "react-icons/pi";

const Listing = ({
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

  return (
    <div className={`listing-item rounded-lg ${active ? "active-listing" : ""}`} onClick={() => handleClick(listingId)}>
      <Image 
        className='parking-image rounded-lg'
        src={
          listingId % 9 === 0 ? (imgUrl ?? "/streetDefault.jpg") :
          listingId % 9 === 1 ? (imgUrl ?? "/parking1.jpeg") :
          listingId % 9 === 2 ? (imgUrl ?? "/parking2.jpeg") :
          listingId % 9 === 3 ? (imgUrl ?? "/parking3.jpeg") :
          listingId % 9 === 4 ? (imgUrl ?? "/parking4.jpeg") :
          listingId % 9 === 5 ? (imgUrl ?? "/parking5.jpeg") :
          listingId % 9 === 6 ? (imgUrl ?? "/parking6.jpeg") :
          listingId % 9 === 7 ? (imgUrl ?? "/parking7.jpeg") :
          listingId % 9 === 8 ? (imgUrl ?? "/parking8.jpeg") :
          (imgUrl ?? "/parking9.jpeg")
        }
        width={128}
        height={128}
        alt={imgAlt ?? "Picture of the street"}
      />
      <div className="parking-spot-info">
        <div className="primary-info">
          <p className="street-address font-bold text-2xl">{name}</p>
          <p className="price text-right font-bold text-2xl">${priceRate}/hr</p>
        </div>
        <p className="parking-rating"><PiStarDuotone className='icon purple-icon me-1 text-lg'/>{avgRating}/5 ({numRatings})</p>
        <p className="parking-status">{description}</p>
      </div>
    </div>
  );
}

export default Listing;
