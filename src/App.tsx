import { useState } from "react";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import CountrySelector from "./components/CountrySelector";
import { countrySettings, type CountryCode } from "./data/countries";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import DesignPage from "./pages/DesignPage";

function App() {
  const isCategoryPage = window.location.pathname.startsWith("/category/");
  const isContactPage = window.location.pathname === "/contact";
  const isPricingPage = window.location.pathname === "/pricing";
  const isDesignPage = window.location.pathname === "/design";
  const fromCategory = sessionStorage.getItem("fromCategory") === "true";

const [country, setCountry] = useState<CountryCode | null>(() => {
  if (
  isCategoryPage ||
  isContactPage ||
  isPricingPage ||
  isDesignPage ||
  fromCategory
) {
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

if (!country && 
  !isContactPage && 
  !isPricingPage && 
  !isCategoryPage &&
  !isDesignPage) {
  return <CountrySelector onSelect={chooseCountry} />;
}
  if (isCategoryPage) {
    return <CategoryPage />;
  }

  if (isDesignPage) {
  return <DesignPage />;
}
if (isPricingPage) {
  return <Pricing settings={countrySettings[country!]} />;
}

if (isContactPage) {
  
  return <Contact settings={countrySettings[country!]} />;
}

return country ? (
  <Home settings={countrySettings[country]} />
) : (
  <CountrySelector onSelect={chooseCountry} />
);}

export default App;