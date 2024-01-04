import React, { Children, createContext, useEffect, useState } from 'react';


// import data
import { housesData } from '../data.js'

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
    const [houses, setHouses] = useState(housesData);
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

        // set loading

        setLoading(true);

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
            // if country values are not default

            if (!isDefault(country) && isDefault(property) && isDefault(price)) {

                return house.country === country;

            }
            // if property values are not default

            if (!isDefault(property) && isDefault(country) && isDefault(price)) {

                return house.type === property;

            }

            // if price values are not default

            if (!isDefault(price) && isDefault(property) && isDefault(country)) {

                if (housePrice >= minPrice && housePrice <= maxPrice) {
                    return house
                }

            }


            // if country and price values are not default

            if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
                if (housePrice >= minPrice && housePrice <= maxPrice) {
                    return house.country = country;
                }
            }

            // if property and price values are not default

            if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
                if (housePrice >= minPrice && housePrice <= maxPrice) {
                    return house.type = property;
                }
            }
        });


        setTimeout(() => {
            return newHouse.length < 1 ? setHouses([]) : setHouses(newHouse),
            setLoading(false);
        },1000);
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
            handleClick,
  
        }}>
            {children}
        </HouseContext.Provider>
    );
};

export default HouseContextProvider;