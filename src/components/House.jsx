import React from 'react';

// import icons
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const House = ({ house }) => {
  const { image, type, country, address, bedrooms, bathrooms, surface, price } = house
  return (
    <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transiton'>
      <img className='mb-8' src={image} alt="" srcset="" />
      <div className='mb-4 flex gap-x-2 text-sm'>
        <div className='bg-green-500 rounded-full text-white px-3'>
          {type}
        </div>
        <div className='bg-violet-500 rounded-full text-white px-3'>
 
          {country}
        </div>
      </div>
    </div>
  );
};

export default House;