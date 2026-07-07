import { useState } from "react";
import Home from "./pages/Home";
import CountrySelector from "./components/CountrySelector";
import { countrySettings, type CountryCode } from "./data/countries";

localStorage.removeItem("adelina-country");

function App() {
  const [country, setCountry] = useState<CountryCode | null>(
    (localStorage.getItem("adelina-country") as CountryCode) || null
  );

  function chooseCountry(selectedCountry: CountryCode) {
    localStorage.setItem("adelina-country", selectedCountry);
    setCountry(selectedCountry);
  }

  if (!country) {
    return <CountrySelector onSelect={chooseCountry} />;
  }

  return <Home settings={countrySettings[country]} />;
}

export default App;