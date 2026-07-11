import { useState } from "react";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import CountrySelector from "./components/CountrySelector";
import { countrySettings, type CountryCode } from "./data/countries";
function App() {
  const isCategoryPage = window.location.pathname.startsWith("/category/");
  const fromCategory = sessionStorage.getItem("fromCategory") === "true";

  const [country, setCountry] = useState<CountryCode | null>(() => {
    if (isCategoryPage || fromCategory) {
      return (localStorage.getItem("adelina-country") as CountryCode) || null;
    }

    return null;
  });

  if (!isCategoryPage && fromCategory) {
    sessionStorage.removeItem("fromCategory");
  }

  function chooseCountry(selectedCountry: CountryCode) {
    localStorage.setItem("adelina-country", selectedCountry);
    setCountry(selectedCountry);
  }

  if (!country) {
    return <CountrySelector onSelect={chooseCountry} />;
  }

  if (isCategoryPage) {
    return <CategoryPage />;
  }

  return <Home settings={countrySettings[country]} />;
}

export default App;