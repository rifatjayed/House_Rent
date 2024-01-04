import React, { useContext } from 'react';
import { HouseContext } from './HouseContextProvider';

// icons import
// import { ImSpinner2 } from "react-icons/ri";

import { ImSpinner8 } from "react-icons/im";

import House from './House';
import { Link } from 'react-router-dom';

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext)

  // if loading is true
  if (loading) {
    return (
      <ImSpinner8 className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px]'></ImSpinner8>
    );

  }
  if (houses.length < 1) {
    return <div className='text-center text-3xl text-gray-400 mt-48'>Sorry nothing found</div>
  }


  return (
    <section className='mb-20'>
      <div className='container mx-auto'>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
          {
            houses.map((house, index) => {
              return (
                <Link to={`/property/${house.id}`} key={index}>
                  <House house={house}></House>
                </Link>
              )
            })
          }
        </div>
      </div>

    </section>
  );
};

export default HouseList;