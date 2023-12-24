import React, { Children, createContext, useEffect, useState } from 'react';


// import data
import { housesData } from '../data.js'

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
    const [houses, sethouses] = useState(housesData);
    const [country, setCountry] = useState('Location (any)');
    const [countries, setCountries] = useState([]);
    const [property, setProperty] = useState('Property type (any)');
    const [properties, setProperties] = useState([]);
    const [price, setPrice] = useState('Price range (Any)');
    const [loading, setLoading] = useState(false);



    // return all countries

    useEffect(() => {
        const allCountries = houses.map((house) => {
            return house.country;
        });
        // remove duplicate
        const uniqueCOuntries = ['location (any)', ... new Set(allCountries)]
        // set Country state
        setCountries(uniqueCOuntries);
    }, [])




    // return all properties
    useEffect(() => {
        const allProperties = houses.map((house) => {
            return house.type;
        });

        // remove duplicate
        const uniqueProperties = ['location (any)', ... new Set(allProperties)]

        // set Property  state
        setProperties(uniqueProperties);
    }, [])



const handleClick =()=>{
    console.log("clicked")
}

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
            handleClick 
        }}>
            {children}
        </HouseContext.Provider>
    );
};

export default HouseContextProvider;