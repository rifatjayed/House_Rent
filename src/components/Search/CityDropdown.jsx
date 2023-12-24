import React, { useContext, useState } from 'react';

import { Menu } from '@headlessui/react'

// import icon
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";


import HouseContextProvider, { HouseContext } from '../HouseContextProvider';

// import context


const CityDropdown = () => {
    const { country, setCountry, countries } = useContext(HouseContext)
    // console.log(countries)
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>

            <Menu as='div' className="dropdown relative">
                <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>

                    <RiMapPinLine className='dropdown-icon-primary'>  </RiMapPinLine >
                    <div>
                        <div className='text-[15px]'>
                            {country}
                        </div>
                        <div className='text-[13px]'>Select Your Place</div>


                    </div>
                    {isOpen ? (
                        <RiArrowUpSLine className='dropdown-icon-secondary'>

                        </RiArrowUpSLine>) :
                        (
                            <RiArrowDownSLine className='dropdown-icon-secondary text-left'>

                            </RiArrowDownSLine>
                        )}

                </Menu.Button>
                <Menu.Items className="dropdown-menu">
                    {countries.map((country, index) => {
                        return (
                            <Menu.Item 
                            onClick={()=> setCountry(country)}
                            className="cursor-pointer hover:text-violet-700 transition" as="li" key={index}>
                                {country}
                            </Menu.Item>
                        );
                    })}
                </Menu.Items>

            </Menu>


        </div>
    );
};

export default CityDropdown;