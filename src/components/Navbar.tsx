import { useState } from "react";
import { countries, type CountryCode } from "../data/countries";

function Navbar() {
  const [open, setOpen] = useState(false);
const [countryOpen, setCountryOpen] = useState(false);
  const currentCountry =
    (localStorage.getItem("adelina-country") as CountryCode) || "co";
  
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src="/adelina-logo-header.png" alt="Adelina" />
      </div>

      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
      >
        ☰
      </button>

      <div className={open ? "nav-links nav-open" : "nav-links"}>
        <a>Diseños</a>
        <a>Precios</a>
        <a>Personalizado</a>
        <a>Contacto</a>
      </div>


<div
  className="country-switcher"
  onClick={() => setCountryOpen(!countryOpen)}
>
  <button className="nav-cta">
    {countries.find((c) => c.code === currentCountry)?.flag}{" "}
    {countries.find((c) => c.code === currentCountry)?.name} ▼
  </button>

<div className={countryOpen ? "country-menu show" : "country-menu"}>    {countries.map((country) => (

      <button
        key={country.code}
        onClick={() => {
          localStorage.setItem("adelina-country", country.code);
          window.location.reload();
        }}
      >
        {country.flag} {country.name}
      </button>

    ))}

  </div>

</div>



    </nav>
  );
}

export default Navbar;