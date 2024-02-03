import React from "react";
import { useState, useEffect, createContext } from "react";

import { housesData } from "../data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location(any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property type(any)");
  const [properties, setProperies] = useState([]);
  const [price, setPrice] = useState("price range (any)");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });
    const uniqueCountries = ["Location(any)", ...new Set(allCountries)];
    setCountries(uniqueCountries);
  }, []);
  // return all properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });
    const uniqueProperties = ["Proprty(any)", ...new Set(allProperties)];
    setProperies(uniqueProperties);
  }, []);

  const handleClick = () => {
    const isDefault = (str) => {
      return str.includes("(any)");
    };

    const minPrice = parseInt(price.split(" ")[0]);
    const maxPrice = parseInt(price.split(" ")[2]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }
      if (isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.type === property;
      }
    });
  };

  return (
    <HouseContext.Provider
      value={{
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
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
