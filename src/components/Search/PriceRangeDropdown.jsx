import React, { useContext, useState } from 'react';

import { Menu } from '@headlessui/react'

// import icon
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

// import context
import { HouseContext } from '../HouseContextProvider';




const PriceRangeDropdown = () => {
    const { price,  setPrice } = useContext(HouseContext)

    const [isOpen, setIsOpen] = useState(false);
   
    const prices= [
        {
            value: "Price range any"
        },
        {
            value: "100000-130000"
        },
        {
            value: "130000-160000"
        },
        {
            value: "160000-190000"
        },
        {
            value: "190000-220000"
        },
        {
            value: "10000-30000"
        },
        {
            value: "30000-40000"
        },
    ]

    return (
        <div>

            <Menu as='div' className="dropdown relative">
                <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>

                    <RiWallet3Line className='dropdown-icon-primary'>  </RiWallet3Line >
                    <div>
                        <div className='text-[15px]'>
                            {price}
                        </div>
                        <div className='text-[13px]'>Choose Price Range</div>


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
                    {prices.map((price, index) => {
                        return (
                            <Menu.Item 
                            onClick={()=> setPrice(price.value)}
                            className="cursor-pointer hover:text-violet-700 transition" as="li" key={index}>
                                {price.value}
                            </Menu.Item>
                        );
                    })}
                </Menu.Items>

            </Menu>


        </div>
    );
};



// export default PropertyDropdown;

export default PriceRangeDropdown;