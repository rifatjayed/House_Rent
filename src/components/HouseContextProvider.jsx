import React, { Children, createContext, useState } from 'react';


// import data
import {housesData} from '../data.js'

export const HouseContext= createContext();

const HouseContextProvider = ({children}) => {
    const [houses, sethouses]= useState(housesData);
    const [country, setCountry]= useState('Location (any)');
    const [countries, setcountries]= useState([]);
    const [property, setProperty]= useState('Property type (any)');
    const [properties, setProperties]= useState([]);
    const [price, setPrice]= useState('Price range (Any)');
    const [loading, setLoading]= useState(false);
    return (
        <HouseContext.Provider value={''}>
            {children}
        </HouseContext.Provider>
    );
};

export default HouseContextProvider;