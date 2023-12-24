import React, { useContext, useState } from 'react';

import { Menu } from '@headlessui/react'

// import icon
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";


import { HouseContext } from '../HouseContextProvider';

// import context


const PropertyDropdown = () => {
    const { property,setProperty, properties } = useContext(HouseContext)
    // console.log(countries)
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>

            <Menu as='div' className="dropdown relative">
                <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>

                    <RiHome5Line className='dropdown-icon-primary'>  </RiHome5Line >
                    <div>
                        <div className='text-[15px]'>
                            {property}
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
                    {properties.map((property, index) => {
                        return (
                            <Menu.Item 
                            onClick={()=> setProperty(property)}
                            className="cursor-pointer hover:text-violet-700 transition" as="li" key={index}>
                                {property}
                            </Menu.Item>
                        );
                    })}
                </Menu.Items>

            </Menu>


        </div>
    );
};

// export default CityDropdown;

export default PropertyDropdown;