import { useEffect, useState } from 'react';
import ItemList from './components/item-list/item-list.components';
import SearchBox from './components/search-box/search-box.components';
import CheckBox from './components/check-box/check-box.components';
import "./App.css";

const App = () => {

  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [nameFilterValue, setNameFilterValue] = useState("");
  const [isEurope, setIsEurope] = useState(false);
  const [continents, setContinents] = useState([]);

  const onSearchBoxChangeHandler = (event) => {
    setNameFilterValue(event.target.value.toLowerCase());
  };

  const onCheckBoxChangeHandler = () => {
    setIsEurope(!isEurope);
  }

  const onCheckBoxEuropeHandler = () => {
    setContinents(!continents.europe);
  }

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((countriesJson) => {
        setCountries(countriesJson);
        setFilteredCountries(countriesJson);
        console.log(countriesJson);
      })

    setContinents (
      {
        europe: true, 
        africa: true, 
        northAmerica: true, 
        southAmerica: true, 
        asia : true, 
        australia: true, 
        oceania: true
      }
    )
  }, []);

  const filterCountries = () => {
    console.log("filtering countries")
    const filteredCountries = countries

      .filter((country) => {
        //console.log(country);

        console.log(country.capital)
        return  (country.name.common.toLowerCase().includes(nameFilterValue) || country?.capital?.join(",").toLowerCase().includes(nameFilterValue));
         
      })
      .filter((country) => {
        if (isEurope) {
          console.log(country.independent);
          return country.continents.includes("Europe");
        }
        return true;
      });

    setFilteredCountries(filteredCountries);
  }

  useEffect(() => {
    filterCountries()
  }, [nameFilterValue, isEurope]);


  return (
    <div width="100%">
      <h1>Countries</h1>
      <SearchBox
        placeholder="Search by country or capital"
        onChangeHandler={onSearchBoxChangeHandler}
      />

      <CheckBox
        onChangeHandler={onCheckBoxChangeHandler}
        filter='Europe'
      />
      <ItemList
        items={filteredCountries}
      />
    </div>
  );
}



export default App;