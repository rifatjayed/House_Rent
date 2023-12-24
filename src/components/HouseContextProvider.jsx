import React, { Children, createContext, useEffect, useState } from 'react';


// import data
import {housesData} from '../data.js'

export const HouseContext= createContext();

const HouseContextProvider = ({children}) => {
    const [houses, sethouses]= useState(housesData);
    const [country, setCountry]= useState('Location (any)');
    const [countries, setCountries]= useState([]);
    const [property, setProperty]= useState('Property type (any)');
    const [properties, setProperties]= useState([]);
    const [price, setPrice]= useState('Price range (Any)');
    const [loading, setLoading]= useState(false);

 useEffect(()=>{
    const allCountries =houses.map((house)=>{
        return house.country;
    });

const uniqueCOuntries= ['location (any)',... new Set(allCountries)]

// console.log(uniqueCOuntries)
setCountries(uniqueCOuntries); 
 },[])
 




 useEffect(()=>{
    const allProperties =houses.map((house)=>{
        return house.type;
    });

const uniqueProperties= ['location (any)',... new Set(allProperties)]

// console.log(uniqueCOuntries)
setProperties(uniqueProperties); 
 },[])
 
    return (
        <HouseContext.Provider value={{
            country,
             setCountry,
            countries,
            property,
            setProperty,
            properties, 
            price,
            setPrice,
            houses,
            loading,
        }}>
            {children}
        </HouseContext.Provider>
    );
};

export default HouseContextProvider;