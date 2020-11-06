import React, { useState, useEffect } from "react";

const url = "https://api.punkapi.com/v2/beers";
const BeerContext = React.createContext();

const BeerAppProvider = ({ children }) => {
  useEffect(() => {
    fetchBeers();
  }, []);

  const [beers, setBeers] = useState([]);

  const fetchBeers = async () => {
    const data = await fetch(url);
    const beers = await data.json();
    setBeers(beers);
    // console.log(beers);
  };
  return <BeerContext.Provider value={beers}>{children}</BeerContext.Provider>;
};

// export const useGlobalContext = () => {
//   return useContext(BeerContext);
// };

export { BeerContext, BeerAppProvider };
