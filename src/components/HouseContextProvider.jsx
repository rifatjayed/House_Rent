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
    const [price, setPrice] = useState('Price range (any)');
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



    const handleClick = () => {
        // console.log(country, property, price )

        const isDefault = (str) => {
            return str.split(" ").includes("(any)");
        };
        // console.log(isDefault(country))
        const minPrice = parseInt(price.split(' ')[0]);


        const maxPrice = parseInt(price.split('-')[1]);
        // console.log(price)

        const newHouse = housesData.filter((house) => {

            // console.log(house.price)
            const housePrice = parseInt(house.price)

            if (
                house.country === country &&
                house.type === property &&
                housePrice >= minPrice &&
                housePrice <= maxPrice
            ) {

                return house;
            }

            // if all values are default
   
            if (isDefault(country) && isDefault(property) && isDefault(price)) {
                return house;
                // console.log(house)
          
            }
            if(!isDefault(country) && isDefault(property) && isDefault(price)){

                return house.country === country;

            }
            if(!isDefault(property) && isDefault( country) && isDefault(price)){

                return house.type=== property;

            }  
                if(!isDefault(price) && isDefault(property) && isDefault(country)){

           if(housePrice >= minPrice && housePrice <= maxPrice){
            return house
           }

            }

        });

        // console.log(country, property,minPrice, maxPrice)
        console.log(newHouse)
    };

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