
import { useState } from "react";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import CountrySelector from "./components/CountrySelector";
import { countrySettings, type CountryCode } from "./data/countries";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import DesignPage from "./pages/DesignPage";
import OrderPage from "./pages/OrderPage";

const countryRoutes: Record<string, CountryCode> = {
  "/colombia": "co",
  "/peru": "pe",
  "/mexico": "mx",
  "/usa": "us",
  "/japon": "jp",
};

const countryPaths: Record<CountryCode, string> = {
  co: "/colombia",
  pe: "/peru",
  mx: "/mexico",
  us: "/usa",
  jp: "/japon",
};

function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  const isCategoryPage = path.startsWith("/category/");
  const isContactPage = path === "/contact";
  const isPricingPage = path === "/pricing";
  const isDesignPage = path === "/design";
  const isOrderPage = path === "/order";

  const fromCategory =
    sessionStorage.getItem("fromCategory") === "true";

  const savedCountry = localStorage.getItem("adelina-country");
  const validSavedCountry =
    savedCountry &&
    Object.prototype.hasOwnProperty.call(countrySettings, savedCountry)
      ? (savedCountry as CountryCode)
      : null;

  const routeCountry = countryRoutes[path] || null;

  const [country, setCountry] = useState<CountryCode | null>(
    routeCountry ||
      (isCategoryPage ||
      isContactPage ||
      isPricingPage ||
      isDesignPage ||
      isOrderPage ||
      fromCategory
        ? validSavedCountry
        : null)
  );

  if (!isCategoryPage && fromCategory) {
    sessionStorage.removeItem("fromCategory");
  }

  function chooseCountry(selectedCountry: CountryCode) {
    localStorage.setItem("adelina-country", selectedCountry);
    setCountry(selectedCountry);
    window.history.pushState({}, "", countryPaths[selectedCountry]);
  }

  if (isCategoryPage) {
    return <CategoryPage />;
  }

  if (isDesignPage) {
    return <DesignPage />;
  }

  if (isOrderPage) {
    return <OrderPage />;
  }

  if (isPricingPage) {
    return country
      ? <Pricing settings={countrySettings[country]} />
      : <CountrySelector onSelect={chooseCountry} />;
  }

  if (isContactPage) {
    return country
      ? <Contact settings={countrySettings[country]} />
      : <CountrySelector onSelect={chooseCountry} />;
  }

  if (!country) {
    return <CountrySelector onSelect={chooseCountry} />;
  }

  return <Home settings={countrySettings[country]} />;
}

export default App;
